import React from 'react';
import { Calendar, MapPin, Award, BookOpen, Users, Globe } from 'lucide-react';

const Biography: React.FC = () => {
  const timeline = [
    {
      year: "1995",
      title: "Appel au Ministère",
      description: "Début du ministère pastoral en Côte d'Ivoire",
      icon: BookOpen
    },
    {
      year: "2005",
      title: "Fondation de l'IRTN",
      description: "Création de l'Institut de Réveil et de Transformation des Nations",
      icon: Award
    },
    {
      year: "2010",
      title: "Expansion Internationale",
      description: "Début des missions en Amérique du Nord et en Europe",
      icon: Globe
    },
    {
      year: "2015",
      title: "Présidence de la CISPE",
      description: "Élu président de la Communauté Internationale des Semeurs du Plein Évangile",
      icon: Users
    },
    {
      year: "2020",
      title: "Double Doctorat",
      description: "Doctorant en théologie et leadership à Beulah Heights University",
      icon: Award
    },
    {
      year: "2024",
      title: "Vision 2030",
      description: "Lancement du programme de formation de 10,000 leaders africains",
      icon: Users
    }
  ];

  return (
    <section id="biographie" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Biographie & Parcours
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un parcours dédié à la formation et à la transformation des leaders
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Biography Text */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl shadow-card p-8">
              <h3 className="font-heading text-2xl font-bold mb-4 text-primary">
                Professeur & Pasteur Germain Kouadio
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Le Professeur Germain Kouadio est un leader spirituel visionnaire et un 
                  enseignant passionné, reconnu internationalement pour son expertise en 
                  leadership transformationnel et son engagement à former une nouvelle 
                  génération de leaders chrétiens.
                </p>
                
                <p>
                  Fondateur de l'Institut de Réveil et de Transformation des Nations (IRTN), 
                  il a consacré sa vie à équiper les leaders pour qu'ils puissent impacter 
                  leurs communautés et transformer leurs nations selon les principes bibliques.
                </p>

                <p>
                  En tant que président de la Communauté Internationale des Semeurs du Plein 
                  Évangile (CISPE), il supervise un réseau mondial d'églises et de ministères 
                  dédiés à l'évangélisation et à la formation de disciples.
                </p>

                <p>
                  Double doctorant en théologie et leadership à Beulah Heights University 
                  d'Atlanta, le Professeur Kouadio combine une solide formation académique 
                  avec une expérience pratique de plus de 25 ans dans le ministère.
                </p>
              </div>

              {/* Quote */}
              <div className="mt-8 p-6 bg-gradient-divine rounded-lg border-l-4 border-secondary">
                <p className="text-lg font-medium italic">
                  "Le vrai leadership commence par la transformation du cœur."
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  - Pr. Germain Kouadio
                </p>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="bg-card rounded-xl shadow-card p-8">
              <h3 className="font-heading text-xl font-bold mb-4">Réalisations Clés</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <span>Fondateur et président de l'IRTN</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <span>Président de la CISPE</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <span>Conférencier international dans plus de 20 pays</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <span>Auteur de plusieurs ouvrages sur le leadership chrétien</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <span>Formateur de plus de 5,000 leaders à travers le monde</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-6">Parcours Ministériel</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
              
              {/* Timeline Items */}
              <div className="space-y-8">
                {timeline.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="relative flex gap-4">
                      {/* Icon */}
                      <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full shadow-golden">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 bg-card rounded-lg p-6 shadow-card">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium text-secondary">{item.year}</span>
                        </div>
                        <h4 className="font-heading text-lg font-bold mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Institutions Logos */}
        <div className="mt-16 text-center">
          <h3 className="font-heading text-xl font-bold mb-8">Affiliations & Formations</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-card rounded-lg p-6 shadow-card">
              <p className="font-bold text-lg">IRTN</p>
              <p className="text-sm text-muted-foreground">Institut de Réveil</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-card">
              <p className="font-bold text-lg">CISPE</p>
              <p className="text-sm text-muted-foreground">Communauté Internationale</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-card">
              <p className="font-bold text-lg">BHU</p>
              <p className="text-sm text-muted-foreground">Beulah Heights University</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-card">
              <p className="font-bold text-lg">E.T.A.</p>
              <p className="text-sm text-muted-foreground">École de Théologie</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;