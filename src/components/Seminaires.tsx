import React from 'react';
import { Calendar, Clock, Users, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Seminaires: React.FC = () => {
  const seminaires = [
    {
      titre: "Leadership Transformationnel",
      duree: "3 jours",
      objectif: "Développer une vision transformatrice",
      public: "Dirigeants d'entreprises et pasteurs"
    },
    {
      titre: "De l'Échec au Succès",
      duree: "2 jours",
      objectif: "Transformer les échecs en opportunités",
      public: "Entrepreneurs et leaders émergents"
    },
    {
      titre: "Leadership et Innovation",
      duree: "1 jour",
      objectif: "Intégrer l'innovation dans le leadership",
      public: "Cadres et managers"
    },
    {
      titre: "Former pour Transformer",
      duree: "5 jours",
      objectif: "Développer des compétences de formateur",
      public: "Formateurs et enseignants"
    }
  ];

  return (
    <section id="seminaires" className="py-20 bg-gradient-divine">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Séminaires & Ateliers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des formations intensives pour un impact immédiat
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {seminaires.map((seminaire, index) => (
            <Card key={index} className="p-6 hover:shadow-divine transition-all">
              <h3 className="font-heading text-xl font-bold mb-4">{seminaire.titre}</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gold" />
                  <span>Durée: {seminaire.duree}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-gold" />
                  <span>Objectif: {seminaire.objectif}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-gold" />
                  <span>Public: {seminaire.public}</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">S'inscrire</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Seminaires;