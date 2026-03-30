export default function Intro() { 
    return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        
        <h1 className="text-4xl font-bold text-indigo-700 mb-6">
          ⚙️ Introduction to Server Actions
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Server Actions are a powerful Next.js feature that allow you to run 
          server-side logic directly from your React components. Instead of 
          creating API routes or exposing logic to the client, Server Actions 
          execute securely on the server.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Why Server Actions?</h2>
        <ul className="space-y-3 text-gray-700">
          <li>✔ They never ship server code to the client.</li>
          <li>✔ No need to write API endpoints for basic operations.</li>
          <li>✔ Secure by default with built-in CSRF protection.</li>
          <li>✔ Deep integration with caching & revalidation.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-600 mt-10 mb-4">Basic Example</h2>

        <pre className="bg-gray-900 text-green-300 p-4 rounded-xl text-sm overflow-x-auto">
            {`"use server"

            export async function sayHello() {
            console.log("Hello from server!")
            }`}
        </pre>

        <p className="mt-4 text-gray-700">
          You can now import and call <code>sayHello()</code> directly inside your UI — and it will still run on the server.
        </p>

      </div>
    </div>
  )
}
