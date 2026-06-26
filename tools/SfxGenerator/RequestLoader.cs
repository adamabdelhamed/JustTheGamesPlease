using System.IO;
using System.Text.Json;

namespace SfxGenerator;

public static class RequestLoader
{
    private static readonly JsonSerializerOptions JsonOptions = new() { PropertyNameCaseInsensitive = true, WriteIndented = true };

    public static IReadOnlyList<SoundRequest> ParseRequests(string json)
    {
        if (string.IsNullOrWhiteSpace(json))
        {
            throw new InvalidDataException("JSON is empty.");
        }

        var requests = JsonSerializer.Deserialize<List<SoundRequest>>(json, JsonOptions);
        if (requests is null || requests.Count == 0)
        {
            throw new InvalidDataException("JSON must be a non-empty array of sound requests.");
        }

        var errors = new List<string>();
        for (var i = 0; i < requests.Count; i++)
        {
            var request = requests[i];
            if (string.IsNullOrWhiteSpace(request.Id)) errors.Add($"Request {i + 1}: id is required.");
            if (string.IsNullOrWhiteSpace(request.Description)) errors.Add($"Request {i + 1}: description is required.");
            if (string.IsNullOrWhiteSpace(request.Location)) errors.Add($"Request {i + 1}: location is required.");
            if (request.Count < 1) errors.Add($"Request {i + 1}: count must be at least 1.");
            if (Path.IsPathRooted(request.Location)) errors.Add($"Request {i + 1}: location must be repo-relative.");
            if (request.Location.Split(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar).Contains("..")) errors.Add($"Request {i + 1}: location cannot contain '..'.");
            if (request.Id != SanitizeFileName(request.Id)) errors.Add($"Request {i + 1}: id contains invalid filename characters.");
        }

        if (errors.Count > 0)
        {
            throw new InvalidDataException(string.Join(Environment.NewLine, errors));
        }

        return requests;
    }

    public static List<RequestGroup> ExpandTargets(IReadOnlyList<SoundRequest> requests, string repoRoot)
    {
        return requests.Select(request =>
        {
            var group = new RequestGroup { Request = request };
            for (var index = 0; index < request.Count; index++)
            {
                var fileName = index == 0 ? $"{request.Id}.mp3" : $"{request.Id}_Alt{index}.mp3";
                var relativePath = NormalizeRelativePath(Path.Combine(request.Location, fileName));
                var fullPath = Path.GetFullPath(Path.Combine(repoRoot, relativePath));
                if (!fullPath.StartsWith(repoRoot, StringComparison.OrdinalIgnoreCase))
                {
                    throw new InvalidDataException($"{relativePath} resolves outside the repo root.");
                }

                group.Targets.Add(new SoundTarget
                {
                    Request = request,
                    DisplayName = request.Count == 1 ? request.Id : $"{request.Id} alt slot {index}",
                    RelativePath = relativePath,
                    FullPath = fullPath
                });
            }

            return group;
        }).ToList();
    }

    private static string NormalizeRelativePath(string path) => path.Replace('\\', '/');

    private static string SanitizeFileName(string fileName) => string.Concat(fileName.Where(character => !Path.GetInvalidFileNameChars().Contains(character)));
}
