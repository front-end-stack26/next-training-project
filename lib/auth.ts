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

        async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                const user = await prisma.user.findUnique({
                where: { email: credentials.email as string },
                });

                if (!user || !user.password) return null;

                const isValid = credentials.password === user.password;
                if (!isValid) return null;

                return {
                    id: user.id.toString(),
                    email: user.email,
                };
        },
    })
  ],
  secret: process.env.AUTH_SECRET,
})