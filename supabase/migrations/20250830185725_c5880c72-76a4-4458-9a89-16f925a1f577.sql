-- Créer une table pour stocker l'historique des conversations
CREATE TABLE IF NOT EXISTS public.chat_history (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  message TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Activer RLS
ALTER TABLE public.chat_history ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre à tous de créer et lire leurs propres messages de session
CREATE POLICY "Anyone can create chat messages" 
ON public.chat_history 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can read their session messages" 
ON public.chat_history 
FOR SELECT 
USING (true);

-- Index pour améliorer les performances
CREATE INDEX idx_chat_history_session_id ON public.chat_history(session_id);
CREATE INDEX idx_chat_history_created_at ON public.chat_history(created_at DESC);