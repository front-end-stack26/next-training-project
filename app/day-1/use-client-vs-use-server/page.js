import Link from 'next/link';

const ClientVsServer = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        use client vs use server in Next.js
      </h1>

      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Introduction</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Next.js 13+ introduced the App Router with a new paradigm for React components.
            By default, all components are <strong>Server Components</strong> that run on the server.
            However, you can opt into client-side rendering using the <code className="bg-gray-100 px-2 py-1 rounded">"use client"</code> directive,
            or define server actions with <code className="bg-gray-100 px-2 py-1 rounded">"use server"</code>.
          </p>
        </section>

        {/* Server Components */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Server Components (Default)</h2>
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-blue-800 mb-2">Characteristics:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Run on the server during build time or request time</li>
              <li>Have access to server-side resources (file system, database, environment variables)</li>
              <li>Cannot use browser APIs or React hooks that depend on the browser</li>
              <li>Automatically reduce bundle size by not sending component code to the client</li>
              <li>Enable streaming and progressive rendering</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code>{`// This is a Server Component by default
export default function ServerComponent() {
  // ✅ Can access server-side APIs
  const data = await fetch('https://api.example.com/data');

  // ❌ Cannot use browser APIs
  // const [state, setState] = useState(); // Error!

  return <div>Server-rendered content</div>;
}`}</code>
            </pre>
          </div>
        </section>

        {/* Client Components */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Client Components ("use client")</h2>
          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-green-800 mb-2">Characteristics:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Run on the client-side in the browser</li>
              <li>Have access to browser APIs and React hooks</li>
              <li>Can handle user interactions and state management</li>
              <li>Increase bundle size as code is sent to the client</li>
              <li>Opt-in by adding "use client" at the top of the file</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code>{`"use client";

// This is now a Client Component
export default function ClientComponent() {
  const [count, setCount] = useState(0); // ✅ Works!

  // ✅ Can use browser APIs
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}</code>
            </pre>
          </div>
        </section>

        {/* Server Actions */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Server Actions ("use server")</h2>
          <div className="bg-purple-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-purple-800 mb-2">Characteristics:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Allow Client Components to call server-side functions</li>
              <li>Run on the server but can be invoked from the client</li>
              <li>Enable form submissions and mutations without API routes</li>
              <li>Automatically handle progressive enhancement</li>
              <li>Can be defined in Server or Client Components</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code>{`"use server";

export async function createPost(formData: FormData) {
  // ✅ Runs on server
  const title = formData.get('title');
  const content = formData.get('content');

  // Save to database
  await db.posts.create({ title, content });

  revalidatePath('/posts'); // Revalidate cached pages
}

// In a Client Component:
"use client";
import { createPost } from './actions';

export function PostForm() {
  return (
    <form action={createPost}>
      <input name="title" />
      <textarea name="content" />
      <button type="submit">Create Post</button>
    </form>
  );
}`}</code>
            </pre>
          </div>
        </section>

        {/* When to Use Each */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">When to Use Each</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Use Server Components when:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Fetching data from APIs or databases</li>
                <li>Accessing server-side resources</li>
                <li>Reducing client bundle size is important</li>
                <li>Content doesn't need interactivity</li>
                <li>SEO and initial page load performance matter</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Use Client Components when:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>You need browser APIs (localStorage, geolocation)</li>
                <li>Using React hooks (useState, useEffect, useContext)</li>
                <li>Handling user interactions (onClick, onSubmit)</li>
                <li>Using third-party libraries that require browser environment</li>
                <li>Real-time features or client-side state management</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Prefer Server Components:</strong> Start with Server Components and only use "use client" when necessary</li>
              <li><strong>Minimize Client Components:</strong> Keep client boundaries as small as possible to reduce bundle size</li>
              <li><strong>Composition over Conversion:</strong> Wrap client-only parts in Client Components rather than making entire pages client-side</li>
            </ul>
          </div>
        </section>

        {/* Performance Impact */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Performance Impact</h2>
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-gray-700 mb-2"><strong>Server Components:</strong></p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>Smaller bundle size</li>
              <li>Faster initial page loads</li>
              <li>Better SEO</li>
              <li>Reduced client-side JavaScript</li>
            </ul>
            <p className="text-gray-700 mb-2"><strong>Client Components:</strong></p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Larger bundle size</li>
              <li>Increased hydration time</li>
              <li>More JavaScript sent to client</li>
              <li>But enables rich interactivity</li>
            </ul>
          </div>
        </section>
      </div>
      {/* Navigation */}
        <div className="text-center mt-12">
          <Link
            href="/day-1"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="mr-2">←</span>
            Back to Day 1 Overview
          </Link>
        </div>
    </div>
  );
};

export default ClientVsServer;