import Link from 'next/link'

const Basicroute = () => {
  return (
    <section className='container px-12'>
        <h1 className='text-4xl font-bold mb-6'>Architecture - App Router - Blogs project</h1>
        <ul className='list-disc'>
            <li className='text-red-500 font-bold'>
                <Link href="/basic-routes/blogs/blog1">go to blog 1</Link>
            </li>
            <li className='text-red-500 font-bold'>
                <Link href="/basic-routes/blogs/blog2">go to blog 2</Link>
            </li>
        </ul>
    </section>
  )
}

export default Basicroute