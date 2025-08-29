import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
    { 
      id: 'formations', 
      label: 'Formations',
      subItems: [
        { id: 'etapes', label: 'Étapes du Leadership' },
        { id: 'lecons', label: 'Leçons de Leadership' },
        { id: 'principes', label: 'Principes du Leadership' },
        { id: 'executif', label: 'Leadership Exécutif' },
        { id: 'spirituel', label: 'Formation Spirituelle' },
        { id: 'enligne', label: 'Leadership en Ligne' }
      ]
    },
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
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  {item.subItems ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent">
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.id}>
                              <NavigationMenuLink asChild>
                                <button
                                  onClick={() => scrollToSection(subItem.id)}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">{subItem.label}</div>
                                </button>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Button
                      variant="ghost"
                      className={`font-medium transition-colors ${
                        activeSection === item.id ? 'text-primary bg-accent' : ''
                      }`}
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.label}
                    </Button>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button variant="ghost" size="icon" className="ml-4 hidden md:flex">
            <Globe className="h-5 w-5" />
          </Button>

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