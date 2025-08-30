-- Drop the existing overly permissive SELECT policy
DROP POLICY IF EXISTS "Anyone can read their session messages" ON public.chat_history;

-- Create a new SELECT policy that properly restricts access to session messages
-- Users can only read messages from their own session
CREATE POLICY "Users can read only their own session messages" 
ON public.chat_history 
FOR SELECT 
USING (
  -- Allow reading messages only if the session_id matches what's being queried
  -- The frontend must filter by session_id when querying
  true
);

-- Note: Since we're using session-based isolation without authentication,
-- we rely on the application layer to properly filter by session_id.
-- For better security, we should enforce this at the database level.

-- Create a more secure approach using a function to get session messages
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

-- Update the SELECT policy to be more restrictive
DROP POLICY IF EXISTS "Users can read only their own session messages" ON public.chat_history;

-- Create a restrictive SELECT policy that prevents direct table access
CREATE POLICY "Restrict direct chat history access" 
ON public.chat_history 
FOR SELECT 
USING (false);  -- Block all direct SELECT access, force use of the function