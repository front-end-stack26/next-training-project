import { Open_Sans } from "next/font/google"
import { Roboto_Mono } from "next/font/google"
import { Playwrite_DK_Uloopet_Guides } from "next/font/google"
import { Inter } from "next/font/google"

// Google Fonts
const OpenSans = Open_Sans({ weight: ['500'], display: 'swap' })
const Roboto = Roboto_Mono({ weight: ['500'], display: 'swap' })
const PlayWrite = Playwrite_DK_Uloopet_Guides({ weight: ['400'], display: 'swap' })
const InterFont = Inter({ weight: ['400', '700'], display: 'swap' })

const Fonts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-6">
            <span className="text-4xl">🎨</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Next.js Font Optimization
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master font loading, optimization, and performance in Next.js applications
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
              <span className="text-white font-bold text-xl">📚</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Font Optimization in Next.js</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Next.js provides built-in font optimization through the <code className="bg-purple-100 px-3 py-1 rounded-lg text-purple-700 font-mono">next/font</code> module.
            This automatic font optimization helps improve performance by eliminating layout shift and reducing network requests.
          </p>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-400">
            <h3 className="text-lg font-semibold text-purple-800 mb-3">Key Benefits:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <strong>Zero Layout Shift:</strong> Fonts are loaded before the page renders
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <strong>Automatic Optimization:</strong> Self-hosting with optimal loading strategies
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <strong>Privacy-Friendly:</strong> No external requests to Google Fonts
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <strong>TypeScript Support:</strong> Full type safety for font configurations
              </li>
            </ul>
          </div>
        </div>

        {/* Font Types */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Google Fonts */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-2xl">🌐</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Google Fonts</h3>
            <p className="text-gray-700 mb-6">
              Automatically self-host Google Fonts with optimal loading and caching.
              No external requests, better performance, and privacy.
            </p>
            <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
              <pre className="text-sm overflow-x-auto">
                <code>{`import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
})

export default function Component() {
  return (
    <div className={inter.className}>
      Hello World
    </div>
  )
}`}</code>
              </pre>
            </div>
            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Available Options:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <code>subsets</code>: Font character sets</li>
                  <li>• <code>weight</code>: Font weights to include</li>
                  <li>• <code>display</code>: Font loading behavior</li>
                  <li>• <code>variable</code>: CSS custom properties</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Local Fonts */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-2xl">💾</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Local Fonts</h3>
            <p className="text-gray-700 mb-6">
              Use custom fonts stored in your project. Perfect for brand fonts,
              custom typefaces, or fonts not available on Google Fonts.
            </p>
            <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
              <pre className="text-sm overflow-x-auto">
                <code>{`import localFont from 'next/font/local'

const myFont = localFont({
  src: './fonts/my-font.woff2',
  display: 'swap',
  variable: '--font-my-font'
})

export default function Component() {
  return (
    <div className={myFont.className}>
      Custom Font Text
    </div>
  )
}`}</code>
              </pre>
            </div>
            <div className="space-y-3">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Supported Formats:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <code>.woff2</code> (recommended)</li>
                  <li>• <code>.woff</code></li>
                  <li>• <code>.ttf</code></li>
                  <li>• <code>.otf</code></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Font Loading Strategies */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">⚡</span>
            Font Loading Strategies
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">font-display: swap</h3>
              <p className="text-gray-700 mb-4">Fallback text shows immediately, font swaps in when loaded.</p>
              <div className="bg-white p-3 rounded border">
                <code className="text-orange-700 font-mono text-sm">display: 'swap'</code>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">font-display: optional</h3>
              <p className="text-gray-700 mb-4">Font loads if available within 100ms, otherwise uses fallback.</p>
              <div className="bg-white p-3 rounded border">
                <code className="text-orange-700 font-mono text-sm">display: 'optional'</code>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">font-display: block</h3>
              <p className="text-gray-700 mb-4">Text is invisible until font loads (default behavior).</p>
              <div className="bg-white p-3 rounded border">
                <code className="text-orange-700 font-mono text-sm">display: 'block'</code>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Examples */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">🎯</span>
            Practical Examples
          </h2>

          <div className="space-y-8">
            {/* Google Fonts Examples */}
            <div>
              <h3 className="text-2xl font-semibold text-teal-700 mb-6">Google Fonts Examples</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <h1 className={`${OpenSans.className} text-2xl font-bold text-gray-800 mb-3`}>Open Sans</h1>
                  <p className={`${OpenSans.className} text-gray-600 text-sm`}>Clean and modern sans-serif</p>
                  <div className="mt-4 p-2 bg-white rounded border">
                    <code className="text-xs text-gray-600">Open_Sans</code>
                  </div>
                </div>

                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <h1 className={`${Roboto.className} text-2xl font-bold text-gray-800 mb-3`}>Roboto Mono</h1>
                  <p className={`${Roboto.className} text-gray-600 text-sm`}>Monospace font for code</p>
                  <div className="mt-4 p-2 bg-white rounded border">
                    <code className="text-xs text-gray-600">Roboto_Mono</code>
                  </div>
                </div>

                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <h1 className={`${PlayWrite.className} text-2xl font-bold text-gray-800 mb-3`}>PlayWrite</h1>
                  <p className={`${PlayWrite.className} text-gray-600 text-sm`}>Handwritten style font</p>
                  <div className="mt-4 p-2 bg-white rounded border">
                    <code className="text-xs text-gray-600">Playwrite_DK_Uloopet_Guides</code>
                  </div>
                </div>
              </div>
            </div>

            {/* CSS Variables Example */}
            <div>
              <h3 className="text-2xl font-semibold text-teal-700 mb-6">CSS Variables (Tailwind Integration)</h3>
              <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
                <pre className="text-sm overflow-x-auto">
                  <code>{`// app/layout.js
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}

// tailwind.config.js
module.exports = {
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
    }
  }
}`}</code>
                </pre>
              </div>
              <div className="bg-teal-50 p-6 rounded-xl">
                <h4 className="font-semibold text-teal-800 mb-3">Benefits of CSS Variables:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                    Zero layout shift with font loading
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                    Automatic font optimization
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                    Better performance than external fonts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-10 h-10 bg-pink-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">💡</span>
            Best Practices
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-pink-700 mb-4">Performance</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Use font-display: swap</h4>
                    <p className="text-gray-600 text-sm">Prevents invisible text during font loading</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Limit font weights</h4>
                    <p className="text-gray-600 text-sm">Only include weights you actually use</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Use WOFF2 format</h4>
                    <p className="text-gray-600 text-sm">Best compression for web fonts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-pink-700 mb-4">Developer Experience</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Use TypeScript</h4>
                    <p className="text-gray-600 text-sm">Full type safety for font configurations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Organize fonts</h4>
                    <p className="text-gray-600 text-sm">Keep font configurations in separate files</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Test font loading</h4>
                    <p className="text-gray-600 text-sm">Verify fonts load correctly across devices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Migration Guide */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mr-4 text-purple-600 font-bold">🚀</span>
            Migration from Traditional Fonts
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 overflow-hidden">Before (Traditional)</h3>
              <div className="bg-white text-black overflow-hidden bg-opacity-10 p-6 rounded-lg">
                <pre className="text-sm text-black">
                  <code>{`// layout.html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">

// Problems:
❌ External requests
❌ Layout shift (FOUT)
❌ Privacy concerns
❌ No optimization`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">After (Next.js)</h3>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <pre className="text-sm text-black">
                  <code>{`// app/layout.js
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700']
})

// Benefits:
✅ Self-hosted fonts
✅ Zero layout shift
✅ Automatic optimization
✅ Better performance`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white text-black bg-opacity-10 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Migration Steps:</h3>
            <ol className="space-y-2 list-decimal list-inside">
              <li>Replace <code>&lt;link&gt;</code> tags with <code>next/font</code> imports</li>
              <li>Remove external font URLs from layout</li>
              <li>Apply font classes to components or use CSS variables</li>
              <li>Test font loading and fallback behavior</li>
            </ol>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center mt-12">
          <a
            href="/day-1"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="mr-2">←</span>
            Back to Day 1 Overview
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fonts;