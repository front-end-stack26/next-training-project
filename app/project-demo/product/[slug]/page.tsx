import { getProductBySlug } from '@/data/products'
import ProductGallery from '@/components/product/productGallery'
import { FaStar } from "react-icons/fa";
import ProductActions from '@/components/product/ProductActions';

const ProductDetails = async ({params}: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  return (
    <div className="grid grid-cols-6 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="w-full max-w-sm">
        <ProductGallery product={product} />
      </div>
      <div>
        <div className='border-b border-gray-200 pb-6'>
          <h1 className='text-2xl font-bold mb-4'>{product[0].name}</h1>
          <p className='text-2xl font-bold mb-4'>${product[0].price.toFixed(2)} <span className='text-sm font-normal text-muted-foreground ml-2'>{product[0].currency}</span></p>
          <div className="flex gap-2 mb-4">
            <div className='flex gap-1'>
              <FaStar className="fill-yellow-300" />
              <FaStar className="fill-yellow-300" />
              <FaStar className="fill-yellow-300" />
              <FaStar className="fill-yellow-300" />
              <FaStar  className="text-neutral-200"/>
            </div>
            <p className='text-sm font-medium text-zinc-400'>(30 reviews)</p>
            <p className='text-sm font-medium text-zinc-400'>| <span className='text-green-500 font-bold ml-1'>in stock</span> </p>
          </div>
          <p className='text-gray-700'>{product[0].description}</p>
        </div>
        <ProductActions product={product} />
       </div>
    </div>
  )
}

export default ProductDetails 