"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function () {
  const session = useSession();
  return (
    <div className="border-b-2">
      <button
        onClick={() => {
          signIn();
        }}
        className="bg-black text-white px-6 py-1 rounded-xl ml-2 m-2"
      >
        Sign In
      </button>

      {JSON.stringify(session)}
    </div>
  );
}
