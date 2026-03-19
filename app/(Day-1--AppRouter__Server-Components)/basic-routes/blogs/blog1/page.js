import Link from 'next/link'

const Blog1 = () => {
  return (
     <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl mx-auto">
          <div className="bg-blue-600 text-white py-6 px-6 text-center">
            <h1 className="text-4xl font-bold">First Blog</h1>
          </div>

          <div className="p-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              expedita illo? Dignissimos, aut! Labore enim quod odit nesciunt
              ipsam et, explicabo voluptate possimus velit iste sed optio
              delectus blanditiis illo id ratione molestias debitis impedit
              sequi sunt veniam.
            </p>

            <Link
              href="/basic-routes"
              className="text-red-500 mt-8"
            >
              Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog1