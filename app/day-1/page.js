import Link from 'next/link'

const Day1 = () => {
  return (
    <main className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16 px-4'>
      <div className='max-w-6xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-200 p-10'>
        <div className='text-center mb-10'>
          <h1 className='text-5xl font-black tracking-tight text-slate-900 mb-6'>Day 1: App Router & Server Components</h1>
          <p className='text-lg sm:text-xl text-slate-600'>
            Welcome to Day 1 of the Next.js course! In this session, we'll explore the App Router and Server Components.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10'>
          <Link href='day-1/routing' className='group rounded-xl border border-indigo-300 bg-indigo-50 hover:bg-indigo-100 transition p-6 text-center shadow-sm'>
            <h2 className='text-xl font-semibold text-indigo-700 mb-2'>Page Router vs App Router</h2>
            <p className='text-sm text-indigo-600'>Compare routing systems and migration strategies.</p>
          </Link>
          <Link href='day-1/create-route' className='group rounded-xl border border-sky-300 bg-sky-50 hover:bg-sky-100 transition p-6 text-center shadow-sm'>
            <h2 className='text-xl font-semibold text-sky-700 mb-2'>Routing</h2>
            <p className='text-sm text-sky-600'>File-based routing and nested route structure.</p>
          </Link>
          <Link href='day-1/dynamic-routes' className='group rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 transition p-6 text-center shadow-sm'>
            <h2 className='text-xl font-semibold text-emerald-700 mb-2'>Dynamic Routes</h2>
            <p className='text-sm text-emerald-600'>Dynamic segments, catch-all routes, and optional catch-all.</p>
          </Link>
          <Link href='day-1/useRouter' className='group rounded-xl border border-purple-300 bg-purple-50 hover:bg-purple-100 transition p-6 text-center shadow-sm'>
            <h2 className='text-xl font-semibold text-purple-700 mb-2'>Use Router</h2>
            <p className='text-sm text-purple-600'>Client-side navigation with useRouter hook.</p>
          </Link>
          <Link href='day-1/fonts' className='group rounded-xl border border-pink-300 bg-pink-50 hover:bg-pink-100 transition p-6 text-center shadow-sm'>
            <h2 className='text-xl font-semibold text-pink-700 mb-2'>Fonts</h2>
            <p className='text-sm text-pink-600'>Google Fonts and local font optimization.</p>
          </Link>
          <Link href='day-1/test-middleware' className='group rounded-xl border border-orange-300 bg-orange-50 hover:bg-orange-100 transition p-6 text-center shadow-sm'>
            <h2 className='text-xl font-semibold text-orange-700 mb-2'>Middleware</h2>
            <p className='text-sm text-orange-600'>Request interception and response modification.</p>
          </Link>
          <Link href='day-1/nested-layout' className='group rounded-xl border border-teal-300 bg-teal-50 hover:bg-teal-100 transition p-6 text-center shadow-sm'>
            <h2 className='text-xl font-semibold text-teal-700 mb-2'>Layout Components</h2>
            <p className='text-sm text-teal-600'>layout.js, error.js, loading.js, template.js.</p>
          </Link>
          <Link href='day-1/use-client-vs-use-server' className='group rounded-xl border border-rose-300 bg-rose-50 hover:bg-rose-100 transition p-6 text-center shadow-sm'>
            <h2 className='text-xl font-semibold text-rose-700 mb-2'>Client vs Server</h2>
            <p className='text-sm text-rose-600'>'use client' vs 'use server' directives.</p>
          </Link>
        </div>

        {/* Navigation */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="mr-2">←</span>
            Back to Homepage Overview
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Day1