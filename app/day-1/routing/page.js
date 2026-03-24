import Link from 'next/link'

const Routing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Next.js Routing Systems
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the evolution from Pages Router to App Router in Next.js
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
              <span className="text-white font-bold text-xl">📍</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Routing Systems Overview</h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            Next.js currently supports two routing systems, each with its own approach to file-based routing:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-3">📁 Pages Router (Legacy)</h3>
              <p className="text-gray-700">
                The original routing system using the <code className="bg-red-100 px-2 py-1 rounded">pages/</code> directory.
                Introduced in Next.js 1.0 and still supported for existing projects.
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">🚀 App Router (Modern)</h3>
              <p className="text-gray-700">
                The new routing system using the <code className="bg-green-100 px-2 py-1 rounded">app/</code> directory.
                Introduced in Next.js 13 and now the recommended default for new projects.
              </p>
            </div>
          </div>
        </div>

        {/* Folder Structure Comparison */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3 text-white font-bold">1</span>
            Folder Structure & Basic Routing
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pages Router */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-red-700 mb-4">Pages Router (pages/)</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Uses the <code className="bg-gray-200 px-2 py-1 rounded">pages/</code> directory where each file automatically becomes a route.
                </p>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-center justify-between bg-white p-3 rounded border">
                    <span>pages/index.js</span>
                    <span className="text-blue-600 font-semibold">→ /</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded border">
                    <span>pages/about.js</span>
                    <span className="text-blue-600 font-semibold">→ /about</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded border">
                    <span>pages/blog/index.js</span>
                    <span className="text-blue-600 font-semibold">→ /blog</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded border">
                    <span>pages/blog/[id].js</span>
                    <span className="text-blue-600 font-semibold">→ /blog/:id</span>
                  </div>
                </div>
              </div>
            </div>

            {/* App Router */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">App Router (app/)</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Uses the <code className="bg-gray-200 px-2 py-1 rounded">app/</code> directory with <code className="bg-gray-200 px-2 py-1 rounded">page.js</code> files defining routes.
                </p>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-center justify-between bg-white p-3 rounded border">
                    <span>app/page.js</span>
                    <span className="text-green-600 font-semibold">→ /</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded border">
                    <span>app/about/page.js</span>
                    <span className="text-green-600 font-semibold">→ /about</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded border">
                    <span>app/blog/page.js</span>
                    <span className="text-green-600 font-semibold">→ /blog</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded border">
                    <span>app/blog/[id]/page.js</span>
                    <span className="text-green-600 font-semibold">→ /blog/:id</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Routing */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-3 text-white font-bold">2</span>
            Advanced Routing Patterns
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">🔄 Dynamic Routes</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-white p-2 rounded">
                  <code className="text-blue-600">[id]</code> → <span className="text-gray-600">/posts/123</span>
                </div>
                <div className="bg-white p-2 rounded">
                  <code className="text-blue-600">[...slug]</code> → <span className="text-gray-600">/docs/a/b/c</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">📁 Nested Routes</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-white p-2 rounded">
                  <code className="text-purple-600">app/blog/page.js</code>
                </div>
                <div className="bg-white p-2 rounded">
                  <code className="text-purple-600">app/blog/create/page.js</code>
                </div>
                <div className="bg-white p-2 rounded">
                  <code className="text-purple-600">app/blog/[id]/edit/page.js</code>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">🎯 Special Files</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-white p-2 rounded">
                  <code className="text-orange-600">layout.js</code> → Layout wrapper
                </div>
                <div className="bg-white p-2 rounded">
                  <code className="text-orange-600">loading.js</code> → Loading UI
                </div>
                <div className="bg-white p-2 rounded">
                  <code className="text-orange-600">error.js</code> → Error boundary
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rendering Models */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3 text-white font-bold">3</span>
            Rendering Models
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">App Router Advantages</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Server Components by Default</h4>
                    <p className="text-gray-600 text-sm">Components run on server, reducing bundle size</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Selective Client Components</h4>
                    <p className="text-gray-600 text-sm">Use "use client" only when needed for interactivity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Advanced Features</h4>
                    <p className="text-gray-600 text-sm">Streaming, parallel routes, intercepting routes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-red-700 mb-4">Pages Router (Traditional)</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">○</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Client-Side Rendering</h4>
                    <p className="text-gray-600 text-sm">Traditional React SPA model</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">○</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Limited Server Features</h4>
                    <p className="text-gray-600 text-sm">No built-in server components</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">○</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Legacy Support</h4>
                    <p className="text-gray-600 text-sm">Still maintained for existing projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Fetching */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3 text-white font-bold">4</span>
            Data Fetching Approaches
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">App Router</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border-l-4 border-green-400">
                  <h4 className="font-semibold text-gray-800">Server Components</h4>
                  <code className="text-sm text-green-600 block mt-1">
                    {`async function Page() {
  const data = await fetch('/api/data');
  return <div>{data}</div>;
}`}
                  </code>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-green-400">
                  <h4 className="font-semibold text-gray-800">Built-in Features</h4>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Automatic request deduplication</li>
                    <li>• Built-in caching & revalidation</li>
                    <li>• Streaming & progressive loading</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-4">Pages Router</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border-l-4 border-red-400">
                  <h4 className="font-semibold text-gray-800">getServerSideProps</h4>
                  <code className="text-sm text-red-600 block mt-1">
                    {`export async function getServerSideProps() {
  const data = await fetch('/api/data');
  return { props: { data } };
}`}
                  </code>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-red-400">
                  <h4 className="font-semibold text-gray-800">getStaticProps</h4>
                  <code className="text-sm text-red-600 block mt-1">
                    {`export async function getStaticProps() {
  const data = await fetch('/api/data');
  return { props: { data } };
}`}
                  </code>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-red-400">
                  <h4 className="font-semibold text-gray-800">getStaticPaths</h4>
                  <p className="text-sm text-gray-600 mt-1">For dynamic routes with static generation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Migration Guide */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">🚀</span>
            Migration Guide
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Why Migrate to App Router?</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3 text-blue-600 text-xs">✓</span>
                  Better performance with Server Components
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3 text-blue-600 text-xs">✓</span>
                  Improved SEO and loading times
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3 text-blue-600 text-xs">✓</span>
                  Advanced routing features
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3 text-blue-600 text-xs">✓</span>
                  Better developer experience
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Migration Steps</h3>
              <ol className="space-y-2 list-decimal list-inside">
                <li>Create <code className="bg-white text-black bg-opacity-20 px-2 py-1 rounded">app/</code> directory</li>
                <li>Move pages to <code className="bg-white text-black bg-opacity-20 px-2 py-1 rounded">app/page.js</code> format</li>
                <li>Convert data fetching functions</li>
                <li>Add "use client" where needed</li>
                <li>Test and optimize</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation */}
        <div className="text-center mt-12">
          <Link
            href="/day-1"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="mr-2">←</span>
            Back to Day 1 Overview
          </Link>
        </div>
    </div>
  );
};

export default Routing;