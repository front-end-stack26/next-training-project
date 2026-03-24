import Link from 'next/link'

const ForceCachePage = async () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-cyan-50 to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-teal-600 rounded-full mb-6 shadow-lg">
            <span className="text-4xl">🧊</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-4">
            `force-cache` Strategy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn how to use `force-cache` in Next.js server data fetching to maximize performance with stable content.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What is `cache: 'force-cache'`?</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            `force-cache` caches responses forever (until invalidated). It is ideal for content that changes rarely and can safely be served from cache.
            This is the default caching mode in Next.js Server Components.
          </p>

          <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400 mt-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">Key Characteristics</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Response is cached and reused for subsequent requests</li>
              <li>Minimal load on backend APIs</li>
              <li>Excellent for static or rarely-changing data</li>
              <li>Not recommended for highly dynamic content</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Example Code</h2>

          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code>{`export default async function Page() {
  const res = await fetch('https://api.example.com/news', {
    cache: 'force-cache',
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
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Best use cases</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Marketing pages</li>
                <li>Documentation content</li>
                <li>Product specs & constants</li>
                <li>Feature pages</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h3 className="text-lg font-semibold text-red-700 mb-2">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Cache might become stale if data changes unexpectedly</li>
                <li>Needs manual invalidation or rebuild in CI/CD</li>
                <li>Not suited for session-based or real-time data</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-500 to-blue-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Force-cache Best Practices</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>Serve mostly static content with this strategy.</li>
            <li>Use incremental rebuilds or versions for content updates.</li>
            <li>Leverage static generation when data doesn’t change often.</li>
            <li>Validate with fallback and error handling for stale APIs.</li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/day-2"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            ← Back to Day 2 Overview
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ForceCachePage