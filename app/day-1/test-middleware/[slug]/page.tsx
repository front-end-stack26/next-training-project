import Link from 'next/link'
import { notFound } from 'next/navigation'

type MiddlewareSlugPageProps = {
  params: {
    slug: string
  }
}

const MiddlewareSlugPage = ({ params }: MiddlewareSlugPageProps) => {
  const { slug } = params

  // Simulate different middleware behaviors based on slug
  const middlewareExamples = {
    'auth': {
      title: 'Authentication Middleware',
      description: 'Protect routes by checking user authentication status.',
      code: `export function middleware(request) {
  const token = request.cookies.get('auth-token')
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  return NextResponse.next()
}`
    },
    'redirect': {
      title: 'URL Redirect Middleware',
      description: 'Redirect users from old URLs to new ones.',
      code: `export function middleware(request) {
  if (request.nextUrl.pathname === '/old-path') {
    return NextResponse.redirect(new URL('/new-path', request.url))
  }
  return NextResponse.next()
}`
    },
    'rewrite': {
      title: 'URL Rewrite Middleware',
      description: 'Rewrite URLs internally without changing the browser URL.',
      code: `export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/api/')) {
    return NextResponse.rewrite(new URL('/api-proxy', request.url))
  }
  return NextResponse.next()
}`
    },
    'headers': {
      title: 'Custom Headers Middleware',
      description: 'Add custom headers to responses for security or functionality.',
      code: `export function middleware(request) {
  const response = NextResponse.next()
  response.headers.set('X-Custom-Header', 'value')
  return response
}`
    }
  }

  const example = middlewareExamples["auth"]

  if (!example && slug !== 'overview') {
    notFound()
  }

  return (
    <main className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16 px-4'>
      <div className='max-w-6xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-200 p-10'>
        <div className='mb-8'>
          <Link
            href="/day-1/test-middleware"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-4"
          >
            <span className="mr-2">←</span>
            Back to Middleware Overview
          </Link>
          <h1 className='text-4xl font-black tracking-tight text-slate-900 mb-4'>Next.js Middleware</h1>
          <div className='bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-r-lg'>
            <p className='text-indigo-800 font-medium'>Dynamic Route: {slug}</p>
            <p className='text-indigo-600 text-sm mt-1'>This page demonstrates middleware testing with dynamic slugs.</p>
          </div>
        </div>

        {slug === 'overview' ? (
          <>
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-slate-800 mb-4'>What is Middleware?</h2>
              <p className='text-slate-600 mb-6 leading-relaxed'>
                Middleware in Next.js is code that runs on the edge runtime before a request is completed.
                It allows you to modify requests and responses, implement authentication, redirects, rewrites,
                and other functionality that needs to run before your page or API route handler.
              </p>
              <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                <h3 className='font-semibold text-slate-800 mb-3'>When Middleware Runs</h3>
                <p className='text-slate-600 mb-4'>
                  Middleware executes between the user request and your page/route handler in the edge runtime.
                  It's perfect for tasks that need to happen on every request without affecting your application code.
                </p>
                <div className='text-center'>
                  <div className='inline-block bg-white rounded-lg p-4 shadow-sm border'>
                    <div className='text-sm text-slate-500 mb-2'>Request Flow</div>
                    <div className='flex items-center space-x-4'>
                      <span className='text-blue-600 font-medium'>User Request</span>
                      <span className='text-slate-400'>→</span>
                      <span className='text-purple-600 font-medium'>Middleware</span>
                      <span className='text-slate-400'>→</span>
                      <span className='text-green-600 font-medium'>Page Handler</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-slate-800 mb-4'>Common Use Cases</h2>
              <div className='grid gap-4 md:grid-cols-2'>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-800 mb-2'>🔐 Authentication</h3>
                  <p className='text-slate-600 text-sm'>Check user sessions and redirect to login pages.</p>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-800 mb-2'>🔄 Redirects</h3>
                  <p className='text-slate-600 text-sm'>Handle URL redirects for SEO or migration.</p>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-800 mb-2'>✏️ Rewrites</h3>
                  <p className='text-slate-600 text-sm'>Internally rewrite URLs without changing browser URL.</p>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-800 mb-2'>📊 Analytics</h3>
                  <p className='text-slate-600 text-sm'>Log requests and track user behavior.</p>
                </div>
              </div>
            </section>

            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-slate-800 mb-4'>Creating Middleware</h2>
              <div className='bg-slate-900 text-slate-100 rounded-lg p-6 font-mono text-sm overflow-x-auto'>
                <div className='text-slate-400 mb-2'>middleware.js (in project root)</div>
{`import { NextResponse } from 'next/server'

export function middleware(request) {
  // Your middleware logic here
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}`}
              </div>
              <p className='text-slate-600 mt-4 text-sm'>
                The <code className='bg-slate-100 px-2 py-1 rounded text-xs'>config.matcher</code> defines which paths the middleware runs on.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-slate-800 mb-4'>Test Different Examples</h2>
              <div className='grid gap-4 md:grid-cols-2'>
                <Link href='/day-1/test-middleware/auth' className='block bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-lg p-4 transition'>
                  <h3 className='font-semibold text-indigo-800'>Authentication Example</h3>
                  <p className='text-indigo-600 text-sm'>See how auth middleware works</p>
                </Link>
                <Link href='/day-1/test-middleware/redirect' className='block bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-lg p-4 transition'>
                  <h3 className='font-semibold text-sky-800'>Redirect Example</h3>
                  <p className='text-sky-600 text-sm'>URL redirection patterns</p>
                </Link>
                <Link href='/day-1/test-middleware/rewrite' className='block bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg p-4 transition'>
                  <h3 className='font-semibold text-emerald-800'>Rewrite Example</h3>
                  <p className='text-emerald-600 text-sm'>Internal URL rewriting</p>
                </Link>
                <Link href='/day-1/test-middleware/headers' className='block bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-lg p-4 transition'>
                  <h3 className='font-semibold text-purple-800'>Headers Example</h3>
                  <p className='text-purple-600 text-sm'>Custom response headers</p>
                </Link>
              </div>
            </section>
          </>
        ) : (
          <section>
            <h2 className='text-2xl font-bold text-slate-800 mb-4'>{example.title}</h2>
            <p className='text-slate-600 mb-6 leading-relaxed'>{example.description}</p>
            <div className='bg-slate-900 text-slate-100 rounded-lg p-6 font-mono text-sm overflow-x-auto'>
              <div className='text-slate-400 mb-2'>middleware.js</div>
              <pre>{example.code}</pre>
            </div>
            <div className='mt-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg'>
              <h3 className='font-semibold text-blue-800 mb-2'>💡 Key Points</h3>
              <ul className='text-blue-700 text-sm space-y-1'>
                <li>• Middleware runs on the edge runtime</li>
                <li>• Use <code className='bg-blue-100 px-1 rounded'>NextResponse</code> for responses</li>
                <li>• Access request data via <code className='bg-blue-100 px-1 rounded'>request</code> object</li>
                <li>• Configure paths with <code className='bg-blue-100 px-1 rounded'>config.matcher</code></li>
              </ul>
            </div>
          </section>
        )}

        <div className="text-center mt-12">
          <Link
            href="/day-1"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="mr-2">←</span>
            Back to Day 1 Overview
          </Link>
        </div>
      </div>
    </main>
  )
}

export default MiddlewareSlugPage