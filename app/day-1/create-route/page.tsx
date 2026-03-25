import Link from 'next/link'

const Basicroute = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6">
            <span className="text-3xl">🛣️</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Creating Routes in Next.js
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the App Router's folder-based routing system and learn to create static, dynamic, and nested routes
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mr-4">
              <span className="text-white font-bold text-xl">📁</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">App Router Fundamentals</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The App Router uses a <strong>folder-based routing system</strong> inside the <code className="bg-indigo-100 px-3 py-1 rounded-lg text-indigo-700 font-mono">app/</code> directory.
            Each folder automatically becomes a route, and each route must contain a <code className="bg-indigo-100 px-3 py-1 rounded-lg text-indigo-700 font-mono">page.js</code> file.
          </p>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border-l-4 border-indigo-400">
            <h3 className="text-lg font-semibold text-indigo-800 mb-3">Key Principles:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                <strong>File-based routing:</strong> File structure determines URL paths
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                <strong>page.js required:</strong> Each route needs a page component
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                <strong>Nested routes:</strong> Subfolders create nested paths
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                <strong>Colocation:</strong> Related files can be placed together
              </li>
            </ul>
          </div>
        </div>

        {/* Basic Route Examples */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">1</span>
            Basic Route Structure
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">📂 Folder Structure</h3>
              <div className="bg-gray-50 p-6 rounded-xl font-mono text-sm">
                <div className="space-y-2">
                  <div className="text-gray-600">app/</div>
                  <div className="ml-4 text-blue-600">├── page.js</div>
                  <div className="ml-4 text-blue-600">├── about/</div>
                  <div className="ml-8 text-blue-600">│   └── page.js</div>
                  <div className="ml-4 text-blue-600">├── blog/</div>
                  <div className="ml-8 text-blue-600">│   ├── page.js</div>
                  <div className="ml-8 text-blue-600">│   └── [id]/</div>
                  <div className="ml-12 text-blue-600">│       └── page.js</div>
                  <div className="ml-4 text-blue-600">└── contact/</div>
                  <div className="ml-8 text-blue-600">    └── page.js</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">🔗 Generated URLs</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border-2 border-green-200 shadow-sm">
                  <div className="flex items-center justify-between">
                    <code className="text-green-700 font-mono">app/page.js</code>
                    <span className="text-green-600 font-bold text-lg">→</span>
                    <span className="text-green-800 font-semibold">/</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-green-200 shadow-sm">
                  <div className="flex items-center justify-between">
                    <code className="text-green-700 font-mono">app/about/page.js</code>
                    <span className="text-green-600 font-bold text-lg">→</span>
                    <span className="text-green-800 font-semibold">/about</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-green-200 shadow-sm">
                  <div className="flex items-center justify-between">
                    <code className="text-green-700 font-mono">app/blog/page.js</code>
                    <span className="text-green-600 font-bold text-lg">→</span>
                    <span className="text-green-800 font-semibold">/blog</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-green-200 shadow-sm">
                  <div className="flex items-center justify-between">
                    <code className="text-green-700 font-mono">app/blog/[id]/page.js</code>
                    <span className="text-green-600 font-bold text-lg">→</span>
                    <span className="text-green-800 font-semibold">/blog/:id</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Route Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Static Routes */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-2xl">📄</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Static Routes</h3>
            <p className="text-gray-600 mb-4">Fixed paths that don't change based on data.</p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <code className="text-blue-700 font-mono text-sm">
                {`app/
├── page.js          → /
├── about/
│   └── page.js      → /about
└── contact/
    └── page.js      → /contact`}
              </code>
            </div>
          </div>

          {/* Dynamic Routes */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-2xl">🔄</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Dynamic Routes</h3>
            <p className="text-gray-600 mb-4">Paths with dynamic segments using square brackets.</p>
            <div className="bg-purple-50 p-4 rounded-lg">
              <code className="text-purple-700 font-mono text-sm">
                {`app/blog/[id]/
└── page.js          → /blog/123

app/users/[slug]/
└── page.js          → /users/john-doe`}
              </code>
            </div>
          </div>

          {/* Catch-All Routes */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Catch-All Routes</h3>
            <p className="text-gray-600 mb-4">Match multiple path segments with triple dots.</p>
            <div className="bg-orange-50 p-4 rounded-lg">
              <code className="text-orange-700 font-mono text-sm">
                {`app/docs/[...slug]/
└── page.js          → /docs/a/b/c

app/shop/[...categories]/
└── page.js          → /shop/electronics/laptops`}
              </code>
            </div>
          </div>
        </div>

        {/* Advanced Features */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-10 h-10 bg-pink-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">2</span>
            Advanced Route Features
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Route Groups */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-pink-700 mb-4">📂 Route Groups</h3>
              <p className="text-gray-700 mb-4">
                Organize routes without affecting URL structure using parentheses.
              </p>
              <div className="bg-pink-50 p-4 rounded-lg">
                <code className="text-pink-700 font-mono text-sm">
                  {`app/
├── (auth)/
│   ├── login/
│   │   └── page.js      → /login
│   └── register/
│       └── page.js      → /register
└── (dashboard)/
    ├── analytics/
    │   └── page.js      → /analytics
    └── settings/
        └── page.js      → /settings`}
                </code>
              </div>
            </div>

            {/* Parallel Routes */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-pink-700 mb-4">⚡ Parallel Routes</h3>
              <p className="text-gray-700 mb-4">
                Render multiple pages simultaneously using named slots.
              </p>
              <div className="bg-pink-50 p-4 rounded-lg">
                <code className="text-pink-700 font-mono text-sm">
                  {`app/dashboard/
├── layout.js
├── page.js
├── @sidebar/
│   └── page.js
└── @content/
    └── page.js`}
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Special Files */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">3</span>
            Special Route Files
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-teal-50 rounded-xl">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📄</span>
              </div>
              <h4 className="font-bold text-teal-800 mb-2">page.js</h4>
              <p className="text-sm text-gray-600">Main page component for the route</p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h4 className="font-bold text-blue-800 mb-2">layout.js</h4>
              <p className="text-sm text-gray-600">Shared UI wrapper for nested routes</p>
            </div>

            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⏳</span>
              </div>
              <h4 className="font-bold text-yellow-800 mb-2">loading.js</h4>
              <p className="text-sm text-gray-600">Loading UI while page is being fetched</p>
            </div>

            <div className="text-center p-6 bg-red-50 rounded-xl">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">❌</span>
              </div>
              <h4 className="font-bold text-red-800 mb-2">error.js</h4>
              <p className="text-sm text-gray-600">Error boundary for runtime errors</p>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">4</span>
            Code Examples
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Static Route */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-indigo-700">Static Route Example</h3>
              <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`// app/about/page.js
export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our company!</p>
    </div>
  );
}

// URL: /about`}</code>
                </pre>
              </div>
            </div>

            {/* Dynamic Route */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-indigo-700">Dynamic Route Example</h3>
              <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`// app/blog/[id]/page.js
export default function BlogPost({ params }) {
  return (
    <div>
      <h1>Blog Post {params.id}</h1>
      <p>Content for post {params.id}</p>
    </div>
  );
}

// URL: /blog/123`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mr-4 text-green-600 font-bold">💡</span>
            Best Practices
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Route Organization</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 text-green-600 text-sm font-bold mt-0.5">✓</span>
                  <div>
                    <strong>Use descriptive folder names</strong>
                    <p className="text-green-100 text-sm">Clear, semantic names for better developer experience</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 text-green-600 text-sm font-bold mt-0.5">✓</span>
                  <div>
                    <strong>Group related routes</strong>
                    <p className="text-green-100 text-sm">Use route groups for logical organization</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 text-green-600 text-sm font-bold mt-0.5">✓</span>
                  <div>
                    <strong>Keep routes shallow</strong>
                    <p className="text-green-100 text-sm">Avoid deeply nested folder structures</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Performance Tips</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 text-green-600 text-sm font-bold mt-0.5">✓</span>
                  <div>
                    <strong>Use layouts effectively</strong>
                    <p className="text-green-100 text-sm">Share UI between routes to reduce bundle size</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 text-green-600 text-sm font-bold mt-0.5">✓</span>
                  <div>
                    <strong>Leverage loading states</strong>
                    <p className="text-green-100 text-sm">Provide immediate feedback during navigation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 text-green-600 text-sm font-bold mt-0.5">✓</span>
                  <div>
                    <strong>Optimize dynamic routes</strong>
                    <p className="text-green-100 text-sm">Use static generation when possible</p>
                  </div>
                </li>
              </ul>
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
    </div>
  );
};

export default Basicroute;

export const generateMetadata = () => {
  return {
    title: "Creating Routes - Next.js App Router",
    description: "Learn how to create static, dynamic, and nested routes in Next.js App Router"
  };
};