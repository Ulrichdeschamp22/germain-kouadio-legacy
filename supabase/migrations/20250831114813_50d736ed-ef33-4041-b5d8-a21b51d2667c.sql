-- Fix the function search path security warning by setting an explicit search path
DROP FUNCTION IF EXISTS get_session_messages(text);

-- Recreate the function with a fixed search path for security
CREATE OR REPLACE FUNCTION public.get_session_messages(p_session_id text)
RETURNS SETOF public.chat_history
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT * FROM public.chat_history 
  WHERE session_id = p_session_id
  ORDER BY created_at ASC;
$$;

-- Grant execute permission to anon role
GRANT EXECUTE ON FUNCTION public.get_session_messages TO anon;