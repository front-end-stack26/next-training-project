"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Home = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [demoCount, setDemoCount] = useState(0);

  // Navigation methods
  const handlePush = () => router.push("/day-1/useRouter/about");
  const handleReplace = () => router.replace("/day-1/useRouter/about");
  const handleBack = () => router.back();
  const handleForward = () => router.forward();
  const handleRefresh = () => router.refresh();

  // Advanced navigation examples
  const handlePushWithQuery = () => {
    const params = new URLSearchParams(searchParams);
    params.set('demo', 'true');
    params.set('count', (demoCount + 1).toString());
    router.push(`${pathname}?${params.toString()}`);
    setDemoCount(prev => prev + 1);
  };

  const handlePushWithState = () => {
    router.push("/day-1/useRouter/about?tab=settings&user=john");
  };

  const handleReplaceWithQuery = () => {
    const params = new URLSearchParams(searchParams);
    params.set('replaced', 'true');
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mb-6">
            <span className="text-4xl">🧭</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            useRouter Hook
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master programmatic navigation in Next.js App Router with the useRouter hook
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mr-4">
              <span className="text-white font-bold text-xl">🎯</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">What is useRouter?</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The <code className="bg-teal-100 px-3 py-1 rounded-lg text-teal-700 font-mono">useRouter</code> hook provides programmatic navigation
            capabilities in Next.js App Router. It can only be used in <strong>Client Components</strong> and offers
            methods to navigate between routes, manage browser history, and handle query parameters.
          </p>
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl border-l-4 border-teal-400">
            <h3 className="text-lg font-semibold text-teal-800 mb-3">Key Characteristics:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                <strong>Client-side only:</strong> Requires "use client" directive
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                <strong>Programmatic navigation:</strong> Navigate based on user actions or logic
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                <strong>History management:</strong> Control browser back/forward navigation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                <strong>Query parameters:</strong> Handle URL search parameters
              </li>
            </ul>
          </div>
        </div>

        {/* Current Route Info */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">📍</span>
            Current Route Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Route Details</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-sm text-gray-600">Pathname:</div>
                  <code className="text-blue-600 font-mono">{pathname}</code>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-sm text-gray-600">Search Params:</div>
                  <code className="text-green-600 font-mono">{searchParams.toString() || 'None'}</code>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-sm text-gray-600">Demo Counter:</div>
                  <code className="text-purple-600 font-mono">{demoCount}</code>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Available Hooks</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
                  <code className="text-blue-700 font-mono font-semibold">useRouter()</code>
                  <p className="text-sm text-gray-600 mt-1">Navigation methods</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                  <code className="text-green-700 font-mono font-semibold">usePathname()</code>
                  <p className="text-sm text-gray-600 mt-1">Current pathname</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-400">
                  <code className="text-purple-700 font-mono font-semibold">useSearchParams()</code>
                  <p className="text-sm text-gray-600 mt-1">URL search parameters</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Methods */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">🚀</span>
            Navigation Methods
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* push() */}
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl">➡️</span>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">push()</h3>
              <p className="text-gray-700 mb-4">Navigate to a new route and add it to history stack.</p>
              <div className="bg-white p-4 rounded-lg mb-4">
                <code className="text-green-700 font-mono text-sm">
                  router.push('/about')
                </code>
              </div>
              <button
                onClick={handlePush}
                className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                Try push()
              </button>
            </div>

            {/* replace() */}
            <div className="bg-orange-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-3">replace()</h3>
              <p className="text-gray-700 mb-4">Replace current route without adding to history.</p>
              <div className="bg-white p-4 rounded-lg mb-4">
                <code className="text-orange-700 font-mono text-sm">
                  router.replace('/about')
                </code>
              </div>
              <button
                onClick={handleReplace}
                className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                Try replace()
              </button>
            </div>

            {/* back() */}
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl">⬅️</span>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">back()</h3>
              <p className="text-gray-700 mb-4">Navigate to the previous page in history.</p>
              <div className="bg-white p-4 rounded-lg mb-4">
                <code className="text-blue-700 font-mono text-sm">
                  router.back()
                </code>
              </div>
              <button
                onClick={handleBack}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Try back()
              </button>
            </div>

            {/* forward() */}
            <div className="bg-purple-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl">➡️</span>
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">forward()</h3>
              <p className="text-gray-700 mb-4">Navigate to the next page in history.</p>
              <div className="bg-white p-4 rounded-lg mb-4">
                <code className="text-purple-700 font-mono text-sm">
                  router.forward()
                </code>
              </div>
              <button
                onClick={handleForward}
                className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              >
                Try forward()
              </button>
            </div>

            {/* refresh() */}
            <div className="bg-red-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold text-red-800 mb-3">refresh()</h3>
              <p className="text-gray-700 mb-4">Refresh the current page and re-run server components.</p>
              <div className="bg-white p-4 rounded-lg mb-4">
                <code className="text-red-700 font-mono text-sm">
                  router.refresh()
                </code>
              </div>
              <button
                onClick={handleRefresh}
                className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Try refresh()
              </button>
            </div>

            {/* prefetch() */}
            <div className="bg-indigo-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-indigo-800 mb-3">prefetch()</h3>
              <p className="text-gray-700 mb-4">Preload a route for faster navigation.</p>
              <div className="bg-white p-4 rounded-lg mb-4">
                <code className="text-indigo-700 font-mono text-sm">
                  router.prefetch('/about')
                </code>
              </div>
              <button
                onClick={() => router.prefetch('/day-1/useRouter/about')}
                className="w-full px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
              >
                Prefetch About
              </button>
            </div>
          </div>
        </div>

        {/* Advanced Examples */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-10 h-10 bg-pink-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">🔧</span>
            Advanced Navigation Examples
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-pink-700">Query Parameters</h3>
              <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`// Add query parameters
const handleNavigate = () => {
  router.push('/search?q=react&page=1');
};

// Update existing parameters
const updateQuery = () => {
  const params = new URLSearchParams(searchParams);
  params.set('filter', 'active');
  router.push(\`\${pathname}?\${params}\`);
};`}</code>
                </pre>
              </div>
              <div className="space-y-2">
                <button
                  onClick={handlePushWithQuery}
                  className="w-full px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                >
                  Add Query Params (Demo: {demoCount})
                </button>
                <button
                  onClick={handleReplaceWithQuery}
                  className="w-full px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                >
                  Replace with Query Params
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-pink-700">Complex Navigation</h3>
              <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`// Navigate with multiple params
const handleComplexNav = () => {
  router.push(
    '/dashboard?tab=settings&user=john&view=profile'
  );
};

// Conditional navigation
const handleConditionalNav = (user) => {
  if (user.isAdmin) {
    router.push('/admin/dashboard');
  } else {
    router.push('/user/profile');
  }
};`}</code>
                </pre>
              </div>
              <button
                onClick={handlePushWithState}
                className="w-full px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
              >
                Complex Navigation Example
              </button>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">💡</span>
            Common Use Cases
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔐</span>
              </div>
              <h4 className="font-bold text-yellow-800 mb-2">Authentication</h4>
              <p className="text-sm text-gray-600">Redirect after login/logout</p>
            </div>

            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛒</span>
              </div>
              <h4 className="font-bold text-yellow-800 mb-2">E-commerce</h4>
              <p className="text-sm text-gray-600">Navigate to product pages</p>
            </div>

            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📝</span>
              </div>
              <h4 className="font-bold text-yellow-800 mb-2">Forms</h4>
              <p className="text-sm text-gray-600">Redirect after form submission</p>
            </div>

            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔍</span>
              </div>
              <h4 className="font-bold text-yellow-800 mb-2">Search</h4>
              <p className="text-sm text-gray-600">Navigate with search parameters</p>
            </div>

            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚙️</span>
              </div>
              <h4 className="font-bold text-yellow-800 mb-2">Settings</h4>
              <p className="text-sm text-gray-600">Navigate between settings tabs</p>
            </div>

            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h4 className="font-bold text-yellow-800 mb-2">Dashboard</h4>
              <p className="text-sm text-gray-600">Navigate between dashboard views</p>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mr-4 text-teal-600 font-bold">✅</span>
            Best Practices
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Navigation Patterns</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 text-teal-600 text-sm font-bold mt-0.5">✓</span>
                  <div>
                    <strong>Use push() for user-initiated navigation</strong>
                    <p className="text-teal-100 text-sm">Allows users to use browser back button</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 text-teal-600 text-sm font-bold mt-0.5">✓</span>
                  <div>
                    <strong>Use replace() for redirects</strong>
                    <p className="text-teal-100 text-sm">Prevents cluttering browser history</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 text-teal-600 text-sm font-bold mt-0.5">✓</span>
                  <div>
                    <strong>Prefetch important routes</strong>
                    <p className="text-teal-100 text-sm">Improves perceived performance</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Code Organization</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 text-teal-600 text-sm font-bold mt-0.5">✓</span>
                  <div>
                    <strong>Handle loading and error states</strong>
                    <p className="text-teal-100 text-sm">Provide feedback during navigation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 text-teal-600 text-sm font-bold mt-0.5">✓</span>
                  <div>
                    <strong>Validate navigation targets</strong>
                    <p className="text-teal-100 text-sm">Ensure routes exist before navigating</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 text-teal-600 text-sm font-bold mt-0.5">✓</span>
                  <div>
                    <strong>Use TypeScript for type safety</strong>
                    <p className="text-teal-100 text-sm">Better developer experience and fewer bugs</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Visual Reference */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-10 h-10 bg-gray-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">📖</span>
            Visual Reference
          </h2>

          <div className="flex justify-center">
            <Image
              src="/images/useRouter.png"
              alt="useRouter Hook Visual Guide"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center">
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

export default Home;