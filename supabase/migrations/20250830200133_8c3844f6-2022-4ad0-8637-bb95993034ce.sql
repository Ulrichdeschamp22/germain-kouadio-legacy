-- Fix the function search path security warning
DROP FUNCTION IF EXISTS get_session_messages(text);

CREATE OR REPLACE FUNCTION get_session_messages(p_session_id text)
RETURNS SETOF chat_history
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public  -- Fix the security warning by setting search_path
AS $$
  SELECT * FROM public.chat_history 
  WHERE session_id = p_session_id
  ORDER BY created_at ASC;
$$;

-- Grant execute permission to anon role
GRANT EXECUTE ON FUNCTION get_session_messages TO anon;