const categories = [
  { slug: "electronics", name: "Electronics" },
  { slug: "clothes", name: "Clothes" },
  { slug: "furniture", name: "Furniture" },
];

export default function ProductsPage() {
  return (
    <div className='container px-12'>
      <h1 className='text-4xl font-bold mb-6'>All Products</h1>

      {categories.map((cat) => (
        <div key={cat.slug}>
          <a href='/nested-routes/shop/products/p1'>{cat.name}</a>
        </div>
      ))}
    </div>
  );
}