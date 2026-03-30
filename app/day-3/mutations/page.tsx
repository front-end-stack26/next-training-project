export default function Mutations() {
  return (
    <div className=" px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-100">

        <h1 className="text-4xl font-bold text-emerald-700 mb-6">
          🛠️ Mutating Data with Server Actions
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Server Actions shine when performing database mutations. They allow 
          you to write server-only logic and call it directly from your UI.
        </p>

        <h2 className="text-2xl font-semibold text-emerald-600 mb-4">Example: Add a Product</h2>

        <pre className="bg-gray-900 text-green-300 p-4 rounded-xl text-sm overflow-x-auto">
            {`"use server"
            import { db } from "@/lib/db"

            export async function addProduct(data) {
            await db.product.create({ data })
            }`}
        </pre>

        <h2 className="text-xl font-semibold text-emerald-600 mt-8 mb-3">Calling it from a component:</h2>

        <pre className="bg-gray-900 text-blue-300 p-4 rounded-xl text-sm overflow-x-auto">
            {`<form action={addProduct}>
            <input name="name" type="text" />
            <button type="submit">Create</button>
            </form>`}
        </pre>

        <p className="mt-4 text-gray-700">
          The form automatically submits to the server action without exposing 
          logic to the client.
        </p>

      </div>
    </div>
  )
}
