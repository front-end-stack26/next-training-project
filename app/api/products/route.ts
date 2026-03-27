import { products } from "@/data/products";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category =searchParams.get("category");
  
  if (category && category !== "all") {    
    const filteredProducts = products.filter((product) => product.category === category);
    return Response.json(filteredProducts);
  } 
  return Response.json(products);
}