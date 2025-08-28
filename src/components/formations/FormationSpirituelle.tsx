import React from 'react';
import { Book, Heart, Users, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

const FormationSpirituelle: React.FC = () => {
  const elements = [
    {
      icon: Book,
      titre: "Fondement Biblique du Leadership",
      description: "Exploration des principes de leadership à travers les textes sacrés et leur application moderne."
    },
    {
      icon: Heart,
      titre: "Influence du Caractère sur la Vision",
      description: "Comment le caractère personnel façonne et renforce votre vision de leader."
    },
    {
      icon: Users,
      titre: "Exemples de Leaders Inspirés",
      description: "Étude de cas de leaders spirituels qui ont transformé leurs communautés et nations."
    },
    {
      icon: Star,
      titre: "Leadership Serviteur",
      description: "L'art de diriger en servant les autres selon les principes spirituels."
    }
  ];

  return (
    <div id="spirituel" className="py-16">
      <div className="text-center mb-12">
        <h3 className="font-heading text-3xl font-bold mb-4">
          Formation Spirituelle
        </h3>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Intégrer les valeurs spirituelles dans votre pratique du leadership
        </p>
      </div>

      <Card className="p-8 mb-8 bg-gradient-to-r from-primary/5 to-gold/5">
        <blockquote className="text-center">
          <p className="text-xl italic mb-4">
            "Le vrai leadership commence par la transformation du cœur."
          </p>
          <cite className="text-muted-foreground">- Pr. Germain Kouadio</cite>
        </blockquote>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {elements.map((element, index) => {
          const Icon = element.icon;
          return (
            <Card 
              key={index}
              className="p-6 hover:shadow-divine transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-gold rounded-full text-white flex-shrink-0">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-bold mb-2">
                    {element.titre}
                  </h4>
                  <p className="text-muted-foreground">
                    {element.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FormationSpirituelle;