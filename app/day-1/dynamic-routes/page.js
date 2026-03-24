import Link from "next/link";

export default function DynamicRoutesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-6">
            <span className="text-4xl">🔄</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Dynamic Routes in Next.js
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master dynamic routing with parameters, catch-all routes, and static generation in the App Router
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
              <span className="text-white font-bold text-xl">🎯</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">What are Dynamic Routes?</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Dynamic routes allow you to create pages that can handle different data based on URL parameters.
            Instead of creating separate files for each possible route, you use <strong>square brackets</strong> to
            define dynamic segments that can match any value.
          </p>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-400">
            <h3 className="text-lg font-semibold text-purple-800 mb-3">Key Benefits:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <strong>Scalable:</strong> Handle unlimited variations with single components
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <strong>SEO-friendly:</strong> Each dynamic route can have unique metadata
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <strong>Type-safe:</strong> Access parameters with full TypeScript support
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <strong>Performance:</strong> Static generation support for dynamic routes
              </li>
            </ul>
          </div>
        </div>

        {/* Route Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Single Dynamic Segment */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-2xl">📄</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Single Dynamic Segment</h3>
            <p className="text-gray-600 mb-4">Match a single path segment using square brackets.</p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <code className="text-blue-700 font-mono text-sm">
                {`app/blog/[id]/
└── page.js`}
              </code>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <div className="bg-white p-2 rounded border">
                <code className="text-blue-600">/blog/123</code> → <span className="text-gray-600">params.id = "123"</span>
              </div>
              <div className="bg-white p-2 rounded border">
                <code className="text-blue-600">/blog/hello</code> → <span className="text-gray-600">params.id = "hello"</span>
              </div>
            </div>
          </div>

          {/* Multiple Dynamic Segments */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-2xl">📚</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Multiple Segments</h3>
            <p className="text-gray-600 mb-4">Match multiple path segments in sequence.</p>
            <div className="bg-green-50 p-4 rounded-lg">
              <code className="text-green-700 font-mono text-sm">
                {`app/shop/[category]/[id]/
└── page.js`}
              </code>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <div className="bg-white p-2 rounded border">
                <code className="text-green-600">/shop/electronics/456</code>
              </div>
              <div className="bg-white p-2 rounded border">
                <span className="text-gray-600">params.category = "electronics"</span>
              </div>
              <div className="bg-white p-2 rounded border">
                <span className="text-gray-600">params.id = "456"</span>
              </div>
            </div>
          </div>

          {/* Catch-All Routes */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Catch-All Routes</h3>
            <p className="text-gray-600 mb-4">Match any number of path segments with triple dots.</p>
            <div className="bg-orange-50 p-4 rounded-lg">
              <code className="text-orange-700 font-mono text-sm">
                {`app/docs/[...slug]/
└── page.js`}
              </code>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <div className="bg-white p-2 rounded border">
                <code className="text-orange-600">/docs/a/b/c</code>
              </div>
              <div className="bg-white p-2 rounded border">
                <span className="text-gray-600">params.slug = ["a", "b", "c"]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Folder Structure Examples */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">📁</span>
            Folder Structure Examples
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Blog Application</h3>
              <div className="bg-gray-50 p-6 rounded-xl font-mono text-sm">
                <div className="text-gray-600">app/</div>
                <div className="ml-4 text-blue-600">├── blog/</div>
                <div className="ml-8 text-blue-600">│   ├── page.js</div>
                <div className="ml-8 text-blue-600">│   └── [id]/</div>
                <div className="ml-12 text-blue-600">│       ├── page.js</div>
                <div className="ml-12 text-blue-600">│       └── edit/</div>
                <div className="ml-16 text-blue-600">│           └── page.js</div>
                <div className="ml-4 text-blue-600">└── categories/</div>
                <div className="ml-8 text-blue-600">    └── [slug]/</div>
                <div className="ml-12 text-blue-600">        └── page.js</div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="bg-white p-3 rounded border">
                  <code className="text-indigo-600">/blog</code> → Blog listing
                </div>
                <div className="bg-white p-3 rounded border">
                  <code className="text-indigo-600">/blog/123</code> → Single post
                </div>
                <div className="bg-white p-3 rounded border">
                  <code className="text-indigo-600">/blog/123/edit</code> → Edit post
                </div>
                <div className="bg-white p-3 rounded border">
                  <code className="text-indigo-600">/categories/react</code> → Category page
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">E-commerce Store</h3>
              <div className="bg-gray-50 p-6 rounded-xl font-mono text-sm">
                <div className="text-gray-600">app/</div>
                <div className="ml-4 text-green-600">├── products/</div>
                <div className="ml-8 text-green-600">│   ├── page.js</div>
                <div className="ml-8 text-green-600">│   └── [id]/</div>
                <div className="ml-12 text-green-600">│       └── page.js</div>
                <div className="ml-4 text-green-600">├── categories/</div>
                <div className="ml-8 text-green-600">│   └── [category]/</div>
                <div className="ml-12 text-green-600">│       ├── page.js</div>
                <div className="ml-12 text-green-600">│       └── [subcategory]/</div>
                <div className="ml-16 text-green-600">│           └── page.js</div>
                <div className="ml-4 text-green-600">└── search/</div>
                <div className="ml-8 text-green-600">    └── [...query]/</div>
                <div className="ml-12 text-green-600">        └── page.js</div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="bg-white p-3 rounded border">
                  <code className="text-green-600">/products/789</code> → Product details
                </div>
                <div className="bg-white p-3 rounded border">
                  <code className="text-green-600">/categories/electronics</code> → Category
                </div>
                <div className="bg-white p-3 rounded border">
                  <code className="text-green-600">/categories/electronics/laptops</code> → Subcategory
                </div>
                <div className="bg-white p-3 rounded border">
                  <code className="text-green-600">/search/shoes/size/10</code> → Search results
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">💻</span>
            Code Examples
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Single Dynamic Route */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-teal-700">Single Dynamic Route</h3>
              <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`// app/blog/[id]/page.js
export default function BlogPost({ params }) {
  return (
    <div>
      <h1>Blog Post {params.id}</h1>
      <p>Content for post {params.id}</p>
    </div>
  );
}

// TypeScript version
interface Props {
  params: {
    id: string;
  };
}

export default function BlogPost({ params }: Props) {
  // params.id is automatically typed as string
  return <div>Post: {params.id}</div>;
}`}</code>
                </pre>
              </div>
            </div>

            {/* Catch-All Route */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-teal-700">Catch-All Route</h3>
              <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`// app/docs/[...slug]/page.js
export default function DocsPage({ params }) {
  const { slug } = params;

  return (
    <div>
      <h1>Docs: {slug.join(' / ')}</h1>
      <p>Path segments: {slug.length}</p>
      <ul>
        {slug.map((segment, index) => (
          <li key={index}>{segment}</li>
        ))}
      </ul>
    </div>
  );
}

// URL: /docs/getting-started/installation
// params.slug = ['getting-started', 'installation']`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Static Generation */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">⚡</span>
            Static Generation with Dynamic Routes
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-yellow-700">generateStaticParams</h3>
              <p className="text-gray-700 mb-4">
                Pre-generate static pages for dynamic routes at build time.
              </p>
              <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`// app/blog/[id]/page.js
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts').then(res => res.json());

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function BlogPost({ params }) {
  // This page will be statically generated for each post
  return <div>Post: {params.id}</div>;
}`}</code>
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-yellow-700">Benefits</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Faster Loading</h4>
                    <p className="text-gray-600 text-sm">Pre-rendered pages load instantly</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">🔍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Better SEO</h4>
                    <p className="text-gray-600 text-sm">Content available to search engines</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Reduced Server Load</h4>
                    <p className="text-gray-600 text-sm">Pages served from CDN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mr-4 text-green-600 font-bold">💡</span>
            Best Practices
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Route Design</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 text-green-600 text-sm font-bold mt-0.5">✓</span>
                  <div>
                    <strong>Use descriptive parameter names</strong>
                    <p className="text-green-100 text-sm">Clear, semantic names like [userId] instead of [id]</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 text-green-600 text-sm font-bold mt-0.5">✓</span>
                  <div>
                    <strong>Keep routes shallow</strong>
                    <p className="text-green-100 text-sm">Avoid deeply nested dynamic segments</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 text-green-600 text-sm font-bold mt-0.5">✓</span>
                  <div>
                    <strong>Use catch-all for flexible paths</strong>
                    <p className="text-green-100 text-sm">When you need to handle unknown path depths</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Performance</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 text-green-600 text-sm font-bold mt-0.5">✓</span>
                  <div>
                    <strong>Implement generateStaticParams</strong>
                    <p className="text-green-100 text-sm">Pre-generate pages for better performance</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 text-green-600 text-sm font-bold mt-0.5">✓</span>
                  <div>
                    <strong>Add loading and error boundaries</strong>
                    <p className="text-green-100 text-sm">Provide better user experience during loading</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 text-green-600 text-sm font-bold mt-0.5">✓</span>
                  <div>
                    <strong>Validate parameters</strong>
                    <p className="text-green-100 text-sm">Handle invalid routes gracefully</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center mt-12">
          <Link
            href="/day-1"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="mr-2">←</span>
            Back to Day 1 Overview
          </Link>
        </div>
      </div>
    </div>
  );
}

export const generateMetadata = () => {
  return {
    title: "Dynamic Routes - Next.js App Router",
    description: "Learn how to create dynamic routes with parameters, catch-all routes, and static generation in Next.js"
  };
};