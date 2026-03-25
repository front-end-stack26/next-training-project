import Image from "next/image";
import Link from "next/link";

const NestedLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mb-6">
            <span className="text-4xl">🏗️</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Nested Layouts & Special Files
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master Next.js App Router's layout system and special files for building scalable applications
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mr-4">
              <span className="text-white font-bold text-xl">📚</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Understanding Nested Layouts</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Next.js App Router introduces a powerful layout system that allows you to create nested, reusable UI structures.
            Layouts wrap child routes and provide shared components like navigation, sidebars, and footers.
          </p>
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl border-l-4 border-teal-400">
            <h3 className="text-lg font-semibold text-teal-800 mb-3">Key Benefits:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                <strong>Persistent UI:</strong> Layouts don't re-render during navigation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                <strong>Automatic Nesting:</strong> Child routes inherit parent layouts automatically
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                <strong>Performance Optimized:</strong> Shared components are cached and reused
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                <strong>Developer Experience:</strong> Clean separation of concerns
              </li>
            </ul>
          </div>
        </div>

        {/* Layout Structure Visualization */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">📁</span>
            Layout Hierarchy
          </h2>

          <div className="bg-gray-900 text-gray-100 p-8 rounded-xl mb-6">
            <pre className="text-sm overflow-x-auto">
              <code>{`app/
├── layout.js              # Root layout (required)
├── page.js                # Home page
├── dashboard/
│   ├── layout.js          # Dashboard layout
│   ├── page.js            # Dashboard home
│   └── settings/
│       ├── layout.js      # Settings layout (optional)
│       ├── page.js        # Settings page
│       └── profile/
│           └── page.js    # Profile page
└── blog/
    ├── layout.js          # Blog layout
    └── [slug]/
        └── page.js        # Dynamic blog post`}</code>
            </pre>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-indigo-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-indigo-800 mb-3">Root Layout</h3>
              <p className="text-gray-700 mb-4">Required at app root level. Wraps the entire application.</p>
              <div className="bg-white p-3 rounded border">
                <code className="text-indigo-700 font-mono text-sm">app/layout.js</code>
              </div>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-indigo-800 mb-3">Nested Layouts</h3>
              <p className="text-gray-700 mb-4">Optional layouts in subdirectories for section-specific UI.</p>
              <div className="bg-white p-3 rounded border">
                <code className="text-indigo-700 font-mono text-sm">app/dashboard/layout.js</code>
              </div>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-indigo-800 mb-3">Page Components</h3>
              <p className="text-gray-700 mb-4">Individual route components that render page content.</p>
              <div className="bg-white p-3 rounded border">
                <code className="text-indigo-700 font-mono text-sm">app/page.js</code>
              </div>
            </div>
          </div>
        </div>

        {/* Special Files */}
        <div className="space-y-8 mb-8">
          {/* layout.js */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">🏠</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">layout.js - Layout Components</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-4">Core Features</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Persistent UI</h4>
                      <p className="text-gray-600 text-sm">Doesn't re-render during navigation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Shared State</h4>
                      <p className="text-gray-600 text-sm">Maintain state across route changes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Automatic Nesting</h4>
                      <p className="text-gray-600 text-sm">Child routes inherit parent layouts</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-4">Example Code</h3>
                <div className="bg-gray-900 text-gray-100 p-6 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`export default function DashboardLayout({
  children,
}) {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* loading.js */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">⏳</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">loading.js - Loading States</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-4">When It Shows</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">⚡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Data Fetching</h4>
                      <p className="text-gray-600 text-sm">While async operations complete</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">⚡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Server Streaming</h4>
                      <p className="text-gray-600 text-sm">During progressive content loading</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">⚡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Route Transitions</h4>
                      <p className="text-gray-600 text-sm">Between navigation changes</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Loading Component</h3>
                <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
  );
}`}</code>
                  </pre>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Tip:</strong> Loading components are automatically shown and hidden by Next.js
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* error.js */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">❌</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">error.js - Error Boundaries</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-700 mb-4">Error Handling</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">⚠️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Runtime Errors</h4>
                      <p className="text-gray-600 text-sm">Catches errors in Server/Client components</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">⚠️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Nested Scoping</h4>
                      <p className="text-gray-600 text-sm">Errors bubble up to nearest error boundary</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">⚠️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Client Component</h4>
                      <p className="text-gray-600 text-sm">Must use "use client" directive</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-red-700 mb-4">Error Component</h3>
                <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`'use client'

export default function Error({
  error,
  reset,
}) {
  return (
    <div className="error-boundary">
      <h2>Something went wrong!</h2>
      <button onClick={reset}>
        Try again
      </button>
    </div>
  );
}`}</code>
                  </pre>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-red-800 text-sm">
                    <strong>Note:</strong> Does not catch build-time errors or errors in root layout
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* not-found.js */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">🔍</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">not-found.js - 404 Pages</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-orange-700 mb-4">404 Handling</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">📄</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Global 404</h4>
                      <p className="text-gray-600 text-sm">app/not-found.js catches all unmatched routes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">📄</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Scoped 404</h4>
                      <p className="text-gray-600 text-sm">app/blog/not-found.js for specific sections</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">📄</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Automatic Trigger</h4>
                      <p className="text-gray-600 text-sm">Thrown by notFound() function</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-orange-700 mb-4">Not Found Component</h3>
                <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link href="/">Go Home</Link>
    </div>
  );
}`}</code>
                  </pre>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-orange-800 text-sm">
                    <strong>Pro Tip:</strong> Use notFound() from 'next/navigation' to trigger 404 programmatically
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* template.js */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">🎨</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">template.js - Re-rendering Layouts</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-purple-700 mb-4">vs layout.js</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">🔄</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Re-renders</h4>
                      <p className="text-gray-600 text-sm">Creates new instance on navigation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">🔄</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Animations</h4>
                      <p className="text-gray-600 text-sm">Perfect for page transitions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">🔄</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Fresh State</h4>
                      <p className="text-gray-600 text-sm">State resets between navigations</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-700 mb-4">Template Component</h3>
                <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`export default function Template({
  children,
}) {
  return (
    <div className="page-transition">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        {children}
      </motion.div>
    </div>
  );
}`}</code>
                  </pre>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-800 text-sm">
                    <strong>Use Case:</strong> Page transitions, modals, unique animations per route
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">💡</span>
            Best Practices & Patterns
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-emerald-700 mb-4">Layout Organization</h3>
              <div className="space-y-4">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-emerald-800 mb-2">🎯 Root Layout</h4>
                  <p className="text-gray-700 text-sm">Keep minimal - HTML structure, global providers, fonts</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-emerald-800 mb-2">📱 Feature Layouts</h4>
                  <p className="text-gray-700 text-sm">Use nested layouts for sections like dashboard, blog, admin</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-emerald-800 mb-2">🔧 Shared Components</h4>
                  <p className="text-gray-700 text-sm">Navigation, sidebars, footers belong in layouts</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-emerald-700 mb-4">Error Handling</h3>
              <div className="space-y-4">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-emerald-800 mb-2">🎯 Granular Boundaries</h4>
                  <p className="text-gray-700 text-sm">Add error.js at feature level for better UX</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-emerald-800 mb-2">🔄 Reset Functionality</h4>
                  <p className="text-gray-700 text-sm">Always provide reset button in error components</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-emerald-800 mb-2">📊 Error Logging</h4>
                  <p className="text-gray-700 text-sm">Log errors for monitoring and debugging</p>
                </div>
              </div>
            </div>
          </div>
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
    </div>
  );
};

export default NestedLayout;