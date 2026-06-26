using System.IO;
using System.Text.Json;

namespace SfxGenerator;

public sealed class SettingsStore
{
    private readonly string _settingsPath;
    private readonly JsonSerializerOptions _jsonOptions = new() { WriteIndented = true };

    public SettingsStore(string repoRoot)
    {
        _settingsPath = Path.Combine(repoRoot, ".tools", "sfx-generator", "settings.json");
    }

    public async Task<ToolSettings> LoadAsync()
    {
        if (!File.Exists(_settingsPath))
        {
            return new ToolSettings();
        }

        var json = await File.ReadAllTextAsync(_settingsPath);
        return JsonSerializer.Deserialize<ToolSettings>(json) ?? new ToolSettings();
    }

    public async Task SaveAsync(ToolSettings settings)
    {
        Directory.CreateDirectory(Path.GetDirectoryName(_settingsPath)!);
        await File.WriteAllTextAsync(_settingsPath, JsonSerializer.Serialize(settings, _jsonOptions));
    }
}
