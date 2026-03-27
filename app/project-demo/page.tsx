import ProductCard from "@/components/ProductCard";

const Home = async () => {
  const products = await fetch(`${process.env.baseURL}/api/products`);
  const productsList = await products.json();
  
  return (
    <div className="">
       { productsList.map((product) => (
          <ProductCard key={product.id} product={product} />
       )) }
    </div>
  )
}

export default Home;