import Link from "next/link";

const ServerDataFetching = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6 shadow-lg">
            <span className="text-4xl">🖥️</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Server Data Fetching
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master server-side data fetching in Next.js Server Components with caching, error handling, and performance optimization
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
              <span className="text-white font-bold text-xl">📚</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Server Components & Data Fetching</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Server Components in Next.js App Router run on the server, allowing you to fetch data directly
            without client-side JavaScript. This approach provides better performance, SEO, and user experience.
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-400">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Key Advantages:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <strong>Zero Client JavaScript:</strong> Data fetching happens on the server
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <strong>Automatic Caching:</strong> Built-in request memoization and caching
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <strong>Better SEO:</strong> Content is available during initial page load
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <strong>Reduced Bundle Size:</strong> No data fetching code sent to the client
              </li>
            </ul>
          </div>
        </div>

        {/* Basic Syntax */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">💻</span>
            Basic Server Data Fetching
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-4">Server Component Pattern</h3>
              <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
                <pre className="text-sm overflow-x-auto">
                  <code>{`// app/page.js
export default async function Page() {
  // ✅ Runs on server
  const data = await fetch('https://api.example.com/data');

  return (
    <div>
      <h1>Data: {data.title}</h1>
    </div>
  );
}`}</code>
                </pre>
              </div>
              <div className="space-y-3">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Key Points:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Use <code>async/await</code> in component function</li>
                    <li>• Fetch runs during server-side rendering</li>
                    <li>• No client-side JavaScript for data fetching</li>
                    <li>• Automatic error handling with error boundaries</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-4">Data Processing</h3>
              <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
                <pre className="text-sm overflow-x-auto">
                  <code>{`export default async function NewsPage() {
  const res = await fetch('https://api.example.com/news');
  const news = await res.json();

  // ✅ Process data on server
  const featuredNews = news.filter(item => item.featured);

  return (
    <div>
      {featuredNews.map(item => (
        <NewsCard key={item.id} news={item} />
      ))}
    </div>
  );
}`}</code>
                </pre>
              </div>
              <div className="space-y-3">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Data processing happens on server</li>
                    <li>• Only necessary data sent to client</li>
                    <li>• Better performance and security</li>
                    <li>• Reduced client bundle size</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Caching Strategies */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">⚡</span>
            Caching Strategies
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-400">
              <h3 className="text-xl font-semibold text-green-800 mb-3">force-cache (Default)</h3>
              <p className="text-gray-700 mb-4">Cache responses indefinitely. Best for static data that rarely changes.</p>
              <div className="bg-white p-3 rounded border">
                <code className="text-green-700 font-mono text-sm">cache: 'force-cache'</code>
              </div>
              <div className="mt-3 text-sm text-gray-600">
                <strong>Use for:</strong> Static content, reference data, configuration
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border-l-4 border-red-400">
              <h3 className="text-xl font-semibold text-red-800 mb-3">no-store</h3>
              <p className="text-gray-700 mb-4">Never cache responses. Always fetch fresh data on every request.</p>
              <div className="bg-white p-3 rounded border">
                <code className="text-red-700 font-mono text-sm">cache: 'no-store'</code>
              </div>
              <div className="mt-3 text-sm text-gray-600">
                <strong>Use for:</strong> Real-time data, user-specific content, dynamic data
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-400">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">revalidate</h3>
              <p className="text-gray-700 mb-4">Cache with time-based invalidation. Perfect for ISR (Incremental Static Regeneration).</p>
              <div className="bg-white p-3 rounded border">
                <code className="text-blue-700 font-mono text-sm">next: {`{ revalidate: 3600 }`}</code>
              </div>
              <div className="mt-3 text-sm text-gray-600">
                <strong>Use for:</strong> News, blog posts, product catalogs
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gray-900 text-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Cache Configuration Examples</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-green-400 mb-2">Static Data (force-cache)</h4>
                <pre className="text-sm">
                  <code>{`const data = await fetch(
  'https://api.example.com/static-data',
  { cache: 'force-cache' } // Default
);`}</code>
                </pre>
              </div>
              <div>
                <h4 className="text-red-400 mb-2">Dynamic Data (no-store)</h4>
                <pre className="text-sm">
                  <code>{`const data = await fetch(
  'https://api.example.com/user-data',
  { cache: 'no-store' }
);`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Error Handling */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">🚨</span>
            Error Handling & Fallbacks
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-red-700 mb-4">Try-Catch Pattern</h3>
              <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
                <pre className="text-sm overflow-x-auto">
                  <code>{`export default async function Page() {
  let data = null;
  let error = null;

  try {
    const res = await fetch('https://api.example.com/data');
    if (!res.ok) throw new Error('Failed to fetch');
    data = await res.json();
  } catch (err) {
    error = err.message;
  }

  if (error) {
    return <ErrorFallback message={error} />;
  }

  return <DataComponent data={data} />;
}`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-red-700 mb-4">Error Boundaries</h3>
              <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
                <pre className="text-sm overflow-x-auto">
                  <code>{`// app/error.js
'use client'

export default function Error({
  error,
  reset,
}) {
  return (
    <div className="error-boundary">
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>
        Try again
      </button>
    </div>
  );
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-400">
            <h3 className="text-lg font-semibold text-red-800 mb-3">Best Practices:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                Always handle fetch errors gracefully
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                Provide meaningful fallback UI
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                Use error boundaries for unexpected errors
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                Log errors for debugging and monitoring
              </li>
            </ul>
          </div>
        </div>

        {/* Advanced Patterns */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">🚀</span>
            Advanced Patterns
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-purple-700 mb-4">Parallel Data Fetching</h3>
              <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-4">
                <pre className="text-sm overflow-x-auto">
                  <code>{`export default async function Dashboard() {
  // ✅ Fetch multiple requests in parallel
  const [userRes, postsRes, statsRes] = await Promise.all([
    fetch('/api/user'),
    fetch('/api/posts'),
    fetch('/api/stats')
  ]);

  const [user, posts, stats] = await Promise.all([
    userRes.json(),
    postsRes.json(),
    statsRes.json()
  ]);

  return <Dashboard data={{ user, posts, stats }} />;
}`}</code>
                </pre>
              </div>
              <p className="text-gray-600 text-sm">Fetch multiple independent requests simultaneously for better performance.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-700 mb-4">Sequential Data Fetching</h3>
              <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-4">
                <pre className="text-sm overflow-x-auto">
                  <code>{`export default async function UserProfile({ id }) {
  // ✅ Fetch user first
  const userRes = await fetch(\`/api/users/\${id}\`);
  const user = await userRes.json();

  // ✅ Then fetch user-specific data
  const [postsRes, friendsRes] = await Promise.all([
    fetch(\`/api/users/\${user.id}/posts\`),
    fetch(\`/api/users/\${user.id}/friends\`)
  ]);

  const [posts, friends] = await Promise.all([
    postsRes.json(),
    friendsRes.json()
  ]);

  return <Profile user={user} posts={posts} friends={friends} />;
}`}</code>
                </pre>
              </div>
              <p className="text-gray-600 text-sm">Fetch dependent data sequentially when one request depends on another.</p>
            </div>
          </div>
        </div>

        {/* Request Memoization */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">🔄</span>
            Request Memoization
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-teal-700 mb-4">Automatic Deduplication</h3>
              <p className="text-gray-700 mb-6">
                Next.js automatically deduplicates identical requests within the same render pass.
                If multiple components fetch the same data, only one request is made.
              </p>
              <div className="bg-gray-900 text-gray-100 p-6 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>{`// ✅ Same request - only fetched once
const data1 = await fetch('/api/data');
const data2 = await fetch('/api/data');

// Both get the same cached result`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-teal-700 mb-4">Cross-Component Sharing</h3>
              <p className="text-gray-700 mb-6">
                Request memoization works across components in the same render tree,
                ensuring efficient data fetching even with complex component hierarchies.
              </p>
              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400">
                <h4 className="font-semibold text-teal-800 mb-3">Benefits:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                    Reduced network requests
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                    Better performance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                    Lower server load
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mr-4 text-blue-600 font-bold">💡</span>
            Best Practices & Performance Tips
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Data Fetching</h3>
              <div className="space-y-4">
                <div className="bg-white text-black bg-opacity-10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">🎯 Choose the Right Cache Strategy</h4>
                  <p className="text-sm">Use force-cache for static data, no-store for dynamic content, revalidate for time-sensitive data.</p>
                </div>
                <div className="bg-white text-black bg-opacity-10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">⚡ Parallelize Independent Requests</h4>
                  <p className="text-sm">Use Promise.all() for multiple independent API calls to improve performance.</p>
                </div>
                <div className="bg-white text-black bg-opacity-10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">🔒 Handle Errors Gracefully</h4>
                  <p className="text-sm">Always implement proper error handling and provide meaningful fallback UI.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Performance</h3>
              <div className="space-y-4">
                <div className="bg-white text-black bg-opacity-10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">📊 Minimize Data Transfer</h4>
                  <p className="text-sm">Only fetch and send the data you actually need to render the component.</p>
                </div>
                <div className="bg-white text-black bg-opacity-10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">🎨 Use Streaming</h4>
                  <p className="text-sm">Leverage React Server Components and streaming for better perceived performance.</p>
                </div>
                <div className="bg-white text-black bg-opacity-10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">📈 Monitor Performance</h4>
                  <p className="text-sm">Use Next.js analytics and performance monitoring to track data fetching efficiency.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white bg-opacity-10 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Migration from Client-Side Fetching</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Before (Client-Side)</h4>
                <pre className="text-sm bg-black bg-opacity-30 p-3 rounded">
                  <code>{`'use client'
import { useEffect, useState } from 'react'

export default function Component() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('/api/data').then(setData)
  }, [])
  // Loading states, error handling...
}`}</code>
                </pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">After (Server-Side)</h4>
                <pre className="text-sm bg-black bg-opacity-30 p-3 rounded">
                  <code>{`export default async function Component() {
  const data = await fetch('/api/data')
  // No loading states needed!
  // Automatic error boundaries
  return <div>{data}</div>
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center mt-12">
          <Link
            href="/day-2"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="mr-2">←</span>
            Back to Day 2 Overview
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServerDataFetching;