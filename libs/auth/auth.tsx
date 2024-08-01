import { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google"

import PrismaClient, { User, Account, Session, VerificationToken } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";

import PostgresAdapter from "@auth/pg-adapter"
import { Pool } from "pg"

import { FirestoreAdapter } from "@auth/firebase-adapter"
import { firestore } from "@/libs/firestore/firestore";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { pages } from "next/dist/build/templates/app-page";


const pool = new Pool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

const prisma = new PrismaClient.PrismaClient();

const authConfig = {
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
    newUser: null,
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user, token }) {
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token
    },
  },
} as unknown as NextAuthConfig;

interface ProviderProps {
  id: string;
  name: string;
  icon: IconDefinition;
  color: string;
  bgColor: string;
}

export const providerMap = {
  github: {
    id: "github",
    name: "GitHub",
    icon: faGithub,
    color: "#fff",
    bgColor: "#333",
  },
  google: {
    id: "google",
    name: "Google",
    icon: faGoogle,
    color: "#fff",
    bgColor: "#4285f4",
  }
} as Record<string, ProviderProps>;

export default authConfig;