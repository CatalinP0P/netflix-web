import app from "../lib/firebase";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  GoogleAuthProvider,
  User,
  signInAnonymously,
  signInWithCredential,
} from "firebase/auth";
import { useDB } from "./DatabaseContext";

interface ContextProps {
  user: User | null;
  loading: boolean;
  signOut: () => Promise<any>;
  signInWithGoogle: () => Promise<any>;
}

const AuthContext = createContext<ContextProps>({
  user: null,
  loading: true,
  signOut: async () => {},
  signInWithGoogle: async () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }: { children?: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { setToken } = useDB();

  useEffect(() => {
    app.auth().onAuthStateChanged(async (user: any) => {
      setUser(user);
      console.log(user);
      if (user) {
        const token = await user.getIdToken();
        setToken(token);
      }
      setLoading(false);
    });
  }, []);

  const signOut = async () => {
    await app.auth().signOut();
    setUser(null);
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const user = await app.auth().signInWithPopup(provider);
      setUser(user.user);
    } catch (err) {
      console.log(err);
    }
  };

  return loading ? null : (
    <AuthContext.Provider
      value={{
        user: user,
        loading: loading,
        signOut: signOut,
        signInWithGoogle: signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
