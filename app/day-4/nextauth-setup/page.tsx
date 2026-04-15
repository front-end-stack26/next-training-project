import Link from "next/link";

const NextAuthSetup = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-sky-100 py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 border">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-indigo-800">
          NextAuth v5 Setup
        </h1>

        <p className="text-slate-600 text-lg mb-8">
          Learn how to install, configure, and integrate NextAuth v5
          with the Next.js App Router.
        </p>

        <div className="space-y-10 text-slate-700">
          {/* What is NextAuth */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">What is NextAuth?</h2>
            <p>
              NextAuth is a complete authentication solution for Next.js that
              supports credentials-based login, OAuth providers (GitHub,
              Google, etc.), JWT sessions, and secure server-side authentication.
            </p>
          </section>

          {/* Installation */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              1. Install Required Packages
            </h2>

            <p className="mb-3">
              Install NextAuth v5 :
            </p>

            <pre className="bg-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
{`npm install next-auth`}
            </pre>
          </section>

          {/* File Structure */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              2. Recommended File Structure
            </h2>

            <pre className="bg-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
{`/lib/auth.ts
/app/api/auth/[...nextauth]/route.ts
/middleware.ts`}
            </pre>

            <p className="mt-2 text-sm text-slate-600">
              NextAuth v5 centralizes configuration inside <code>lib/auth.ts</code>.
            </p>
          </section>

          {/* Configuration */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              3. Configure NextAuth
            </h2>

            <p className="mb-3">
              Create <code>lib/auth.ts</code>:
            </p>

            <pre className="bg-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
{`import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // validate user here
        return {
          id: "1",
          email: credentials.email as string,
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
});`}
            </pre>
          </section>

          {/* Route Handler */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              4. Create the Route Handler
            </h2>

            <p className="mb-3">
              Connect NextAuth to the App Router:
            </p>

            <pre className="bg-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
{`// app/api/auth/[...nextauth]/route.ts
import { handlers } from "@/lib/auth";

export const { GET, POST } = handlers;`}
            </pre>
          </section>

          {/* Server Usage */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              5. Using Authentication on the Server
            </h2>

            <pre className="bg-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
{`import { auth } from "@/lib/auth";

const session = await auth();

if (session) {
  console.log(session.user?.email);
}`}
            </pre>

            <p className="mt-2 text-sm text-slate-600">
              <code>auth()</code> works only in Server Components and Server Actions.
            </p>
          </section>

          {/* Core Concepts */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Core Concepts</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Providers (Credentials, OAuth)</li>
              <li>JWT-based sessions (default)</li>
              <li>Server-first authentication</li>
              <li>Middleware-based protection</li>
            </ul>
          </section>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link href="/day-4" className="text-indigo-600 hover:underline">
            ← Back to Day 4
          </Link>
          <Link
            href="/day-4/credentials-provider"
            className="text-indigo-600 hover:underline"
          >
            Next → Credentials Provider
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NextAuthSetup;
