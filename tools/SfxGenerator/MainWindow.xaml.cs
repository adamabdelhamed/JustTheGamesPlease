using Microsoft.Win32;
using System.Collections.ObjectModel;
using System.Diagnostics;
using System.IO;
using System.Net.Http;
using System.Windows;

namespace SfxGenerator;

public partial class MainWindow : Window
{
    private const int CandidateCount = 5;
    private readonly string _repoRoot;
    private readonly ElevenLabsClient _elevenLabsClient = new(new HttpClient());
    private readonly AudioPlaybackService _audioPlayback = new();
    private readonly SessionStore _sessionStore;
    private readonly SettingsStore _settingsStore;
    private string _sessionFolder = "";
    private string _originalJson = "";
    private bool _isBusy;

    public ObservableCollection<RequestGroup> Groups { get; } = new();

    public MainWindow()
    {
        InitializeComponent();
        _repoRoot = FindRepoRoot(AppContext.BaseDirectory);
        _sessionStore = new SessionStore(_repoRoot);
        _settingsStore = new SettingsStore(_repoRoot);
        DataContext = this;
        SessionText.Text = $"Repo root: {_repoRoot}";
        _ = LoadSettingsAsync();
    }

    private async void LoadClipboard_Click(object sender, RoutedEventArgs e)
    {
        await LoadJsonAsync(Clipboard.GetText());
    }

    private async void LoadFile_Click(object sender, RoutedEventArgs e)
    {
        var dialog = new OpenFileDialog { Filter = "JSON files (*.json)|*.json|All files (*.*)|*.*" };
        if (dialog.ShowDialog(this) == true)
        {
            await LoadJsonAsync(await File.ReadAllTextAsync(dialog.FileName));
        }
    }

    private async Task LoadJsonAsync(string json)
    {
        try
        {
            StatusText.Text = "";
            var requests = RequestLoader.ParseRequests(json);
            var groups = RequestLoader.ExpandTargets(requests, _repoRoot);
            foreach (var group in groups)
            {
                AttachGroup(group);
            }

            Groups.Clear();
            foreach (var group in groups)
            {
                Groups.Add(group);
            }

            _originalJson = json;
            _sessionFolder = _sessionStore.CreateSessionFolder();
            await SaveSessionAsync();
            SessionText.Text = $"Session: {_sessionFolder}";
        }
        catch (Exception exception)
        {
            StatusText.Text = exception.Message;
        }
    }

    private async void GenerateAll_Click(object sender, RoutedEventArgs e)
    {
        if (_isBusy || Groups.Count == 0)
        {
            return;
        }

        await RunBusyAsync(async () =>
        {
            foreach (var target in Groups.SelectMany(group => group.Targets))
            {
                if (target.Candidates.Count == 0)
                {
                    await GenerateCandidatesAsync(target);
                }
            }
        });
    }

    private async void Regenerate_Click(object sender, RoutedEventArgs e)
    {
        if (_isBusy || sender is not FrameworkElement { DataContext: SoundTarget target })
        {
            return;
        }

        await RunBusyAsync(() => GenerateCandidatesAsync(target));
    }

    private void Play_Click(object sender, RoutedEventArgs e)
    {
        if (sender is FrameworkElement { DataContext: SoundCandidate candidate } && File.Exists(candidate.TempPath))
        {
            _audioPlayback.Play(candidate);
        }
    }

    private async void Select_Click(object sender, RoutedEventArgs e)
    {
        if (_isBusy || sender is not FrameworkElement { DataContext: SoundCandidate candidate } || candidate.Target is null)
        {
            return;
        }

        await InstallCandidateAsync(candidate, candidate.Target);
    }

    private async void SelectSlot_Click(object sender, RoutedEventArgs e)
    {
        if (_isBusy ||
            sender is not FrameworkElement { DataContext: SoundCandidate candidate } ||
            candidate.SelectedInstallTarget is null)
        {
            return;
        }

        await InstallCandidateAsync(candidate, candidate.SelectedInstallTarget);
    }

    private async Task InstallCandidateAsync(SoundCandidate candidate, SoundTarget target)
    {
        await RunBusyAsync(async () =>
        {
            Directory.CreateDirectory(Path.GetDirectoryName(target.FullPath)!);
            File.Copy(candidate.TempPath, target.FullPath, true);
            foreach (var existing in target.Candidates)
            {
                existing.IsSelected = false;
            }

            candidate.IsSelected = true;
            target.Status = $"Installed candidate {candidate.Index} to {target.RelativePath}";
            await SaveSessionAsync();
        });
    }

    private void OpenFolder_Click(object sender, RoutedEventArgs e)
    {
        if (sender is not FrameworkElement { DataContext: SoundTarget target })
        {
            return;
        }

        Directory.CreateDirectory(Path.GetDirectoryName(target.FullPath)!);
        Process.Start(new ProcessStartInfo("explorer.exe", $"/select,\"{target.FullPath}\"") { UseShellExecute = true });
    }

    private async Task GenerateCandidatesAsync(SoundTarget target)
    {
        var apiKey = ResolveApiKey();
        if (string.IsNullOrWhiteSpace(apiKey))
        {
            throw new InvalidOperationException("Set ELEVENLABS_API_KEY or enter an API key in the UI.");
        }

        await SaveApiKeyIfNeededAsync();
        EnsureSession();
        target.IsBusy = true;
        target.Status = "Generating candidates...";
        target.Candidates.Clear();

        try
        {
            for (var index = 1; index <= CandidateCount; index++)
            {
                var path = _sessionStore.GetCandidatePath(_sessionFolder, target, index);
                await _elevenLabsClient.GenerateSoundEffectAsync(apiKey, target.Request.Description, path, CancellationToken.None);
                target.Candidates.Add(new SoundCandidate { Index = index, TempPath = path, Target = target, SelectedInstallTarget = target });
                target.Status = $"Generated {index} of {CandidateCount} candidates";
                await SaveSessionAsync();
            }

            target.Status = "Ready for preview and selection";
        }
        finally
        {
            target.IsBusy = false;
            await SaveSessionAsync();
        }
    }

    private async Task RunBusyAsync(Func<Task> action)
    {
        try
        {
            _isBusy = true;
            StatusText.Text = "";
            await action();
        }
        catch (Exception exception)
        {
            StatusText.Text = exception.Message;
        }
        finally
        {
            _isBusy = false;
        }
    }

    private void EnsureSession()
    {
        if (string.IsNullOrWhiteSpace(_sessionFolder))
        {
            _sessionFolder = _sessionStore.CreateSessionFolder();
            SessionText.Text = $"Session: {_sessionFolder}";
        }
    }

    private async Task SaveSessionAsync()
    {
        if (!string.IsNullOrWhiteSpace(_sessionFolder))
        {
            await _sessionStore.SaveAsync(_sessionFolder, _originalJson, Groups);
        }
    }

    private string ResolveApiKey()
    {
        var environmentValue = Environment.GetEnvironmentVariable("ELEVENLABS_API_KEY");
        return string.IsNullOrWhiteSpace(environmentValue) ? ApiKeyBox.Password : environmentValue;
    }

    private async Task LoadSettingsAsync()
    {
        try
        {
            var settings = await _settingsStore.LoadAsync();
            if (string.IsNullOrWhiteSpace(Environment.GetEnvironmentVariable("ELEVENLABS_API_KEY")))
            {
                ApiKeyBox.Password = settings.ApiKey;
            }
        }
        catch (Exception exception)
        {
            StatusText.Text = $"Could not load settings: {exception.Message}";
        }
    }

    private async void SaveApiKey_Click(object sender, RoutedEventArgs e)
    {
        await SaveApiKeyIfNeededAsync();
        StatusText.Text = "API key saved.";
    }

    private async Task SaveApiKeyIfNeededAsync()
    {
        if (!string.IsNullOrWhiteSpace(Environment.GetEnvironmentVariable("ELEVENLABS_API_KEY")))
        {
            return;
        }

        await _settingsStore.SaveAsync(new ToolSettings { ApiKey = ApiKeyBox.Password });
    }

    private static void AttachGroup(RequestGroup group)
    {
        foreach (var target in group.Targets)
        {
            target.InstallTargets = group.Targets;
            AttachTarget(target);
        }
    }

    private static void AttachTarget(SoundTarget target)
    {
        foreach (var candidate in target.Candidates)
        {
            candidate.Target = target;
            candidate.SelectedInstallTarget ??= target;
        }
    }

    private static string FindRepoRoot(string start)
    {
        var directory = new DirectoryInfo(start);
        while (directory is not null)
        {
            if (Directory.Exists(Path.Combine(directory.FullName, ".git")))
            {
                return directory.FullName.TrimEnd(Path.DirectorySeparatorChar) + Path.DirectorySeparatorChar;
            }

            directory = directory.Parent;
        }

        throw new InvalidOperationException("Could not find repo root from the application directory.");
    }
}
