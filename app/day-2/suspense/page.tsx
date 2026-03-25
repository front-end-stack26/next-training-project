import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mb-6 shadow-lg">
            <span className="text-4xl">⏳</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            React Suspense for Data Fetching
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use Suspense in Next.js to show fallback UI while server-side data is loading, and simplify UX for async content.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What is Suspense?</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Suspense lets React wait for asynchronous operations (like data fetches) before rendering UI. In Next.js, this is powerful for server data fetching and progressive loading.
          </p>
          <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400 mt-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Key points</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Fallback UI displays while resolving pending promises</li>
              <li>Works with both server and client components</li>
              <li>Improves perceived performance with smooth loading states</li>
              <li>Can be combined with `loading.js` and `error.js` for resilient UX</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Suspense Example</h2>

          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
            <pre className="text-sm overflow-x-auto">
              <code>{`import { Suspense } from 'react'

export default function Page() {
  return (
    <div>
      <h1>Latest News</h1>
      <Suspense fallback={<p>Loading fresh data...</p>}>
        <FreshData />
      </Suspense>
    </div>
  )
}

async function FreshData() {
  const res = await fetch('/api/news', { cache: 'no-store' })
  const data = await res.json()

  return (
    <div>{data.map(item => <span key={item.id}>{item.title}</span>)}</div>
  )
}`}</code>
            </pre>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-green-700 mb-2">Best For</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>API-driven live content</li>
                <li>Dashboard widgets</li>
                <li>Progressive page load states</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h3 className="text-lg font-semibold text-red-700 mb-2">Watchouts</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Fallbacks must be meaningful</li>
                <li>Combine with error boundaries</li>
                <li>Not for immediate, instant UI updates</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Integrating with Next.js App Router</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>Use `loading.js` to provide global skeleton/placeholder while page data loads.</li>
            <li>Use `error.js` in tandem for robust error handling.</li>
            <li>Prefer `cache: 'no-store'` for dynamic or user-specific data in Suspense-wrapped requests.</li>
            <li>Use React 18 concurrent patterns for smoother transitions.</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-cyan-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Performance & UX Tips</h2>
          <ul className="space-y-3">
            <li>Reduce flash-of-unstyled content with consistent fallback design.</li>
            <li>Use asynchronous routes in App Router for streamed content.</li>
            <li>Cache predictable data and use `no-store` only when truly dynamic.</li>
            <li>Track web vitals to ensure Suspense states are not causing jank.</li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/day-2"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            ← Back to Day 2 Overview
          </Link>
        </div>
      </div>
    </div>
  )
}