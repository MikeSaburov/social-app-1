import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const session = useSession();
  const supabase = useSupabaseClient();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!session?.user?.id) {
      return;
    }
    supabase
      .from('profiles')
      .select()
      .eq('id', session.user.id)
      .then((res) => {
        setProfile(res.data?.[0]);
      });
  }, [session?.user?.id]);

  return (
    <UserContext.Provider value={{ profile }}>{children}</UserContext.Provider>
  );
}
