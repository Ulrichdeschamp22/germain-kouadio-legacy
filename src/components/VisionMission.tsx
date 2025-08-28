import React from 'react';
import { Target, Eye, Heart, Shield, Trophy, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const VisionMission: React.FC = () => {
  const engagements = [
    { icon: Heart, title: 'Former avec compassion', color: 'text-red-500' },
    { icon: Shield, title: "Former dans l'intégrité", color: 'text-blue-500' },
    { icon: Trophy, title: 'Former avec excellence', color: 'text-gold' },
    { icon: Users, title: 'Former dès le plus jeune âge', color: 'text-green-500' }
  ];

  return (
    <section id="vision" className="py-20 bg-gradient-divine">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Vision & Mission
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Transformer l'Afrique et le monde à travers un leadership d'excellence
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Vision */}
          <Card className="p-8 shadow-divine border-gold/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-gold rounded-full">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading text-3xl font-bold">Vision</h3>
            </div>
            <p className="text-lg leading-relaxed mb-4">
              Former des leaders qui ne laissent plus de place à l'Erreur, à l'Échec, et à l'Excuse, 
              car à ce stade ils n'en ont plus le droit...
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Des leaders restaurant et transformant leurs familles, organisations, communautés et 
              nations à des niveaux supérieurs de performance et de totale réussite.
            </p>
          </Card>

          {/* Mission */}
          <Card className="p-8 shadow-divine border-gold/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-gold rounded-full">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading text-3xl font-bold">Mission</h3>
            </div>
            <h4 className="text-xl font-semibold mb-4">
              Développement d'aptitudes pour impacter l'Afrique et le monde
            </h4>
            <p className="text-lg leading-relaxed text-muted-foreground">
              L'Afrique souffre d'un manque de leadership efficace. Notre mission est de former 
              des leaders intègres, passionnés, organisés, capables de conduire la transformation 
              du continent.
            </p>
          </Card>

          {/* Nos Engagements */}
          <div>
            <h3 className="font-heading text-3xl font-bold text-center mb-8">
              Nos Engagements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {engagements.map((engagement, index) => {
                const Icon = engagement.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-6 text-center hover:shadow-divine transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`inline-flex p-4 rounded-full bg-accent mb-4`}>
                      <Icon className={`h-8 w-8 ${engagement.color}`} />
                    </div>
                    <p className="font-semibold">{engagement.title}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;