import { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google"

import PrismaClient , { User, Account, Session, VerificationToken } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { FirestoreAdapter } from "@auth/firebase-adapter"
import { firestore } from "@/libs/firestore/firestore";

const authConfig = {
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  adapter: PrismaAdapter(PrismaClient),
  callbacks: {
    async signIn({ user, account, profile, email, credentials }: { user: any, account: any, profile: any, email: string, credentials: any }) {
      if (account.provider === "google") {
        return profile.email_verified
      }
      return true
    },
    async redirect({ url, baseUrl } : { url: string, baseUrl: string }) {
      console.log("redirect", url, baseUrl)
      return baseUrl
    },
    async session({ session, user, token } : { session: any, user: User, token: any }) {
      console.log("session", session, user, token)
      return session
    },
    async jwt({ token, user, account, profile, isNewUser } : { token: any, user: any, account: any, profile: any, isNewUser: boolean }) {
      console.log("jwt", token, user, account, profile, isNewUser)
      return token
    },
  },
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
};

export default authConfig;