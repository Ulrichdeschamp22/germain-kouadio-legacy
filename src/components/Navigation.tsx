import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown, Youtube, MessageCircle, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'vision', label: 'Vision & Mission' },
    { id: 'formations', label: 'Formations' },
    { id: 'seminaires', label: 'Séminaires & Ateliers' },
    { id: 'professoral', label: 'Corps Professoral' },
    { id: 'contact', label: 'Contact / Inscription' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">GK</span>
            </div>
            <span className="font-heading font-bold text-xl hidden sm:block">
              Pr. Germain Kouadio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    <Button
                      variant="ghost"
                      className={`font-medium transition-colors ${
                        activeSection === item.id ? 'text-primary bg-accent' : ''
                      }`}
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.label}
                    </Button>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Blog Link */}
            <Link to="/blog">
              <Button variant="ghost" className="font-medium">
                <BookOpen className="h-4 w-4 mr-2" />
                Blog
              </Button>
            </Link>
            
            {/* Social Links */}
            <div className="flex items-center gap-2 ml-4 border-l pl-4">
              <a
                href="https://m.youtube.com/@lavieabondantetv4252"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-accent rounded-md transition-colors"
                aria-label="Chaîne YouTube La Vie Abondante"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://m.youtube.com/@germainkouadio4652"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-accent rounded-md transition-colors"
                aria-label="Chaîne YouTube Germain Kouadio"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/2250787144278"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-accent rounded-md transition-colors"
                aria-label="Contactez-nous sur WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className={`w-full justify-start mb-2 ${
                  activeSection === item.id ? 'text-primary bg-accent' : ''
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;