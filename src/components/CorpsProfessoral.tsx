import React from 'react';
import { Award, BookOpen, Globe, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import pastorImage from '/lovable-uploads/b429b345-7990-4730-8145-eec32316c05b.png';

const CorpsProfessoral: React.FC = () => {
  const qualifications = [
    {
      icon: Award,
      titre: "Double Doctorant",
      description: "Théologie & Leadership"
    },
    {
      icon: Globe,
      titre: "Conférencier International",
      description: "Plus de 30 pays visités"
    },
    {
      icon: BookOpen,
      titre: "Expert en Formation",
      description: "25+ années d'expérience"
    },
    {
      icon: Users,
      titre: "Leader Transformationnel",
      description: "Des milliers de vies impactées"
    }
  ];

  return (
    <section id="professoral" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Corps Professoral
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Une formation exceptionnelle portée par un professeur d'exception
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Professeur Principal */}
          <Card className="p-8 shadow-divine border-gold/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <img 
                  src={pastorImage} 
                  alt="Professeur Germain Kouadio"
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              </div>
              
              <div>
                <h3 className="font-heading text-3xl font-bold mb-2">
                  Professeur & Pasteur
                </h3>
                <h4 className="font-heading text-2xl text-gold mb-4">
                  Germain KOUADIO
                </h4>
                
                <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                  Leader spirituel visionnaire et expert en leadership transformationnel, 
                  le Professeur Germain Kouadio consacre sa vie à former une nouvelle 
                  génération de leaders capables de transformer l'Afrique et le monde.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {qualifications.map((qual, index) => {
                    const Icon = qual.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <Icon className="h-5 w-5 text-gold mt-1" />
                        <div>
                          <p className="font-semibold text-sm">{qual.titre}</p>
                          <p className="text-xs text-muted-foreground">{qual.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Card className="p-6 bg-gradient-to-r from-gold/10 to-primary/10 border-gold/20">
                  <blockquote className="italic text-center">
                    "Le Professeur Germain Kouadio va toujours au-delà des attentes"
                  </blockquote>
                </Card>
              </div>
            </div>
          </Card>

          {/* Excellence Pédagogique */}
          <Card className="mt-8 p-8 bg-gradient-divine">
            <h3 className="font-heading text-2xl font-bold mb-4 text-center">
              Excellence Pédagogique
            </h3>
            <p className="text-lg text-center max-w-3xl mx-auto text-muted-foreground">
              Notre approche pédagogique allie rigueur académique, sagesse spirituelle et 
              application pratique. Chaque enseignement est adapté au contexte africain tout 
              en maintenant des standards internationaux d'excellence.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CorpsProfessoral;