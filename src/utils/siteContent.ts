// Base de connaissances du site IRTN
export const siteKnowledge = {
  organisation: {
    nom: "Institut de Restauration et de Transformation Nationale (IRTN)",
    directeur: "Professeur Germain Kouadio",
    presence: ["États-Unis d'Amérique", "Canada", "Afrique"],
    cispe: "Communauté Internationale des Semeurs du Plein Evangile",
    contact: {
      coteIvoire: "0787144278",
      france: "+33 6 16 88 42 50",
      etatUnis: "+1 (470) 530-8017"
    },
    adresses: {
      usa: "145 Capeton Ct, Covington, GA 30016, États-Unis",
      coteIvoire: "Geraki Center, Côte d'Ivoire"
    }
  },
  
  vision: "Former des leaders qui ne laissent plus de place à l'Erreur, à l'Echec, et à l'Excuse, car à ce stade ils n'en ont plus le droit. Des leaders restaurant et transformant leurs familles, organisations, communautés et nations à des niveaux supérieurs de performance et de totale réussite.",
  
  mission: [
    "Développement d'aptitude en leadership en Afrique",
    "Élever des dirigeants africains capables d'emmener leurs pays du stade de la médiocrité à celui de l'excellence",
    "Former des leaders ayant de la compassion, intègres et passionnés",
    "Programme de formation avec les établissements d'enseignements",
    "Programme de formation avec les corps habillés",
    "Organiser des séminaires de perfectionnement en leadership",
    "Entretenir des alliances stratégiques avec des organismes internationaux"
  ],
  
  formations: {
    etapes: [
      "Définition du Leadership",
      "Le niveau 1 du Leadership",
      "Le niveau 2 du Leadership", 
      "Le niveau 3 du Leadership",
      "Le niveau 4 du Leadership",
      "Le niveau 5 du Leadership (clef du succès)"
    ],
    
    lecons: [
      "Tout le monde communique, mais peu seulement connecte",
      "Comment tester son rêve",
      "Le secret de votre succès est déterminé par votre agenda quotidien",
      "Quelle inspiration pour augmenter l'impact de votre leadership",
      "Développer votre influence de n'importe où dans l'organisation",
      "Les 21 qualités indispensables du leader"
    ],
    
    principes: [
      "L'aptitude au leadership détermine le degré d'efficacité d'une personne",
      "L'influence est la véritable mesure du leadership",
      "Le leadership ne se développe pas en un jour mais jour après jour",
      "Quand le véritable leader parle, les gens écoutent",
      "La Confiance - Fondement du leadership",
      "Ceux que vous attirez sont conformes à ce que vous êtes",
      "Les leaders touchent les cœurs avant de demander un coup de main",
      "Le potentiel d'un leader est déterminé par ceux qui lui sont le plus proche",
      "Seuls les leaders sécurisés délèguent leurs pouvoirs aux autres",
      "Il faut un leader pour engendrer un autre leader",
      "Les gens adhèrent à un leader ensuite à la vision",
      "Les leaders comprennent qu'agir n'est pas nécessairement accomplir",
      "Un leader doit être capable de renoncer pour monter",
      "Pour ajouter à la croissance, menez des disciples pour la multiplier, menez des leaders",
      "Les leaders trouvent le moyen de faire gagner leur équipe",
      "La clé du leadership : ce sont nos priorités",
      "L'ingrédient important du leadership : c'est l'intégrité",
      "Le teste ultime du leadership : c'est comment créer un changement positif",
      "L'un des aspects importants que le leader ne doit pas négliger : c'est l'attitude",
      "Le plus grand bien que le leader possède, c'est le peuple",
      "La qualité indispensable du leader: La vision",
      "Le leader doit apprendre à cultiver une discipline personnelle",
      "La leçon que le leader doit apprendre : c'est le développement de son cercle fermé",
      "La marque durable laissée par un leader se mesure à la succession qu'il aura laissée"
    ],
    
    executif: [
      "Prévention des conflits",
      "Résolution des conflits",
      "Comment gérer l'après conflit",
      "Comment éteindre les foyers de conflits",
      "La crise du Leadership dans les communautés africaines",
      "Comment découvrir, développer et déployer son potentiel",
      "Comment parvenir du stade de bon à celui de grand",
      "Carte de route pour une communauté ou pour le développement d'une nation",
      "Comment un leader peut impacter sa nation",
      "Le rôle du leader dans la transformation de sa nation",
      "Le Fardeau et la Passion sont les véhicules d'une transformation nationale",
      "Le paradigme du Leadership du chasseur et de l'agriculteur",
      "Les répercussions mondiales des paradigmes du leadership",
      "La loi du Tuteur (mentorship)",
      "Le développement personnel",
      "La place de l'innovation et de créativité",
      "Comment déléguer des responsabilités",
      "L'importance de la foi dans l'application des principes du Leadership"
    ],
    
    spirituelle: [
      "Le leader et sa relation avec Dieu",
      "La prière comme fondation du leadership",
      "L'intégrité spirituelle du leader",
      "Le leadership serviteur selon les principes bibliques"
    ]
  },
  
  biographie: {
    nom: "Professeur Germain Kouadio",
    parcours: [
      "Directeur fondateur d'une société d'entretien, de gardiennage et de vente de matériels de sport",
      "Membre fondateur des Hommes d'Affaires du Plein Évangile de Côte d'Ivoire",
      "Fondateur de la CISPE (Communauté Internationale des Semeurs du Plein Evangile)",
      "Études à Beulah Heights University aux États-Unis",
      "Certificat en leadership",
      "Associate Degree of Biblical Education",
      "Bachelor en leadership et théologie",
      "Master en leadership d'Administration",
      "Deux doctorats en cours (théologie et leadership)"
    ],
    
    publications: [
      "LE VRAI LEADER",
      "L'AFRIQUE ET LE LEADERSHIP",
      "LE LEADERSHIP DANS LES ÉGLISES",
      "UN MAUVAIS LEADERSHIP EST UNE MALÉDICTION",
      "UN BON LEADERSHIP EST UNE BÉNÉDICTION",
      "COMMENT DECOUVRIR, DEVELOPPER ET DEPLOYER SON POTENTIEL"
    ],
    
    distinctions: [
      "Diplômé de l'Evangelical Training Association (E.T.A)",
      "Récompensé pour excellents rendements universitaires (High Academic Achievement)",
      "Honoré par Honor Society of the Beulah Heights University",
      "Professeur et pasteur"
    ],
    
    famille: "Vit avec sa femme Geneviève Kouadio et ses cinq enfants à Atlanta, Georgia (USA)"
  }
};

// Fonction pour extraire tout le contenu textuel pour le contexte RAG
export function getAllSiteContent(): string {
  return JSON.stringify(siteKnowledge, null, 2);
}