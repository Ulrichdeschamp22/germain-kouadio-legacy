import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, BookOpen, Headphones, Mail } from 'lucide-react';
import heroImage from '/lovable-uploads/49242909-5bdf-42a2-8495-a9ff17592b1b.png';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professeur Germain Kouadio - Leader spirituel et expert en leadership transformationnel en Afrique"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 cross-pattern"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Title */}
          <div className="animate-on-scroll visible">
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4">
              Professeur & Pasteur
              <span className="block text-gradient-gold mt-2">Germain Kouadio</span>
            </h1>
          </div>

          {/* Slogan */}
          <div className="animate-on-scroll visible" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl font-light mb-8 italic">
              "Former les Leaders pour Transformer les Nations"
            </p>
          </div>

          {/* Introduction */}
          <div className="animate-on-scroll visible" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Le Professeur Germain Kouadio est un leader spirituel, un enseignant chevronné 
              et un expert en leadership transformationnel. Fondateur de l'IRTN (Institut de Réveil) 
              et président de la CISPE, il œuvre à former une nouvelle génération de leaders 
              en Afrique et dans le monde.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll visible" 
               style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="golden" 
              size="lg"
              onClick={() => scrollToSection('formations')}
            >
              <BookOpen className="mr-2" />
              Découvrir les Formations
            </Button>
            <Button 
              variant="spiritual" 
              size="lg"
              onClick={() => scrollToSection('vision')}
            >
              Vision & Mission
            </Button>
            <Button 
              variant="spiritual" 
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2" />
              S'inscrire / Contact
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white/70 h-8 w-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;