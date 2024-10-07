
// src/app/api/auth/[...nextauth]/authOptions.ts

import GoogleProvider from "next-auth/providers/google";


export const authOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET, 
    pages: {
      signIn: '/', // Redirect to home page after sign in
      signOut: '/', // Redirect to home page after sign out
    },
  };

