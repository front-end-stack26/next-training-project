export default function Forms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-100">

        <h1 className="text-4xl font-bold text-orange-700 mb-6">
          📨 Forms with Server Actions
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Server Actions work beautifully with forms — no need for API routes, 
          useEffect, or client-side JS!
        </p>

        <h2 className="text-2xl font-semibold text-orange-600 mb-4">Example</h2>

        <pre className="bg-gray-900 text-yellow-300 p-4 rounded-xl text-sm overflow-x-auto">
            {`"use server"
            export async function submitForm(formData) {
            const name = formData.get("name")
            console.log("Submitted:", name)
            }`}
        </pre>

        <pre className="bg-gray-900 text-blue-300 p-4 rounded-xl text-sm overflow-x-auto mt-4">
            {`<form action={submitForm}>
            <input name="name" />
            <button type="submit">Send</button>
            </form>`}
        </pre>

        <p className="mt-4 text-gray-700">
          This form submits **directly to the server action**, securely.
        </p>

      </div>
    </div>
  )
}