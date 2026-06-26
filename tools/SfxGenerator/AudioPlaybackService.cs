using System.Windows.Media;

namespace SfxGenerator;

public sealed class AudioPlaybackService
{
    private readonly MediaPlayer _player = new();
    private SoundCandidate? _current;

    public void Play(SoundCandidate candidate)
    {
        Stop();
        _current = candidate;
        candidate.IsPlaying = true;
        _player.Open(new Uri(candidate.TempPath, UriKind.Absolute));
        _player.Play();
    }

    public void Stop()
    {
        _player.Stop();
        _player.Close();
        if (_current is not null)
        {
            _current.IsPlaying = false;
            _current = null;
        }
    }
}
