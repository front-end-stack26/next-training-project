import Link from 'next/link'
import Image from 'next/image'
const Home = () => {
  return (
    <main className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16 px-4'>
      <div className='max-w-6xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-200 p-10'>
        <div className='text-center mb-10'>
          <h1 className='text-5xl font-black tracking-tight text-slate-900 mb-6'>Next.js Complete course <br />and demo project</h1>
          <p className='text-lg sm:text-xl text-slate-600'>Interactive learning path for App Router and data fetching strategies.</p>
        </div>
        <Image className="my-6 mx-auto" src='data:image/png;base64,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' alt="next-img" width="800" height="500" />

        <div className='grid gap-6 md:grid-cols-3 mb-10'>
          <Link href='/day-1' className='group rounded-xl border border-indigo-300 bg-indigo-50 hover:bg-indigo-100 transition p-6 text-center shadow-sm'>
            <h2 className='text-xl font-semibold text-indigo-700 mb-2'>Day 1</h2>
            <p className='text-sm text-indigo-600'>App Router, nested route structure, and server components.</p>
          </Link>
          <Link href='/day-2' className='group rounded-xl border border-sky-300 bg-sky-50 hover:bg-sky-100 transition p-6 text-center shadow-sm'>
            <h2 className='text-xl font-semibold text-sky-700 mb-2'>Day 2</h2>
            <p className='text-sm text-sky-600'>Data fetching, cache modes, SSR, SSG, and Suspense.</p>
          </Link>
          <Link href='/project-demo' className='group rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 transition p-6 text-center shadow-sm'>
            <h2 className='text-xl font-semibold text-emerald-700 mb-2'>Project Demo</h2>
            <p className='text-sm text-emerald-600'>Build a practical project using routing and dynamic pages.</p>
          </Link>
        </div>
        <ul className='grid gap-4 sm:grid-cols-2'>
          <li className='rounded-lg bg-white p-5 border border-slate-200 shadow-sm'>
            <strong className='text-slate-700'>App Router Fundamentals</strong>
            <p className='text-sm text-slate-500 mt-1'>routes, layouts, nested folders, and server components.</p>
          </li>
          <li className='rounded-lg bg-white p-5 border border-slate-200 shadow-sm'>
            <strong className='text-slate-700'>Data Fetching Patterns</strong>
            <p className='text-sm text-slate-500 mt-1'>no-store, force-cache, revalidate, and suspense.</p>
          </li>
          <li className='rounded-lg bg-white p-5 border border-slate-200 shadow-sm'>
            <strong className='text-slate-700'>Performance & SEO</strong>
            <p className='text-sm text-slate-500 mt-1'>pre-fetch model, caching, and rendering modes.</p>
          </li>
          <li className='rounded-lg bg-white p-5 border border-slate-200 shadow-sm'>
            <strong className='text-slate-700'>Modern React APIs</strong>
            <p className='text-sm text-slate-500 mt-1'>use client hooks, suspense boundaries, and server components.</p>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Home