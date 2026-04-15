import Link from "next/link";

const SessionsJWT = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 border">
        <h1 className="text-4xl font-bold mb-6 text-purple-800">
          Sessions & JWT
        </h1>

        <p className="text-slate-600 text-lg mb-8">
          Understand how authentication sessions work in NextAuth v5 using JSON Web Tokens.
        </p>

        <div className="space-y-6 text-slate-700">
          <section>
            <h2 className="text-2xl font-semibold mb-2">What is a Session?</h2>
            <p>
              A session represents the authenticated state of a user after
              successful login. NextAuth v5 uses JWT by default.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Why JWT?</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Stateless (no DB session storage)</li>
              <li>Fast and scalable</li>
              <li>Works perfectly with Server Components</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              Accessing the Session
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <code>auth()</code> → Server Components
              </li>
              <li>
                <code>useSession()</code> → Client Components
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              Server Example
            </h2>
            <pre className="bg-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
                {`import { auth } from "@/lib/auth";

                const session = await auth();

                if (session) {
                console.log(session.user?.email);
                }`}
            </pre>
          </section>
        </div>

        <div className="mt-10 flex justify-between">
          <Link href="/day-4/oauth-github" className="text-purple-700 font-semibold hover:underline">
            ← Previous
          </Link>
          <Link href="/day-4/protect-routes" className="text-purple-700 font-semibold hover:underline">
            Next → Protect Routes
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SessionsJWT;
