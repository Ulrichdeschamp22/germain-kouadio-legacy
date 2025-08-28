import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');

  const categories = [
    { id: 'all', label: 'Tout voir' },
    { id: 'usa', label: 'USA' },
    { id: 'canada', label: 'Canada' },
    { id: 'france', label: 'France' },
    { id: 'africa', label: 'Afrique' },
    { id: 'conferences', label: 'Conférences' },
    { id: 'seminars', label: 'Séminaires IRTN' }
  ];

  const galleryItems = [
    { id: 1, type: 'image', category: 'usa', title: 'Conférence Atlanta 2024', thumbnail: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400' },
    { id: 2, type: 'video', category: 'france', title: 'Séminaire Paris 2024', thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 3, type: 'image', category: 'africa', title: 'Croisade Abidjan 2024', thumbnail: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400' },
    { id: 4, type: 'image', category: 'canada', title: 'Convention Toronto 2024', thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400' },
    { id: 5, type: 'image', category: 'conferences', title: 'Leadership Summit 2024', thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400' },
    { id: 6, type: 'video', category: 'seminars', title: 'Formation IRTN Module 1', thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 7, type: 'image', category: 'usa', title: 'Église locale - Atlanta', thumbnail: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400' },
    { id: 8, type: 'image', category: 'africa', title: 'Mission Sénégal 2024', thumbnail: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleVideoClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setIsVideoModalOpen(true);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const imageItems = filteredItems.filter(item => item.type === 'image');
    const currentIndex = imageItems.findIndex((_, index) => index === selectedImage);
    
    if (direction === 'prev') {
      setSelectedImage(currentIndex > 0 ? currentIndex - 1 : imageItems.length - 1);
    } else {
      setSelectedImage(currentIndex < imageItems.length - 1 ? currentIndex + 1 : 0);
    }
  };

  return (
    <section id="galerie" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Galerie
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez les moments forts du ministère à travers le monde
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-card hover:shadow-divine transition-all duration-300 cursor-pointer"
              onClick={() => item.type === 'image' 
                ? handleImageClick(index) 
                : handleVideoClick(item.videoUrl!)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-medium">{item.title}</p>
                </div>
              </div>

              {/* Video Play Button */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 text-primary" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Image Lightbox */}
        {selectedImage !== null && (
          <Dialog open={true} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl p-0 overflow-hidden">
              <div className="relative">
                <img
                  src={filteredItems.filter(item => item.type === 'image')[selectedImage]?.thumbnail}
                  alt={filteredItems.filter(item => item.type === 'image')[selectedImage]?.title}
                  className="w-full h-auto"
                />
                
                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>

                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 bg-black/50 text-white hover:bg-black/70"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-lg font-medium">
                    {filteredItems.filter(item => item.type === 'image')[selectedImage]?.title}
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Video Modal */}
        <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
          <DialogContent className="max-w-4xl p-0">
            <div className="relative aspect-video">
              <iframe
                src={selectedVideo}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;