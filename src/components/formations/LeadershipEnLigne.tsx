import React from 'react';
import { Monitor, Users, BarChart, BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LeadershipEnLigne: React.FC = () => {
  const coursEnLigne = [
    {
      code: "LS:101",
      titre: "Leadership de Base - Partie 1",
      description: "Introduction aux concepts fondamentaux du leadership",
      duree: "4 semaines",
      niveau: "Débutant"
    },
    {
      code: "LS:102",
      titre: "Leadership de Base - Partie 2",
      description: "Approfondissement des compétences de leadership",
      duree: "4 semaines",
      niveau: "Débutant"
    },
    {
      code: "LS:201",
      titre: "Les 4 Groupes de Leaders",
      description: "Dirigeant, Appris, Latent, Limité - Identifier et développer chaque type",
      duree: "6 semaines",
      niveau: "Intermédiaire"
    },
    {
      code: "LS:202",
      titre: "Leadership vs Management",
      description: "Comprendre les différences et maîtriser les deux approches",
      duree: "5 semaines",
      niveau: "Intermédiaire"
    }
  ];

  const conceptsCles = [
    {
      icon: Users,
      titre: "4 Groupes de Leaders",
      points: ["Dirigeant: Visionnaire et inspirant", "Appris: Formé et compétent", "Latent: Potentiel à développer", "Limité: Nécessite un accompagnement"]
    },
    {
      icon: BarChart,
      titre: "Leadership vs Management",
      points: ["Le leader inspire, le manager administre", "Le leader innove, le manager maintient", "Le leader développe, le manager contrôle", "Le leader voit long terme, le manager court terme"]
    }
  ];

  return (
    <div id="enligne" className="py-16">
      <div className="text-center mb-12">
        <h3 className="font-heading text-3xl font-bold mb-4">
          Leadership en Ligne
        </h3>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Formation flexible et accessible où que vous soyez
        </p>
      </div>

      {/* Cours en ligne */}
      <div className="mb-12">
        <h4 className="font-heading text-2xl font-bold mb-6 text-center">
          Nos Programmes E-Learning
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          {coursEnLigne.map((cours, index) => (
            <Card key={index} className="p-6 hover:shadow-divine transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-gold/20 text-gold rounded-full text-sm font-semibold mb-2">
                    {cours.code}
                  </span>
                  <h5 className="font-heading text-xl font-bold">{cours.titre}</h5>
                </div>
                <Monitor className="h-8 w-8 text-primary" />
              </div>
              <p className="text-muted-foreground mb-4">{cours.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  <BookOpen className="inline h-4 w-4 mr-1" />
                  {cours.duree}
                </span>
                <span className="font-semibold text-primary">{cours.niveau}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Concepts clés */}
      <div className="grid md:grid-cols-2 gap-8">
        {conceptsCles.map((concept, index) => {
          const Icon = concept.icon;
          return (
            <Card key={index} className="p-6 bg-gradient-to-br from-background to-accent">
              <div className="flex items-center gap-3 mb-4">
                <Icon className="h-8 w-8 text-gold" />
                <h4 className="font-heading text-xl font-bold">{concept.titre}</h4>
              </div>
              <ul className="space-y-2">
                {concept.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <Button variant="hero" size="lg" className="shadow-divine">
          Commencer la Formation en Ligne
        </Button>
      </div>
    </div>
  );
};

export default LeadershipEnLigne;