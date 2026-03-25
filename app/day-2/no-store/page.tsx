import Link from 'next/link'

const NoStorePage = async () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-fuchsia-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-fuchsia-500 to-indigo-600 rounded-full mb-6 shadow-lg">
            <span className="text-4xl">🚫</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent mb-4">
            `no-store` Cache Strategy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn how to use the `no-store` cache for always-fresh data in Next.js server data fetching.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What is `cache: 'no-store'`?</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            In Next.js Server Components, setting `cache: 'no-store'` ensures that the response is never cached and is fetched from the source on every request.
            This is ideal for content that changes frequently or is user-specific.
          </p>

          <div className="bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-400 mt-6">
            <h3 className="text-xl font-semibold text-indigo-800 mb-3">Key Effects:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Every request hits the source API directly</li>
              <li>No stale content, always up-to-date</li>
              <li>Disabled static cache optimization for this route</li>
              <li>Useful for user-specific and frequently updated data</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Code Example</h2>

          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code>{`export default async function Page() {
  const res = await fetch('https://api.example.com/news', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch news')
  }

  const data = await res.json()

  return (
    <div>
      {data.map((item) => (
        <article key={item.id}>{item.title}</article>
      ))}
    </div>
  )
}`}</code>
            </pre>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Use cases</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Real-time dashboards</li>
                <li>User-specific profile data</li>
                <li>Latest news and stock tickers</li>
                <li>Live sports scores</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h3 className="text-lg font-semibold text-red-700 mb-2">Trade-offs</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Higher API request volume</li>
                <li>Potentially slower response times than cached routes</li>
                <li>Need robust backend rate limiting and monitoring</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Practical Patterns</h2>

          <div className="space-y-6">
            <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-400">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">Error handling</h3>
              <pre className="text-sm bg-gray-900 text-gray-100 p-3 rounded">
                <code>{`try {
  const res = await fetch('/api/news', { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch')
  const data = await res.json()
} catch (error) {
  // Show fallback UI
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-fuchsia-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Best Practices</h2>
          <ul className="list-disc list-inside space-y-3 text-white">
            <li>Use `no-store` for frequently changing data and user-specific endpoints.</li>
            <li>Monitor and control API usage to prevent overload.</li>
            <li>Combine with `revalidate` for hybrid routes where appropriate.</li>
            <li>Prefer relative URLs (`/api/...`) for better portability.</li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/day-2"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            ← Back to Day 2 Overview
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NoStorePage