"use client"
export default function Revalidate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-100">

        <h1 className="text-4xl font-bold text-purple-700 mb-6">
          🔄 Revalidate After Server Actions
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          After mutating data, you often need to refresh cached UI.  
          Next.js offers two powerful functions:
        </p>

        <ul className="space-y-3 text-gray-700">
          <li>✔ <code>revalidateTag("products")</code></li>
          <li>✔ <code>revalidatePath("/dashboard")</code></li>
        </ul>

        <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
          Example: Revalidate product list
        </h2>

        <pre className="bg-gray-900 text-purple-300 p-4 rounded-xl text-sm overflow-x-auto">
                {`"use server"
                import { revalidateTag } from "next/cache"

                export async function createProduct(data) {
                await db.product.create({ data })
                revalidateTag("products")
                }`}
        </pre>

        <p className="mt-4 text-gray-700">
          Any data fetched with <span>next: {`{ tags: ["products"] }`}</span> will refresh automatically.
        </p>

      </div>
    </div>
  )
}