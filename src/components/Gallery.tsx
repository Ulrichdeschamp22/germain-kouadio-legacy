import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Gallery: React.FC = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const videos = [
    { id: '1', videoId: 'FUGdIvDKvCk', title: 'Enseignement du Professeur Germain Kouadio' },
    { id: '2', videoId: '6k4EuLk5KQU', title: 'Message Puissant - Leadership Transformationnel' },
    { id: '3', videoId: 'qf5EoT-kjyg', title: 'Transformer les Nations par le Leadership' },
    { id: '4', videoId: '-IT8DRIpuI4', title: 'Former pour Transformer - IRTN' }
  ];

  const getThumbnailUrl = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  return (
    <section id="galerie" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
            Galerie
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Suivez les enseignements puissants du Professeur et Pasteur Germain Kouadio
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card 
              key={video.id} 
              className="group overflow-hidden transition-all duration-300 hover:shadow-golden cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm"
              onClick={() => setPlayingVideo(playingVideo === video.videoId ? null : video.videoId)}
            >
              <div className="relative">
                <AspectRatio ratio={16 / 9}>
                  {playingVideo === video.videoId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <img
                        src={getThumbnailUrl(video.videoId)}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/95 backdrop-blur-sm rounded-full p-3 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground shadow-divine">
                          <Play className="h-6 w-6 md:h-8 md:w-8 fill-current" />
                        </div>
                      </div>
                    </div>
                  )}
                </AspectRatio>
              </div>
              <div className="p-4">
                <h3 className="font-heading text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {video.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;