import { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github"
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { firestore } from "@/libs/firestore/firestore"

const authConfig: NextAuthConfig = {
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  adapter: FirestoreAdapter(firestore),
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
  },
};

export default authConfig;