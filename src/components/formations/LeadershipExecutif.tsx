import React from 'react';
import { Shield, TrendingUp, Users, Lightbulb, UserCheck, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/card';

const LeadershipExecutif: React.FC = () => {
  const modules = [
    {
      icon: Shield,
      titre: "Prévention & Résolution des Conflits",
      description: "Techniques avancées pour anticiper, gérer et résoudre les conflits organisationnels de manière constructive.",
      couleur: "text-blue-500"
    },
    {
      icon: TrendingUp,
      titre: "De la Crise à la Transformation Nationale",
      description: "Comment transformer les crises en opportunités de changement et de croissance au niveau national.",
      couleur: "text-green-500"
    },
    {
      icon: Users,
      titre: "Paradigmes du Chasseur/Agriculteur",
      description: "Comprendre les différents modèles de pensée et leur impact sur le développement organisationnel.",
      couleur: "text-purple-500"
    },
    {
      icon: Lightbulb,
      titre: "Développement Personnel",
      description: "Stratégies pour maximiser votre potentiel personnel et professionnel.",
      couleur: "text-orange-500"
    },
    {
      icon: UserCheck,
      titre: "Loi du Tuteur (Mentorship)",
      description: "L'art et la science du mentorat pour développer la prochaine génération de leaders.",
      couleur: "text-red-500"
    },
    {
      icon: Rocket,
      titre: "Innovation & Foi dans le Leadership",
      description: "Intégrer l'innovation et les valeurs spirituelles dans votre approche du leadership.",
      couleur: "text-gold"
    }
  ];

  return (
    <div id="executif" className="py-16">
      <div className="text-center mb-12">
        <h3 className="font-heading text-3xl font-bold mb-4">
          Leadership Exécutif
        </h3>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Formation avancée pour les leaders d'organisations et d'institutions
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => {
          const Icon = module.icon;
          return (
            <Card 
              key={index}
              className="p-6 hover:shadow-divine transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="mb-4">
                <div className={`inline-flex p-4 rounded-full bg-accent group-hover:bg-primary/10 transition-colors`}>
                  <Icon className={`h-8 w-8 ${module.couleur}`} />
                </div>
              </div>
              <h4 className="font-heading text-xl font-bold mb-3">
                {module.titre}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {module.description}
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default LeadershipExecutif;