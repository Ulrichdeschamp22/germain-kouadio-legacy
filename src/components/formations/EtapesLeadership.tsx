import React from 'react';
import { TrendingUp, Users, Award, Star, Crown } from 'lucide-react';
import { Card } from '@/components/ui/card';

const EtapesLeadership: React.FC = () => {
  const niveaux = [
    {
      niveau: 1,
      titre: "Position",
      icon: Users,
      description: "Les gens vous suivent parce qu'ils doivent le faire.",
      color: "bg-blue-500"
    },
    {
      niveau: 2,
      titre: "Permission",
      icon: Award,
      description: "Les gens vous suivent parce qu'ils veulent le faire.",
      color: "bg-green-500"
    },
    {
      niveau: 3,
      titre: "Production",
      icon: TrendingUp,
      description: "Les gens vous suivent en raison de ce que vous avez fait pour l'organisation.",
      color: "bg-purple-500"
    },
    {
      niveau: 4,
      titre: "Développement des personnes",
      icon: Star,
      description: "Les gens vous suivent en raison de ce que vous avez fait pour eux.",
      color: "bg-orange-500"
    },
    {
      niveau: 5,
      titre: "Personnalité",
      icon: Crown,
      description: "Les gens vous suivent en raison de qui vous êtes et de ce que vous représentez.",
      color: "bg-gradient-gold"
    }
  ];

  return (
    <div id="etapes" className="py-16">
      <div className="text-center mb-12">
        <h3 className="font-heading text-3xl font-bold mb-4">
          Les 5 Étapes du Leadership
        </h3>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Découvrez les niveaux progressifs du leadership et identifiez votre position actuelle
        </p>
      </div>

      <div className="space-y-6">
        {/* Définition du leadership */}
        <Card className="p-8 mb-8 shadow-divine border-gold/20">
          <h4 className="font-heading text-2xl font-bold mb-4">Définition du Leadership</h4>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Le leadership est la capacité d'influencer, d'inspirer et de guider les autres vers 
            l'accomplissement d'objectifs communs. C'est un processus de transformation qui commence 
            par soi-même et s'étend à l'impact sur les autres et la société.
          </p>
        </Card>

        {/* Les 5 niveaux */}
        <div className="grid gap-6">
          {niveaux.map((niveau) => {
            const Icon = niveau.icon;
            return (
              <Card 
                key={niveau.niveau}
                className="p-6 hover:shadow-divine transition-all duration-300 border-l-4"
                style={{ borderLeftColor: 'hsl(var(--gold))' }}
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-full ${niveau.color} text-white flex-shrink-0`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-3xl font-bold text-primary">Niveau {niveau.niveau}</span>
                      <h5 className="font-heading text-2xl font-bold">{niveau.titre}</h5>
                    </div>
                    <p className="text-lg text-muted-foreground">{niveau.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Clé du succès */}
        <Card className="p-8 mt-8 bg-gradient-to-r from-gold/10 to-primary/10 border-gold">
          <div className="text-center">
            <Crown className="h-16 w-16 text-gold mx-auto mb-4" />
            <h4 className="font-heading text-2xl font-bold mb-4">
              Clé du Succès : Le Niveau 5
            </h4>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              Le niveau 5 représente le sommet du leadership. À ce stade, vous avez développé 
              d'autres leaders qui perpétuent votre vision. Votre influence transcende votre 
              présence physique et crée un héritage durable.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EtapesLeadership;