import Link from "next/link";

const Day4 = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-200 p-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-black tracking-tight text-slate-900 mb-6">
            Day 4: Authentication with NextAuth v5
          </h1>
          <p className="text-lg sm:text-xl text-slate-600">
            Learn how to implement modern authentication in Next.js using
            NextAuth v5, credentials, OAuth, sessions, and route protection.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
          <Link
            href="/day-4/nextauth-setup"
            className="group rounded-xl border border-indigo-300 bg-indigo-50 hover:bg-indigo-100 transition p-6 text-center shadow-sm"
          >
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">
              NextAuth v5 Setup
            </h2>
            <p className="text-sm text-indigo-600">
              Configure NextAuth v5 with the App Router.
            </p>
          </Link>

          <Link
            href="/day-4/credentials-provider"
            className="group rounded-xl border border-sky-300 bg-sky-50 hover:bg-sky-100 transition p-6 text-center shadow-sm"
          >
            <h2 className="text-xl font-semibold text-sky-700 mb-2">
              Credentials Provider
            </h2>
            <p className="text-sm text-sky-600">
              Email & password login with Prisma and validation.
            </p>
          </Link>

          <Link
            href="/day-4/oauth-github"
            className="group rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 transition p-6 text-center shadow-sm"
          >
            <h2 className="text-xl font-semibold text-emerald-700 mb-2">
              GitHub OAuth
            </h2>
            <p className="text-sm text-emerald-600">
              Login with GitHub using OAuth in NextAuth.
            </p>
          </Link>

          <Link
            href="/day-4/sessions-jwt"
            className="group rounded-xl border border-purple-300 bg-purple-50 hover:bg-purple-100 transition p-6 text-center shadow-sm"
          >
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              Sessions & JWT
            </h2>
            <p className="text-sm text-purple-600">
              Understand JWT-based sessions in NextAuth v5.
            </p>
          </Link>

          <Link
            href="/day-4/auth-server-client"
            className="group rounded-xl border border-pink-300 bg-pink-50 hover:bg-pink-100 transition p-6 text-center shadow-sm"
          >
            <h2 className="text-xl font-semibold text-pink-700 mb-2">
              Server vs Client Auth
            </h2>
            <p className="text-sm text-pink-600">
              Using auth() on the server and session on the client.
            </p>
          </Link>

          <Link
            href="/day-4/protect-routes"
            className="group rounded-xl border border-orange-300 bg-orange-50 hover:bg-orange-100 transition p-6 text-center shadow-sm"
          >
            <h2 className="text-xl font-semibold text-orange-700 mb-2">
              Protect Routes
            </h2>
            <p className="text-sm text-orange-600">
              Middleware, redirects, and access control.
            </p>
          </Link>
        </div>

        {/* Navigation */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="mr-2">←</span>
            Back to Homepage Overview
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Day4;
