'use client';

import NavMenu from '@/components/NavMenu';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';

const Home = () => {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') || null;
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(currentCategory);
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
     if (selectedCategory && selectedCategory !== 'all') {
       fetch(`/api/products?category=${selectedCategory}`)
         .then(response => response.json())
         .then(data => setProductsList(data))
         .catch(err => setError(err.message))
         .finally(() => setLoading(false));
     } else {
        fetch(`/api/products`)
        .then( res => res.json() )
        .then( data => setProductsList(data))
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
     }
  }, [selectedCategory]);

  useEffect(() => {
    fetch(`/api/categories`)     
    .then(response => response.json())
    .then(data => setCategoryList(data)); 
  }, []);

  if (loading) return <p className='max-w-6xl mx-auto px-4 h-screen flex justify-center items-center'>Loading...</p>
  if (error) return <p className='max-w-6xl mx-auto px-4'>Error: {error}</p>

  return (
    <>
      <NavMenu  navItems={categoryList} setSelectedCategory= {setSelectedCategory}/>
      <section className='grid grid-cols-3 gap-6 mt-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {productsList.map((product) =>
           <ProductCard key={product.id} product={product} />
        )}
      </section>
    </>
  )
}

export default Home;