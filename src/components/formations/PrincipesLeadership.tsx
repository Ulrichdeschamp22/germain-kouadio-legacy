import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

const PrincipesLeadership: React.FC = () => {
  const principes = [
    "Tout soulever demande un leadership",
    "Tout leader doit être un manager, mais tout manager n'est pas un leader",
    "La capacité et l'habileté de diriger détermine le niveau d'efficacité",
    "L'aptitude à être chef se développe et non se découvre",
    "Un leader influence",
    "Tout commence par un leadership",
    "L'influence est la vraie mesure du leadership",
    "Le vrai leadership ne peut s'octroyer ni s'attribuer ou se conférer",
    "Le leadership ne peut s'imposer, il doit s'accorder",
    "Être leader c'est l'habileté d'obtenir des disciples (suiveurs)",
    "Sans suiveurs, impossible d'être leader",
    "Celui qui se croit leader mais que personne ne suit, ne fait que se promener",
    "Le leadership sans vision n'existe pas et le leader sans mission est inutile",
    "Capacité d'avoir une vision et savoir y rallier les autres",
    "Un leader focalise son énergie pour réaliser la mission et se garde des distractions",
    "Celui qui ne dirige pas sa vie est dirigé",
    "Ceux qui savent où ils vont ont la chance d'y arriver",
    "Difficile d'être leader dans sa vie si l'on ne sait pas se manager soi-même",
    "Commencer à avoir une vision pour soi-même",
    "Manager son temps et être discipliné",
    "Importance d'être aligné sur ses valeurs",
    "Faire grandir et fleurir les talents chez les autres",
    "Se développer pour développer les autres",
    "Les leaders ne sont pas formés dans une salle de classe, mais dans la vie de tous les jours",
    "Sans plan pour développer les leaders, votre organisation peut rapidement sombrer",
    "Soyez prêts à vous investir pour former vos leaders",
    "Ceux qui impactent le plus de personnes gagnent",
    "Le leadership, c'est emmener les gens là où ils n'iraient pas tous seuls"
  ];

  return (
    <div id="principes" className="py-16">
      <div className="text-center mb-12">
        <h3 className="font-heading text-3xl font-bold mb-4">
          Les 28 Principes du Leadership
        </h3>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Les fondements essentiels pour un leadership transformationnel
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {principes.map((principe, index) => (
          <Card 
            key={index}
            className="p-4 hover:shadow-card transition-all duration-300 flex items-start gap-3"
          >
            <CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
            <p className="text-base leading-relaxed">
              <span className="font-semibold text-primary mr-2">{index + 1}.</span>
              {principe}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PrincipesLeadership;