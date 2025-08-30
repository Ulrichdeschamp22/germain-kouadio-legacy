import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Pourquoi l'Afrique a besoin d'un leadership transformationnel",
      description: "L'Afrique est à un tournant décisif de son histoire. Le continent regorge de ressources naturelles et humaines extraordinaires, mais le manque de leadership transformationnel freine son développement.",
      excerpt: "Découvrez comment le leadership transformationnel peut libérer le potentiel de l'Afrique et propulser le continent vers un développement durable. Le Professeur Germain Kouadio partage sa vision pour transformer les nations africaines à travers la formation de leaders intègres et visionnaires.",
      author: "Professeur Germain Kouadio",
      date: "2025-01-15",
      readTime: "8 min",
      tags: ["Leadership Africain", "Transformation", "Développement", "IRTN"],
      image: "/assets/blog/leadership-afrique.jpg"
    },
    {
      id: 2,
      title: "Les 21 qualités indispensables d'un leader selon Germain Kouadio",
      description: "Un véritable leader ne se définit pas par sa position, mais par son influence positive et sa capacité à transformer son environnement.",
      excerpt: "Explorez les 21 qualités essentielles que tout leader doit développer pour impacter positivement sa génération. Basé sur des années d'expérience en formation de leaders chrétiens et séculiers, cet article révèle les secrets du leadership efficace.",
      author: "Professeur Germain Kouadio",
      date: "2025-01-10",
      readTime: "12 min",
      tags: ["Leadership", "Formation", "Développement Personnel", "Excellence"],
      image: "/assets/blog/21-qualites-leader.jpg"
    },
    {
      id: 3,
      title: "Leadership chrétien : transformer les nations par la foi",
      description: "Le leadership chrétien va au-delà de la gestion d'église. C'est un appel à transformer la société en appliquant les principes bibliques dans tous les domaines.",
      excerpt: "Comment la foi peut-elle devenir un moteur de transformation nationale ? Le Professeur Kouadio explique comment les leaders chrétiens peuvent influencer positivement la politique, l'économie et la société en Afrique et dans le monde.",
      author: "Professeur Germain Kouadio",
      date: "2025-01-05",
      readTime: "10 min",
      tags: ["Leadership Chrétien", "Foi", "Transformation Nationale", "CISPE"],
      image: "/assets/blog/leadership-chretien.jpg"
    },
    {
      id: 4,
      title: "Comment développer un leadership spirituel dès le plus jeune âge",
      description: "Former un enfant est plus efficace que de réparer un adulte. L'investissement dans le leadership des jeunes est crucial pour l'avenir de nos nations.",
      excerpt: "Découvrez les stratégies pratiques pour cultiver le leadership chez les enfants et les adolescents. Un guide essentiel pour les parents, éducateurs et pasteurs qui veulent préparer la prochaine génération de leaders transformationnels.",
      author: "Professeur Germain Kouadio",
      date: "2024-12-28",
      readTime: "7 min",
      tags: ["Jeunesse", "Éducation", "Formation", "Leadership Spirituel"],
      image: "/assets/blog/leadership-jeunes.jpg"
    },
    {
      id: 5,
      title: "L'importance du mentorat (mentorship) dans le leadership africain",
      description: "Le mentorat est la clé pour transmettre les valeurs, les compétences et la sagesse d'une génération à l'autre. C'est un pilier essentiel du développement du leadership en Afrique.",
      excerpt: "Explorez le rôle crucial du mentorat dans la formation de leaders africains compétents. Comment le système de tutorat peut-il accélérer le développement du leadership sur le continent ? Insights du programme de mentorat de l'IRTN.",
      author: "Professeur Germain Kouadio",
      date: "2024-12-20",
      readTime: "9 min",
      tags: ["Mentorat", "Leadership Africain", "Formation", "Développement"],
      image: "/assets/blog/mentorat-afrique.jpg"
    },
    {
      id: 6,
      title: "De la médiocrité à l'excellence : le parcours du leader transformationnel",
      description: "L'excellence n'est pas une destination mais un voyage continuel. Chaque leader doit s'engager dans un processus de croissance constante pour impacter sa génération.",
      excerpt: "Comment passer du stade de bon à celui de grand leader ? Le Professeur Kouadio partage les étapes pratiques pour développer une culture d'excellence dans le leadership personnel et organisationnel.",
      author: "Professeur Germain Kouadio",
      date: "2024-12-15",
      readTime: "11 min",
      tags: ["Excellence", "Croissance", "Leadership", "Transformation"],
      image: "/assets/blog/excellence-leadership.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header SEO */}
      <header className="bg-gradient-to-r from-primary to-primary-foreground text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Blog & Ressources en Leadership
          </h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Articles, enseignements et ressources du Professeur Germain Kouadio pour former 
            les leaders qui transformeront l'Afrique et le monde
          </p>
        </div>
      </header>

      {/* Articles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Articles Récents sur le Leadership Transformationnel</h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted relative">
                  <img 
                    src={article.image} 
                    alt={`${article.title} - Article du Professeur Germain Kouadio`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="line-clamp-2">
                    <h3>{article.title}</h3>
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {article.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(article.date).toLocaleDateString('fr-FR')}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>
                  
                  <button className="flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium">
                    Lire l'article complet
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Restez Informé sur le Leadership Transformationnel
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Recevez les derniers articles, enseignements et actualités du Professeur Germain Kouadio 
            sur le leadership chrétien et la transformation des nations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact" className="btn btn-primary">
              Contactez-nous
            </Link>
            <Link to="/#formations" className="btn btn-outline">
              Découvrir nos Formations
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation retour */}
      <div className="py-8 border-t">
        <div className="container mx-auto px-4">
          <Link to="/" className="text-primary hover:underline flex items-center gap-2">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;