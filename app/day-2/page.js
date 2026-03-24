import Link from 'next/link'

const Day2 = () => {
  const topics = [
    {
      title: "Server Data Fetching",
      description: "Learn how to fetch data on the server side with Server Components",
      href: "day-2/server-data-fetching",
      icon: "🖥️",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      textColor: "text-blue-700"
    },
    {
      title: "Client Data Fetching",
      description: "Explore client-side data fetching with useEffect and SWR",
      href: "day-2/client-data-fetching",
      icon: "🌐",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      textColor: "text-green-700"
    },
    {
      title: "No Store Cache",
      description: "Understanding cache: 'no-store' for fresh data on every request",
      href: "day-2/no-store",
      icon: "🚫",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
      textColor: "text-red-700"
    },
    {
      title: "Force Cache",
      description: "Master cache: 'force-cache' for optimal performance",
      href: "day-2/force-cache",
      icon: "⚡",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
      textColor: "text-yellow-700"
    },
    {
      title: "Revalidate",
      description: "Implement ISR (Incremental Static Regeneration) with revalidate",
      href: "day-2/revalidate",
      icon: "🔄",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      textColor: "text-purple-700"
    },
    {
      title: "Suspense",
      description: "Handle loading states gracefully with React Suspense",
      href: "day-2/suspense",
      icon: "⏳",
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50",
      textColor: "text-teal-700"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <span className="text-4xl">📊</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Day 2: Data Fetching & Caching
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Master Next.js data fetching strategies, caching mechanisms, and rendering patterns.
            Learn SSR, SSG, ISR, and modern React data loading techniques.
          </p>
        </div>

        {/* Introduction Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mr-4">
              <span className="text-white font-bold text-xl">🎯</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Data Fetching Mastery</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Today we'll dive deep into Next.js data fetching capabilities. You'll learn how to optimize
            performance with different caching strategies, handle loading states, and choose the right
            rendering approach for your use cases.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-400">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Server-Side Rendering</h3>
              <p className="text-gray-700 text-sm">Fresh data on every request with optimal SEO</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-400">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Static Generation</h3>
              <p className="text-gray-700 text-sm">Pre-built pages for lightning-fast loading</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-400">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Incremental Regeneration</h3>
              <p className="text-gray-700 text-sm">Best of both worlds with smart caching</p>
            </div>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {topics.map((topic, index) => (
            <Link
              key={index}
              href={topic.href}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${topic.bgColor} p-6 border-b border-gray-200`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${topic.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl">{topic.icon}</span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <h3 className={`text-xl font-bold ${topic.textColor} mb-2`}>
                  {topic.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {topic.description}
                </p>
              </div>
              <div className={`bg-gradient-to-r ${topic.color} p-4 text-white text-center font-semibold hover:opacity-90 transition-opacity`}>
                Explore Topic →
              </div>
            </Link>
          ))}
        </div>

        {/* Key Concepts */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mr-4 text-indigo-600 font-bold">💡</span>
            Key Concepts You'll Master
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Rendering Strategies</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3 text-indigo-600 text-xs">✓</span>
                  <span className="text-white">Server-Side Rendering (SSR)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3 text-indigo-600 text-xs">✓</span>
                  <span className="text-white">Static Site Generation (SSG)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3 text-indigo-600 text-xs">✓</span>
                  <span className="text-white">Incremental Static Regeneration (ISR)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3 text-indigo-600 text-xs">✓</span>
                  <span className="text-white">Client-Side Rendering (CSR)</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Caching & Performance</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3 text-indigo-600 text-xs">✓</span>
                  <span className="text-white">Request Memoization</span>
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3 text-indigo-600 text-xs">✓</span>
                  <span className="text-white">Data Cache & Full Route Cache</span>
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3 text-indigo-600 text-xs">✓</span>
                  <span className="text-white">React Server Components</span>
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3 text-indigo-600 text-xs">✓</span>
                  <span className="text-white">Streaming & Suspense</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white bg-opacity-10 rounded-lg">
            <h3 className="text-xl text-black font-semibold mb-4">Why This Matters</h3>
            <p className="text-black text-lg leading-relaxed">
              Understanding data fetching and caching strategies is crucial for building high-performance
              Next.js applications. The right approach can reduce loading times by 10x and improve
              Core Web Vitals scores significantly.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center mt-12 space-x-4">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="mr-2">←</span>
            Home
          </Link>
          <Link
            href="/day-2/server-data-fetching"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start Learning
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Day2