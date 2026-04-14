import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Github from "next-auth/providers/github"
import { prisma } from "@/lib/prisma"

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {strategy: 'jwt'},
  providers: [
      Github({
        clientId: process.env.AUTH_GITHUB_ID,
        clientSecret: process.env.AUTH_GITHUB_SECRET,
      }),
        Credentials({
            credentials:{
                email:{label:"Email", type:"email"},
                password:{lablel:"Password", type:"password"}
            },
    
            authorize: async(credentials)=>{
                if(!credentials?.email || !credentials?.password) return null
    
                const email = credentials.email as string
                const password = credentials.password as string
    
    
                // Check for the user
                const user = await prisma.user.findUnique({
                    where:{
                        email
                    }
                })
    
                // Check if no user exists or not email and password providers
                if(!user || !user?.password) return null
    
                const isValid = password === user.password
    
                if(!isValid) return null
    
                return user
            }
        })
  ],
  secret: process.env.AUTH_SECRET,
})