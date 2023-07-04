import React from "react";
import { useAuth } from "../../context/AuthContext";
import { ReactComponent as Google } from "../../assets/google.svg";

export default function Signin() {
  const auth = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-24">
      <div className="rounded-md bg-zinc-800/25 p-12 flex flex-col gap-4 w-[95%] max-w-[400px] text-xs">
        <label className="text-3xl font-bold text-white block text-center">
          Sign in
        </label>
        <button
          className="bg-customred text-muted py-3 rounded-md w-full flex flex-row gap-2 justify-center items-center"
          onClick={async () => await auth.signInWithGoogle()}
        >
          <Google className="w-[16px] h-[16px] fill-white" />
          Google
        </button>
      </div>
    </div>
  );
}
