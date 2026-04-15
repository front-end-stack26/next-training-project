import Link from "next/link";

const CredentialsProvider = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 border">
        <h1 className="text-4xl font-bold mb-6 text-sky-800">
          Credentials Provider
        </h1>

        <p className="text-slate-600 text-lg mb-8">
          Authenticate users using email and password with NextAuth v5.
        </p>

        <div className="space-y-10 text-slate-700">
          {/* When to use */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              When to use Credentials?
            </h2>
            <p>
              The Credentials Provider is ideal when you control your user data
              (for example with Prisma and a database) and want full control
              over the authentication logic.
            </p>
          </section>

          {/* Basic Configuration */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              Basic Provider Configuration
            </h2>

            <pre className="bg-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
{`import Credentials from "next-auth/providers/credentials";

Credentials({
  credentials: {
    email: { label: "Email", type: "email" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials) {
    // validation logic
  },
});`}
            </pre>
          </section>

          {/* authorize */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              authorize() Function Example
            </h2>

            <p className="mb-3">
              The <code>authorize()</code> function validates user credentials
              and must return a valid NextAuth user object.
            </p>

            <pre className="bg-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
{`async authorize(credentials) {
  if (!credentials?.email || !credentials?.password) {
    return null;
  }

  return {
    id: "1",
    email: credentials.email as string,
  };
}`}
            </pre>
          </section>

          {/* Prisma + bcrypt */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              Example with Prisma & bcrypt
            </h2>

            <p className="mb-3">
              A real-world example validating credentials against a database:
            </p>

            <pre className="bg-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
{`import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

async authorize(credentials) {
  if (!credentials?.email || !credentials?.password) return null;

  const email = credentials.email as string;
  const password = credentials.password as string;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user || !user.password) return null;

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return null;

  return {
    id: user.id.toString(),
    email: user.email,
  };
}`}
            </pre>
          </section>

          {/* Login form */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              Login Form Example
            </h2>

            <pre className="bg-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
{`import { signIn } from "@/lib/auth";

<form
  action={async (formData) => {
    "use server";
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo: "/dashboard",
    });
  }}
>
  <input name="email" type="email" />
  <input name="password" type="password" />
  <button type="submit">Login</button>
</form>`}
            </pre>
          </section>

          {/* Security notes */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              Security Best Practices
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Always hash passwords using <code>bcrypt</code></li>
              <li>Never return the password from <code>authorize()</code></li>
              <li>Always return <code>id</code> as a string</li>
              <li>Validate credentials before querying the database</li>
            </ul>
          </section>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex justify-between">
          <Link href="/day-4/nextauth-setup" className="text-sky-600 hover:underline">
            ← Previous
          </Link>
          <Link href="/day-4/oauth-github" className="text-sky-600 hover:underline">
            Next → GitHub OAuth
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CredentialsProvider;
