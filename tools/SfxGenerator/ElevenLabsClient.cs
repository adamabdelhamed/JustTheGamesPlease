using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;

namespace SfxGenerator;

public sealed class ElevenLabsClient
{
    private readonly HttpClient _httpClient;

    public ElevenLabsClient(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task GenerateSoundEffectAsync(string apiKey, string prompt, string destinationPath, CancellationToken cancellationToken)
    {
        using var request = new HttpRequestMessage(HttpMethod.Post, "https://api.elevenlabs.io/v1/sound-generation?output_format=mp3_44100_128");
        request.Headers.Add("xi-api-key", apiKey);
        request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("audio/mpeg"));
        request.Content = new StringContent(JsonSerializer.Serialize(new
        {
            text = prompt
        }), Encoding.UTF8, "application/json");

        using var response = await _httpClient.SendAsync(request, HttpCompletionOption.ResponseHeadersRead, cancellationToken);
        if (!response.IsSuccessStatusCode)
        {
            var detail = await response.Content.ReadAsStringAsync(cancellationToken);
            throw new InvalidOperationException($"ElevenLabs request failed: {(int)response.StatusCode} {response.ReasonPhrase}{Environment.NewLine}{detail}");
        }

        await using var responseStream = await response.Content.ReadAsStreamAsync(cancellationToken);
        await using var fileStream = File.Create(destinationPath);
        await responseStream.CopyToAsync(fileStream, cancellationToken);
    }
}
