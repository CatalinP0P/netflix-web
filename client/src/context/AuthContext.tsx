import app from "../lib/firebase";
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext<any>(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }: { children?: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  app.auth().onAuthStateChanged((user: any) => {
    setUser(user);
    console.log(user);
    setLoading(false);
  });

  const signOut = async () => {
    await app.auth().signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider
    value={{ user: user, loading: loading, signOut: signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
