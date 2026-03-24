import Link from 'next/link'

const RevalidatePage = async () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <span className="text-4xl">⏱️</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            ISR with `revalidate`
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn how to set incremental static regeneration with {`next: { revalidate }`} in Next.js.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What is `revalidate`?</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            `revalidate` controls how often a static page is re-generated after being built. It enables Incremental Static Regeneration (ISR), where stale content is refreshed in the background.
          </p>
          <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400 mt-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Benefits</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Fast static performance with periodic updates</li>
              <li>Reduces backend load compared to fully dynamic pages</li>
              <li>Allows content to stay up-to-date on a schedule</li>
              <li>Fallback content can be used during revalidation</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Revalidate Example</h2>
          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code>{`export default async function Page() {
  const res = await fetch('https://api.example.com/news', {
    next: { revalidate: 60 },
  })

  if (!res.ok) throw new Error('Failed to fetch news')

  const data = await res.json()

  return (
    <div>
      {data.map(item => (
        <article key={item.id}>{item.title}</article>
      ))}
    </div>
  )
}`}</code>
            </pre>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-green-700 mb-2">Interval semantics</h3>
              <p className="text-gray-700 text-sm">
                A value of <code>60</code> means the page is regenerated at most once every 60 seconds.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">Fallback modes</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><code>{`true`}</code> / <code>{`blocking`}</code> for incremental route behavior.</li>
                <li><code>{`false`}</code> to return 404 for non-prebuilt pages.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Best Practices</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Use `revalidate` for moderately dynamic content like blog posts and product listings.</li>
            <li>Combine with `cache: 'no-store'` for critical real-time data that should not be cached.</li>
            <li>Set an appropriate interval (e.g., 60–300 seconds) based on data volatility.</li>
            <li>Monitor data freshness and user experience closely.</li>
            <li>Use webhook-based rebuilds for event-driven updates if needed.</li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/day-2"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            ← Back to Day 2 Overview
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RevalidatePage