using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Runtime.CompilerServices;
using System.Text.Json.Serialization;

namespace SfxGenerator;

public sealed class SoundRequest
{
    public string Id { get; set; } = "";
    public string Description { get; set; } = "";
    public string Location { get; set; } = "";
    public int Count { get; set; } = 1;
    public bool Loop { get; set; }
}

public sealed class SoundTarget : NotifyBase
{
    private bool _isBusy;
    private string _status = "Not generated";

    public SoundRequest Request { get; set; } = new();
    public string DisplayName { get; set; } = "";
    public string RelativePath { get; set; } = "";
    public string FullPath { get; set; } = "";
    public ObservableCollection<SoundCandidate> Candidates { get; set; } = new();

    [JsonIgnore]
    public ObservableCollection<SoundTarget> InstallTargets { get; set; } = new();

    [JsonIgnore]
    public bool IsBusy
    {
        get => _isBusy;
        set => SetField(ref _isBusy, value);
    }

    public string Status
    {
        get => _status;
        set => SetField(ref _status, value);
    }
}

public sealed class SoundCandidate : NotifyBase
{
    private bool _isSelected;
    private bool _isPlaying;
    private SoundTarget? _selectedInstallTarget;

    public int Index { get; set; }
    public string TempPath { get; set; } = "";

    public bool IsSelected
    {
        get => _isSelected;
        set => SetField(ref _isSelected, value);
    }

    [JsonIgnore]
    public bool IsPlaying
    {
        get => _isPlaying;
        set => SetField(ref _isPlaying, value);
    }

    [JsonIgnore]
    public SoundTarget? Target { get; set; }

    [JsonIgnore]
    public SoundTarget? SelectedInstallTarget
    {
        get => _selectedInstallTarget;
        set => SetField(ref _selectedInstallTarget, value);
    }
}

public sealed class RequestGroup
{
    public SoundRequest Request { get; set; } = new();
    public ObservableCollection<SoundTarget> Targets { get; set; } = new();
}

public sealed class SessionState
{
    public string OriginalRequestJson { get; set; } = "";
    public string RepoRoot { get; set; } = "";
    public string SessionFolder { get; set; } = "";
    public List<SoundTarget> Targets { get; set; } = new();
}

public sealed class ToolSettings
{
    public string ApiKey { get; set; } = "";
}

public abstract class NotifyBase : INotifyPropertyChanged
{
    public event PropertyChangedEventHandler? PropertyChanged;

    protected bool SetField<T>(ref T field, T value, [CallerMemberName] string? propertyName = null)
    {
        if (EqualityComparer<T>.Default.Equals(field, value))
        {
            return false;
        }

        field = value;
        PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        return true;
    }
}
