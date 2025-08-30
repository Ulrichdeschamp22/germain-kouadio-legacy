import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Base de connaissances du site IRTN
const siteKnowledge = {
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

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    
    if (!message) {
      throw new Error('Message is required');
    }

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      throw new Error('OPENAI_API_KEY is not configured');
    }

    console.log('Processing chat message:', message);

    // Construire le contexte avec les informations du site
    const siteContext = JSON.stringify(siteKnowledge, null, 2);
    
    const systemPrompt = `Tu es l'assistant virtuel de l'Institut de Restauration et de Transformation Nationale (IRTN), dirigé par le Professeur Germain Kouadio.

INSTRUCTIONS IMPORTANTES:
- Tu dois UNIQUEMENT utiliser les informations fournies dans le contexte ci-dessous
- Ne jamais inventer ou ajouter des informations qui ne sont pas dans le contexte
- Si une information n'est pas disponible dans le contexte, dis-le clairement
- Réponds toujours en français de manière claire, précise et professionnelle
- Tu représentes l'IRTN, donc maintiens un ton respectueux et inspirant
- Mets l'accent sur le leadership et la transformation

CONTEXTE DU SITE IRTN:
${siteContext}

Réponds uniquement basé sur ces informations. Si on te demande quelque chose qui n'est pas dans ce contexte, indique poliment que tu peux seulement fournir des informations sur l'IRTN et ses programmes.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-5-mini-2025-08-07',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        max_completion_tokens: 1000
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenAI API error:', errorData);
      throw new Error(`OpenAI API error: ${errorData}`);
    }

    const data = await response.json();
    
    if (!data.choices || !data.choices[0]) {
      throw new Error('Invalid response from OpenAI API');
    }

    const reply = data.choices[0].message.content;
    console.log('Generated reply:', reply);

    return new Response(
      JSON.stringify({ reply }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in chat-assistant function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Une erreur est survenue lors du traitement de votre message' 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});