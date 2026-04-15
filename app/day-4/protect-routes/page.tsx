import Link from "next/link";

const ProtectRoutes = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-rose-100 py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 border">
        <h1 className="text-4xl font-bold mb-6 text-orange-800">
          Protect Routes
        </h1>

        <p className="text-slate-600 text-lg mb-8">
          Learn how to restrict access to pages using authentication in Next.js.
        </p>

        <div className="space-y-6 text-slate-700">
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              Why Route Protection?
            </h2>
            <p>
              Some pages (checkout, dashboard, admin) must be accessible only
              by authenticated users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              Server-Side Protection (Recommended)
            </h2>
            <pre className="bg-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
                {`    import { auth } from "@/lib/auth";
    import { redirect } from "next/navigation";

    const session = await auth();

    if (!session) {
    redirect("/login");
                }`}
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              Middleware Protection
            </h2>
            <p>
              Middleware allows you to protect routes globally before the page loads.
            </p>
            <pre className="bg-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
                {`    import { auth } from "@/lib/auth"
    import { NextResponse } from "next/server"
    
    export default auth((req) => {
    
    if (!req.auth) {
        return NextResponse.redirect(
        new URL("/project-demo/signup", req.url)
        )
    }
    })

    export const config = {
    matcher: ["/project-demo/checkout"],
    }`
                }
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              Best Practices
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Always protect sensitive routes on the server</li>
              <li>Avoid client-only redirects</li>
              <li>Prefer middleware for global rules</li>
            </ul>
          </section>
        </div>

        <div className="mt-10 flex justify-between">
          <Link href="/day-4/sessions-jwt" className="text-orange-700 font-semibold hover:underline">
            ← Previous
          </Link>
          <Link href="/day-4" className="text-orange-700 font-semibold hover:underline">
            Back to Day 4
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ProtectRoutes;