"use client"

export default function ActionState() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-10">

        {/* ----------------------------------------------------------- */}
        {/* 📘 MUTATING DATA – REWRITTEN DOCUMENTATION WITH EXAMPLES    */}
        {/* ----------------------------------------------------------- */}

        <h1 className="text-4xl font-bold text-teal-700">Mutating Data</h1>

        <p className="text-gray-700">
          Next.js handles data mutations through server‑side async functions
          known as <strong>Server Functions</strong>. These functions run only
          on the server and can be triggered directly from forms or event
          handlers, allowing the UI to update automatically after the mutation.
        </p>

        {/* ---------------------- What Are Server Functions ---------------------- */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-600 mb-3">
            What Are Server Functions?
          </h2>

          <p className="text-gray-700 mb-3">
            A Server Function is an async function that executes strictly on the
            server. When used for user‑triggered updates or form submissions,
            they're often called <strong>Server Actions</strong>. Assigning them
            to a form's <strong>action</strong> attribute or a button's 
            <strong>formAction</strong> automatically sets up the mutation flow.
          </p>

          <h3 className="font-semibold text-lg text-teal-500 mt-4 mb-2">
            📌 Example — Calling a Server Function from a form
          </h3>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md text-sm overflow-x-auto">
                {`// server file
                "use server"

                export async function createItem(formData) {
                  const name = formData.get("name")
                  // mutate database...
                  return "Created: " + name
                }`}
          </pre>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md text-sm overflow-x-auto mt-2">
              {`// client component
              <form action={createItem}>
                <input name="name" />
                <button>Create</button>
              </form>`}
          </pre>
        </section>

        {/* ---------------------- Creating Server Functions ---------------------- */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-600 mb-3">
            Creating Server Functions
          </h2>

          <p className="text-gray-700 mb-3">
            To define a Server Function, add <code>"use server"</code> at the
            top of the function or file. This marks the function as server‑only.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md text-sm">
              {`// actions.js
              "use server"

              export async function addPost(formData) {
                const title = formData.get("title")
                // Save data...
              }`}
          </pre>
        </section>

        {/* ---------------------- Server vs Client Components ---------------------- */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-600 mb-3">
            Server vs Client Components
          </h2>

          <p className="text-gray-700 mb-3">
            Server Components can contain Server Functions directly. Client
            Components cannot define server actions, but they can call them
            by importing them from a server-marked file.
          </p>

          <h3 className="font-semibold text-lg text-teal-500 mb-2">📌 Example</h3>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md text-sm">
              {`// server component
              export default function Page() {
                async function save(formData) {
                  "use server"
                  // mutate...
                }

                return <form action={save}>...</form>
              }`}
          </pre>
        </section>

        {/* ---------------------- Passing Actions as Props ---------------------- */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-600 mb-3">
            Passing Actions as Props
          </h2>

          <p className="text-gray-700 mb-3">
            Server Actions can be passed into Client Components like any other
            prop, making forms flexible and reusable.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md text-sm">
              {`<ClientForm submitAction={updateItem} />`}
          </pre>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md text-sm mt-2">
            {`// client file
            "use client"

            export function ClientForm({ submitAction }) {
              return <form action={submitAction}>...</form>
            }`}
          </pre>
        </section>

        {/* ---------------------- Forms ---------------------- */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-600 mb-3">
            Invoking Actions with Forms
          </h2>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md text-sm">
              {`<form action={createPost}>
                <input name="title" />
                <button>Save</button>
              </form>`}
          </pre>
        </section>

        {/* ---------------------- Event Handlers ---------------------- */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-600 mb-3">
            Calling Actions in Event Handlers
          </h2>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md text-sm">
                {`"use client"
                import { likePost } from "./actions"

                export default function LikeButton() {
                  return (
                    <button onClick={async () => await likePost()}>
                      Like
                    </button>
                  )
                }`}
          </pre>
        </section>

        {/* ---------------------- Pending State ---------------------- */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-600 mb-3">
            Showing a Pending State
          </h2>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md text-sm">
              {`"use client"
              import { useActionState } from "react"
              import { createPost } from "./actions"

              export function CreateButton() {
                const [msg, action, pending] = useActionState(createPost, null)

                return (
                  <button onClick={action}>
                    {pending ? "Loading..." : "Create"}
                  </button>
                )
              }`}
          </pre>
        </section>
      </div>
    </div>
  )
}