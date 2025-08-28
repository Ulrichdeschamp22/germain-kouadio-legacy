import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, SkipBack, SkipForward, Volume2, Download, Share2, Bell, RotateCw } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

interface Track {
  id: number;
  title: string;
  duration: string;
  url: string;
}

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);
  const [isLooping, setIsLooping] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const tracks: Track[] = [
    {
      id: 1,
      title: "Les fondements du leadership chrétien",
      duration: "45:32",
      url: "#"
    },
    {
      id: 2,
      title: "Équiper les leaders pour impacter leur génération",
      duration: "52:18",
      url: "#"
    },
    {
      id: 3,
      title: "L'appel missionnaire dans le 21e siècle",
      duration: "38:45",
      url: "#"
    },
    {
      id: 4,
      title: "La transformation par la Parole",
      duration: "41:20",
      url: "#"
    },
    {
      id: 5,
      title: "Former des disciples qui font des disciples",
      duration: "49:15",
      url: "#"
    }
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const playTrack = (index: number) => {
    setCurrentTrack(index);
    setIsPlaying(true);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  };

  const previousTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  return (
    <section id="audio" className="py-20 bg-gradient-divine">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Enseignements Audio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Écoutez les messages puissants du Professeur Germain Kouadio
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Player */}
          <div className="bg-card rounded-xl shadow-divine p-8 mb-8">
            {/* Current Track Info */}
            <div className="text-center mb-6">
              <h3 className="font-heading text-2xl font-bold mb-2">
                {tracks[currentTrack].title}
              </h3>
              <p className="text-muted-foreground">Durée: {tracks[currentTrack].duration}</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <Slider
                value={[progress]}
                onValueChange={(value) => setProgress(value[0])}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>0:00</span>
                <span>{tracks[currentTrack].duration}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={previousTrack}
              >
                <SkipBack className="h-5 w-5" />
              </Button>

              <Button
                variant="hero"
                size="icon"
                className="h-14 w-14"
                onClick={togglePlayPause}
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextTrack}
              >
                <SkipForward className="h-5 w-5" />
              </Button>
            </div>

            {/* Volume & Options */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 flex-1 max-w-xs">
                <Volume2 className="h-4 w-4 text-muted-foreground" />
                <Slider
                  value={[volume]}
                  onValueChange={(value) => setVolume(value[0])}
                  max={100}
                  step={1}
                  className="flex-1"
                />
              </div>

              <div className="flex gap-2">
                <Button
                  variant={isLooping ? "secondary" : "ghost"}
                  size="icon"
                  onClick={() => setIsLooping(!isLooping)}
                >
                  <RotateCw className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Playlist */}
          <div className="bg-card rounded-xl shadow-card p-6">
            <h3 className="font-heading text-xl font-bold mb-4">Playlist</h3>
            <div className="space-y-2">
              {tracks.map((track, index) => (
                <div
                  key={track.id}
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all hover:bg-accent ${
                    currentTrack === index ? 'bg-accent' : ''
                  }`}
                  onClick={() => playTrack(index)}
                >
                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                    >
                      {currentTrack === index && isPlaying ? (
                        <Pause className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                    </Button>
                    <div>
                      <p className="font-medium">{track.title}</p>
                      <p className="text-sm text-muted-foreground">{track.duration}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Subscribe Button */}
            <div className="mt-6 text-center">
              <Button variant="golden" size="lg" className="w-full sm:w-auto">
                <Bell className="mr-2" />
                S'abonner au podcast
              </Button>
            </div>
          </div>
        </div>

        <audio ref={audioRef} />
      </div>
    </section>
  );
};

export default AudioPlayer;