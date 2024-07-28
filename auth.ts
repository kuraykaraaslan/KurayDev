import NextAuth from "next-auth"
import authConfig , {providerMap} from "@/libs/auth/auth"
 
export const { handlers, signIn, signOut, auth } = NextAuth(authConfig)

export { providerMap }
