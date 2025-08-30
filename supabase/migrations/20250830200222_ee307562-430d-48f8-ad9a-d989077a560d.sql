-- First, drop all existing policies for chat_history
DROP POLICY IF EXISTS "Anyone can read their session messages" ON public.chat_history;
DROP POLICY IF EXISTS "Users can read only their own session messages" ON public.chat_history;
DROP POLICY IF EXISTS "Restrict direct chat history access" ON public.chat_history;

-- Create a secure function to get session messages
CREATE OR REPLACE FUNCTION get_session_messages(p_session_id text)
RETURNS SETOF chat_history
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT * FROM public.chat_history 
  WHERE session_id = p_session_id
  ORDER BY created_at ASC;
$$;

-- Grant execute permission to anon role
GRANT EXECUTE ON FUNCTION get_session_messages TO anon;

-- Create a restrictive SELECT policy that prevents direct table access
-- This forces the use of the secure function
CREATE POLICY "Block direct chat history access" 
ON public.chat_history 
FOR SELECT 
USING (false);  -- Block all direct SELECT access

-- The INSERT policy remains as is - anyone can create messages for their session
-- This is already secure as it's handled by the edge function