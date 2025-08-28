import React from 'react';
import { Book, Video, Download, FileText, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Ressources: React.FC = () => {
  const categories = [
    {
      icon: Book,
      titre: "Bibliographie Conseillée",
      items: [
        "Les 21 lois irréfutables du leadership - John Maxwell",
        "Leadership d'excellence - Bill Hybels",
        "Le leader selon le cœur de Dieu - Oswald Sanders",
        "Développer les leaders autour de vous - John Maxwell"
      ]
    },
    {
      icon: Video,
      titre: "Vidéos de Leadership",
      items: [
        "Les fondements du leadership chrétien",
        "Transformer les nations par le leadership",
        "L'impact du caractère dans le leadership",
        "Former la nouvelle génération"
      ]
    },
    {
      icon: Download,
      titre: "Téléchargements",
      items: [
        "Guide du leadership transformationnel (PDF)",
        "Les 28 principes du leadership (PDF)",
        "Manuel de formation IRTN (PDF)",
        "Brochure des séminaires 2024"
      ]
    },
    {
      icon: FileText,
      titre: "Articles sur le Leadership Africain",
      items: [
        "Le réveil du leadership africain",
        "Défis et opportunités en Afrique",
        "Former pour transformer le continent",
        "Vision 2030 pour l'Afrique"
      ]
    }
  ];

  return (
    <section id="ressources" className="py-20 bg-gradient-divine">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Ressources
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enrichissez votre parcours avec nos ressources soigneusement sélectionnées
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-divine transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-gold rounded-full">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold">{category.titre}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 group cursor-pointer">
                      <ExternalLink className="h-4 w-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full mt-6">
                  Accéder aux {category.titre}
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Newsletter */}
        <Card className="mt-12 p-8 max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-gold/10">
          <h3 className="font-heading text-2xl font-bold mb-4 text-center">
            Restez Informé
          </h3>
          <p className="text-center mb-6 text-muted-foreground">
            Recevez nos dernières ressources et actualités sur le leadership
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Votre email"
              className="flex-1 px-4 py-2 rounded-md border bg-background"
            />
            <Button variant="hero">S'abonner</Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Ressources;