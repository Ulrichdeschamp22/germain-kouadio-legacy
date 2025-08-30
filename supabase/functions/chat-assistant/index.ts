import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
const supabaseUrl = Deno.env.get('SUPABASE_URL');
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Base de connaissances complète sur le Professeur Germain Kouadio et l'IRTN
const siteContext = `
Vous êtes l'assistant virtuel du site web du Professeur Germain Kouadio et de l'IRTN (Institut de Restauration et de Transformation Nationale).

INFORMATIONS PRINCIPALES:

1. LE PROFESSEUR GERMAIN KOUADIO:
- Directeur Général de l'IRTN (présent aux États-Unis, Canada et Afrique)
- Président de la CISPE (Communauté Internationale des Semeurs du Plein Evangile)
- Professeur et Pasteur
- Leader spirituel visionnaire et expert en leadership transformationnel
- Conférencier international (plus de 30 pays visités)
- Plus de 25 années d'expérience en formation
- Double doctorant en théologie et leadership
- Vit avec sa femme Geneviève et ses 5 enfants à Atlanta, Georgia

2. PARCOURS ACADÉMIQUE:
- Certificat en leadership
- Associate Degree of Biblical Education
- Bachelor en leadership et théologie  
- Master en leadership d'Administration
- Deux doctorats en cours (théologie et leadership)
- Diplômé de l'Evangelical Training Association (E.T.A)
- Récompensé pour excellents rendements universitaires

3. PUBLICATIONS:
- "LE VRAI LEADER"
- "L'AFRIQUE ET LE LEADERSHIP"
- "LE LEADERSHIP DANS LES ÉGLISES"
- "UN MAUVAIS LEADERSHIP EST UNE MALÉDICTION"
- "UN BON LEADERSHIP EST UNE BÉNÉDICTION"
- "COMMENT DECOUVRIR, DEVELOPPER ET DEPLOYER SON POTENTIEL"

4. L'IRTN - VISION ET MISSION:
Vision: "Former des leaders qui ne laissent plus de place à l'Erreur, à l'Echec, et à l'Excuse"
Mission: Élever des dirigeants africains capables d'emmener leurs pays de la médiocrité à l'excellence

5. FORMATIONS PROPOSÉES:
- Les 5 niveaux du Leadership
- Les 21 qualités indispensables du leader
- Leadership Exécutif (prévention/résolution des conflits, transformation nationale)
- Formation Spirituelle (relation avec Dieu, prière, intégrité)
- Leçons de Leadership pratiques

6. CONTACTS:
- Côte d'Ivoire: +225 0787144278
- France: +33 6 16 88 42 50
- États-Unis: +1 (470) 530-8017
- Adresses: Atlanta (Georgia, USA) et Geraki Center (Abidjan)

7. RÉSEAUX SOCIAUX:
- YouTube: LA VIE ABONDANTE TV
- YouTube: GERMAIN KOUADIO

INSTRUCTIONS POUR L'ASSISTANT:
- Soyez chaleureux, professionnel et inspirant
- Mettez en avant les valeurs de leadership et transformation
- Encouragez les visiteurs à s'inscrire aux formations
- Fournissez des informations précises sur les programmes
- Utilisez des citations du Professeur quand approprié
- Proposez toujours de contacter l'équipe pour plus de détails
`;

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, sessionId } = await req.json();
    
    if (!message || !sessionId) {
      throw new Error('Message et sessionId requis');
    }

    // Initialize Supabase client
    const supabase = createClient(supabaseUrl!, supabaseServiceKey!);

    // Get chat history using secure function (last 10 messages)
    const { data: history } = await supabase
      .rpc('get_session_messages', { p_session_id: sessionId });

    // Build conversation history
    const messages = [
      { 
        role: 'system', 
        content: siteContext + '\n\nRépondez de manière concise et utile en français.'
      }
    ];

    // Add previous messages
    if (history && history.length > 0) {
      history.forEach(msg => {
        messages.push({
          role: msg.role as 'user' | 'assistant',
          content: msg.message
        });
      });
    }

    // Add current message
    messages.push({ role: 'user', content: message });

    // Save user message
    await supabase
      .from('chat_history')
      .insert({
        session_id: sessionId,
        message: message,
        role: 'user'
      });

    console.log('Sending request to OpenAI with messages:', messages.length);

    // Call OpenAI API with gpt-4o-mini
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenAI API error:', errorData);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;

    // Save assistant response
    await supabase
      .from('chat_history')
      .insert({
        session_id: sessionId,
        message: assistantMessage,
        role: 'assistant'
      });

    return new Response(
      JSON.stringify({ 
        reply: assistantMessage,
        success: true 
      }), 
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in chat-assistant function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }), 
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});