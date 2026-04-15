import Link from "next/link";

const GithubOAuth = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 border">
        <h1 className="text-4xl font-bold mb-6 text-emerald-800">
          GitHub OAuth Login
        </h1>

        <p className="text-slate-600 text-lg mb-8">
          Authenticate users using GitHub OAuth with NextAuth v5.
        </p>

        <div className="space-y-10 text-slate-700">
          {/* OAuth Basics */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">OAuth Basics</h2>
            <p>
              OAuth allows users to authenticate via third-party providers like
              GitHub without sharing passwords. Your app never sees the user’s
              GitHub password.
            </p>
          </section>

          {/* Create GitHub OAuth App */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              1. Create a GitHub OAuth App
            </h2>

            <ul className="list-disc ml-6 space-y-2">
              <li>
                Go to <code>GitHub → Settings → Developer settings</code>
              </li>
              <li>Create a new <strong>OAuth App</strong></li>
              <li>Authorization callback URL:</li>
            </ul>

            <pre className="bg-slate-100 p-4 rounded-lg text-sm overflow-x-auto mt-3">
{`http://localhost:3000/api/auth/callback/github`}
            </pre>
          </section>

          {/* Env Variables */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              2. Environment Variables
            </h2>

            <pre className="bg-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
{`AUTH_GITHUB_ID=your_client_id
AUTH_GITHUB_SECRET=your_client_secret
AUTH_SECRET=your_random_secret`}
            </pre>

            <p className="text-sm text-slate-600 mt-2">
              Restart the dev server after updating environment variables.
            </p>
          </section>

          {/* Provider Configuration */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              3. GitHub Provider Configuration
            </h2>

            <pre className="bg-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
{`import Github from "next-auth/providers/github";

Github({
  clientId: process.env.AUTH_GITHUB_ID!,
  clientSecret: process.env.AUTH_GITHUB_SECRET!,
});`}
            </pre>

            <p className="mt-2">
              Provider IDs are <strong>case-sensitive</strong>. Always use
              <code className="mx-1">"github"</code>.
            </p>
          </section>

          {/* Sign In Example */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              4. Sign In with GitHub
            </h2>

            <p className="mb-3">
              GitHub OAuth requires a <strong>full-page redirect</strong>.
              This is expected behavior.
            </p>

            <pre className="bg-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
{`import { signIn } from "@/lib/auth";

<form
  action={async () => {
    "use server";
    await signIn("github", {
      callbackUrl: "/dashboard",
    });
  }}
>
  <button type="submit">Login with GitHub</button>
</form>`}
            </pre>
          </section>

          {/* Redirect Flow */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              5. OAuth Redirect Flow
            </h2>

            <pre className="bg-slate-100 p-4 rounded-lg text-sm">
{`User clicks "Login with GitHub"
→ Redirect to GitHub
→ User authorizes app
→ GitHub redirects to /api/auth/callback/github
→ User redirected to callbackUrl`}
            </pre>
          </section>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex justify-between">
          <Link href="/day-4" className="text-indigo-600 hover:underline">
            ← Back to Day 4
          </Link>
          <Link
            href="/day-4/sessions-jwt"
            className="text-indigo-600 hover:underline"
          >
            Next → Sessions JWT
          </Link>
        </div>
      </div>
    </main>
  );
};

export default GithubOAuth;
