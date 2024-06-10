import NextAuth from "next-auth"
import authConfig from "@/libs/auth/auth"
 
export const { handlers, signIn, signOut, auth } = NextAuth(authConfig)

