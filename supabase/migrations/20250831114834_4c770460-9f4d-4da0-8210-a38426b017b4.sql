-- Fix the function to return a table structure instead of a specific type
DROP FUNCTION IF EXISTS public.get_session_messages(text);

-- Create the function with proper return type and fixed search path
CREATE OR REPLACE FUNCTION public.get_session_messages(p_session_id text)
RETURNS TABLE(
  id uuid,
  created_at timestamp with time zone,
  session_id text,
  message text,
  role text
)
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT id, created_at, session_id, message, role
  FROM public.chat_history 
  WHERE session_id = p_session_id
  ORDER BY created_at ASC;
$$;

-- Grant execute permission to anon role
GRANT EXECUTE ON FUNCTION public.get_session_messages TO anon;