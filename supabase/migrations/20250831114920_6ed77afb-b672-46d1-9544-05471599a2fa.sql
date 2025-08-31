-- Fix the function to use the correct table name "Chat bot"
DROP FUNCTION IF EXISTS public.get_session_messages(text);

-- Create the function with the correct table name and fixed search path
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
  FROM public."Chat bot"
  WHERE session_id = p_session_id
  ORDER BY created_at ASC;
$$;

-- Grant execute permission to anon role
GRANT EXECUTE ON FUNCTION public.get_session_messages TO anon;

-- Also update the RLS policy on the correct table
DROP POLICY IF EXISTS "Block direct chat history access" ON public.chat_history;
DROP POLICY IF EXISTS "Block direct chat history access" ON public."Chat bot";

-- Create a restrictive SELECT policy on the correct table
CREATE POLICY "Block direct Chat bot access" 
ON public."Chat bot"
FOR SELECT 
USING (false);  -- Block all direct SELECT access