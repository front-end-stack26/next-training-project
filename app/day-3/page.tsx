import Link from "next/link"

const Day3 = () => {
  const topics = [
    {
      title: "Intro to Server Actions",
      description: "Understand what Server Actions are and when to use them.",
      href: "day-3/intro",
      icon: "⚙️",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
      textColor: "text-blue-700",
    },
    {
      title: "Mutating Data with Server Actions",
      description: "Learn how Server Actions securely update your database.",
      href: "day-3/mutations",
      icon: "🛠️",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      textColor: "text-green-700",
    },
    {
      title: "Revalidate After Actions",
      description: "Trigger cache invalidation using revalidateTag & revalidatePath.",
      href: "day-3/revalidate",
      icon: "🔄",
      color: "from-purple-500 to-fuchsia-500",
      bgColor: "from-purple-50 to-fuchsia-50",
      textColor: "text-purple-700",
    },
    {
      title: "Form Actions",
      description: "Build forms powered by Server Actions with built‑in security.",
      href: "day-3/forms",
      icon: "📨",
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-50 to-amber-50",
      textColor: "text-orange-700",
    },
    {
      title: "Action State Handling",
      description: "Use React's useActionState to manage form states.",
      href: "day-3/action-state",
      icon: "📊",
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50",
      textColor: "text-teal-700",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mb-6 shadow-lg">
            <span className="text-4xl">🧩</span>
          </div>

          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Day 3: Server Actions
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn how to mutate data securely using Server Actions, invalidate caches,
            build dynamic forms, and leverage React’s new action patterns in Next.js.
          </p>
        </div>

        {/* Intro Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
              <span className="text-white font-bold text-xl">⚡</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              Master Server Actions
            </h2>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Server Actions are one of the most powerful features in the Next.js App Router.
            They allow you to run server‑side logic directly from your React components  
            — securely, without exposing APIs or client‑side mutations.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border-l-4 border-indigo-400">
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">Secure Mutations</h3>
              <p className="text-gray-700 text-sm">Actions run only on the server, never shipped to the client.</p>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border-l-4 border-emerald-400">
              <h3 className="text-lg font-semibold text-emerald-800 mb-2">Deep Cache Integration</h3>
              <p className="text-gray-700 text-sm">
                Revalidate tags & routes right after performing mutations.
              </p>
            </div>
          </div>
        </div>

        {/* Topic Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {topics.map((topic, i) => (
            <Link href={topic.href} key= {i}>
              <div className={`bg-gradient-to-r ${topic.bgColor} p-6 border-b border-gray-200`}>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${topic.color} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-2xl">{topic.icon}</span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <h3 className={`text-xl font-bold ${topic.textColor} mb-2`}>{topic.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{topic.description}</p>
              </div>

              <div className={`bg-gradient-to-r ${topic.color} p-4 text-white text-center font-semibold`}>
                Explore Topic →
              </div>
            </Link>
          ))}
        </div>

        {/* Key Concepts */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mr-4 text-indigo-600 font-bold">
              💡
            </span>
            What You Will Learn
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Core Concepts</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3 text-indigo-600 text-xs">✓</span>
                  <span className="text-white">How Server Actions work internally</span>
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3 text-indigo-600 text-xs">✓</span>
                  <span className="text-white">When to choose Actions vs APIs</span>
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3 text-indigo-600 text-xs">✓</span>
                  <span className="text-white">Action arguments & return values</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Advanced Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3 text-indigo-600 text-xs">✓</span>
                  <span className="text-white">Revalidate tags & paths</span>
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3 text-indigo-600 text-xs">✓</span>
                  <span className="text-white">Integrating Actions with forms</span>
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3 text-indigo-600 text-xs">✓</span>
                  <span className="text-white">Handling action states elegantly</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white bg-opacity-10 rounded-lg">
            <h3 className="text-xl text-black font-semibold mb-4">Why This Matters</h3>
            <p className="text-black text-lg leading-relaxed">
              Server Actions replace many traditional API routes and client mutations.
              They simplify your architecture, reduce client-side JavaScript, and ensure
              secure, server-only execution for sensitive logic.
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
            href="/day-3/intro"
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

export default Day3