import React from 'react';
import { MessageCircle, Target, Calendar, Zap, MapPin, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

const LeconsLeadership: React.FC = () => {
  const lecons = [
    {
      icon: MessageCircle,
      titre: "Tout le monde communique, mais peu connectent",
      description: "Apprendre à établir de véritables connexions au-delà de la simple communication.",
      color: "text-blue-500"
    },
    {
      icon: Target,
      titre: "Comment tester son rêve ?",
      description: "Méthodes pratiques pour valider et affiner votre vision avant de vous lancer.",
      color: "text-purple-500"
    },
    {
      icon: Calendar,
      titre: "Le secret est dans votre agenda quotidien",
      description: "L'importance de la discipline quotidienne dans la réalisation de vos objectifs.",
      color: "text-green-500"
    },
    {
      icon: Zap,
      titre: "Augmenter l'impact de votre leadership",
      description: "Stratégies pour maximiser votre influence et votre efficacité.",
      color: "text-orange-500"
    },
    {
      icon: MapPin,
      titre: "Développer votre influence où que vous soyez",
      description: "Comment être un leader efficace dans n'importe quel contexte.",
      color: "text-red-500"
    },
    {
      icon: Award,
      titre: "Les 21 qualités du leader",
      description: "Les caractéristiques essentielles qui définissent un leadership exceptionnel.",
      color: "text-gold"
    }
  ];

  return (
    <div id="lecons" className="py-16">
      <div className="text-center mb-12">
        <h3 className="font-heading text-3xl font-bold mb-4">
          Leçons de Leadership
        </h3>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Des enseignements pratiques pour transformer votre approche du leadership
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lecons.map((lecon, index) => {
          const Icon = lecon.icon;
          return (
            <Card 
              key={index}
              className="p-6 hover:shadow-divine transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-full bg-accent mb-4`}>
                <Icon className={`h-6 w-6 ${lecon.color}`} />
              </div>
              <h4 className="font-heading text-xl font-bold mb-3">
                {lecon.titre}
              </h4>
              <p className="text-muted-foreground">
                {lecon.description}
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default LeconsLeadership;