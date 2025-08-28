import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="mb-2">
            © {currentYear} Professeur & Pasteur Germain Kouadio. Tous droits réservés.
          </p>
          <p className="text-sm opacity-80 flex items-center justify-center gap-1">
            Fait avec <Heart className="h-4 w-4 text-red-500 fill-red-500" /> pour la gloire de Dieu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;