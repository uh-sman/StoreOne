"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/server"; // or your wrapper
import { AuthSession as Session } from "@supabase/supabase-js"

const SessionContext = createContext<Session | null>(null);

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [session, setSession] = useState<Session | null>(null);
  const [supabase, setSupabase] = useState<any>(null);

  useEffect(() => {
      const initSupabase = async () => {
    try {
          const client = await createClient();
          setSupabase(client);

          const {
            data: { session },
          } = await client.auth.getSession();
          setSession(session);

          const { data: listener } = client.auth.onAuthStateChange(
            (_event, session: Session | null) => {
              setSession(session);
            }
          );

          return () => {
            listener.subscription.unsubscribe();
          };
        } catch (error) {
            console.log("error:")
            console.error(error)
        }
    };

    initSupabase();
  }, []);

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
};

// Optional helper for using session
export const useSession = () => useContext(SessionContext);
