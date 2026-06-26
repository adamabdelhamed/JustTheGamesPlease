using System.IO;
using System.Text.Json;

namespace SfxGenerator;

public sealed class SessionStore
{
    private readonly string _repoRoot;
    private readonly JsonSerializerOptions _jsonOptions = new() { WriteIndented = true };

    public SessionStore(string repoRoot)
    {
        _repoRoot = repoRoot;
    }

    public string CreateSessionFolder()
    {
        var folder = Path.Combine(_repoRoot, ".tools", "sfx-generator", "sessions", DateTime.Now.ToString("yyyyMMdd-HHmmss"));
        Directory.CreateDirectory(folder);
        return folder;
    }

    public string GetCandidatePath(string sessionFolder, SoundTarget target, int candidateIndex)
    {
        var safeTarget = target.RelativePath.Replace('/', '_').Replace('\\', '_');
        return Path.Combine(sessionFolder, $"{safeTarget}_Candidate{candidateIndex}.mp3");
    }

    public async Task SaveAsync(string sessionFolder, string originalJson, IEnumerable<RequestGroup> groups)
    {
        var state = new SessionState
        {
            OriginalRequestJson = originalJson,
            RepoRoot = _repoRoot,
            SessionFolder = sessionFolder,
            Targets = groups.SelectMany(group => group.Targets).ToList()
        };

        var sessionPath = Path.Combine(sessionFolder, "session.json");
        await File.WriteAllTextAsync(sessionPath, JsonSerializer.Serialize(state, _jsonOptions));
        await File.WriteAllTextAsync(Path.Combine(_repoRoot, ".tools", "sfx-generator", "last-session.txt"), sessionPath);
    }
}
