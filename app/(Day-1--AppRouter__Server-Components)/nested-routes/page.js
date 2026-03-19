import Link from 'next/link'

const NestedRoutes = () => {
  return (
    <div className='container px-12'>
        <h1 className='text-4xl font-bold mb-6'>NestedRoutes practices</h1>
        <Link href="/nested-routes/shop" className='text-red-500 font-bold'>go to the shop project</Link>
    </div>
  )
}

export default NestedRoutes