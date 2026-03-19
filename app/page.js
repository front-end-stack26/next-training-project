import Link from 'next/link'
const Home = () => {
  return (
    <section className='container mx-auto px-4 max-w-2xl py-12'>
      <h1 className='text-4xl font-bold mb-6'>Next.js Complete course</h1>
      <ul className='list-disc'>
        <li className='text-red-500 font-bold'><Link href="/basic-routes"> Basic Routes </Link></li>
        <li className='text-red-500 font-bold'><Link href="/nested-routes"> Nested Routes </Link></li>
        <li className='text-red-500 font-bold'><Link href="/dynamic-routes"> Dynamic Routes </Link></li>
        <li className='text-red-500 font-bold'><Link href="/useRouter"> Use Router </Link></li>
      </ul>
    </section>
  )
}

export default Home