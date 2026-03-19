import Link from 'next/link'

const Shop = () => {
  return (
    <div className='container px-12'>
      <h1 className='text-4xl font-bold mb-6'>Welcome to the Shop</h1>
      <a href="/nested-routes/shop/products" className='text-red-500 font-bold'>Go to products gallery</a>
    </div>

  )
}

export default Shop