import React from 'react';
import { Heart, Youtube, MessageCircle, Mail, Phone, MapPin, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* À propos */}
          <div>
            <h3 className="font-bold text-lg mb-4">À Propos</h3>
            <p className="text-sm opacity-80">
              Professeur Germain Kouadio - Expert en leadership transformationnel, 
              formateur international de leaders chrétiens en Afrique, France et USA.
            </p>
          </div>
          
          {/* Liens Rapides */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/#vision" className="opacity-80 hover:opacity-100 transition-opacity">
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link to="/#formations" className="opacity-80 hover:opacity-100 transition-opacity">
                  Formations IRTN
                </Link>
              </li>
              <li>
                <Link to="/blog" className="opacity-80 hover:opacity-100 transition-opacity flex items-center gap-1">
                  <BookOpen className="h-3 w-3" />
                  Blog & Ressources
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 opacity-80">
                <Phone className="h-3 w-3" />
                <span>Côte d'Ivoire: +225 0787144278</span>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Phone className="h-3 w-3" />
                <span>France: +33 6 16 88 42 50</span>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Phone className="h-3 w-3" />
                <span>USA: +1 (470) 530-8017</span>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Mail className="h-3 w-3" />
                <span>contact@germainkouadio.com</span>
              </li>
            </ul>
          </div>
          
          {/* Suivez-nous */}
          <div>
            <h3 className="font-bold text-lg mb-4">Suivez-nous</h3>
            <div className="flex gap-3">
              <a
                href="https://m.youtube.com/@lavieabondantetv4252"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
                aria-label="Chaîne YouTube La Vie Abondante TV"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://m.youtube.com/@germainkouadio4652"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
                aria-label="Chaîne YouTube Germain Kouadio"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/2250787144278"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
                aria-label="Contactez-nous sur WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm opacity-80 mt-4">
              Abidjan, Côte d'Ivoire<br />
              Atlanta, Georgia, USA
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="mb-2">
            © {currentYear} Professeur & Pasteur Germain Kouadio | IRTN - CISPE | Tous droits réservés.
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