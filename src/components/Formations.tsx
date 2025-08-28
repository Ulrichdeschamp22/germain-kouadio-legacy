import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EtapesLeadership from './formations/EtapesLeadership';
import LeconsLeadership from './formations/LeconsLeadership';
import PrincipesLeadership from './formations/PrincipesLeadership';
import LeadershipExecutif from './formations/LeadershipExecutif';
import FormationSpirituelle from './formations/FormationSpirituelle';
import LeadershipEnLigne from './formations/LeadershipEnLigne';

const Formations: React.FC = () => {
  return (
    <section id="formations" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Nos Formations
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Un parcours complet pour développer votre leadership et transformer votre impact
          </p>
        </div>

        <Tabs defaultValue="etapes" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
            <TabsTrigger value="etapes">Étapes</TabsTrigger>
            <TabsTrigger value="lecons">Leçons</TabsTrigger>
            <TabsTrigger value="principes">Principes</TabsTrigger>
            <TabsTrigger value="executif">Exécutif</TabsTrigger>
            <TabsTrigger value="spirituel">Spirituel</TabsTrigger>
            <TabsTrigger value="enligne">En Ligne</TabsTrigger>
          </TabsList>
          
          <TabsContent value="etapes"><EtapesLeadership /></TabsContent>
          <TabsContent value="lecons"><LeconsLeadership /></TabsContent>
          <TabsContent value="principes"><PrincipesLeadership /></TabsContent>
          <TabsContent value="executif"><LeadershipExecutif /></TabsContent>
          <TabsContent value="spirituel"><FormationSpirituelle /></TabsContent>
          <TabsContent value="enligne"><LeadershipEnLigne /></TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Formations;