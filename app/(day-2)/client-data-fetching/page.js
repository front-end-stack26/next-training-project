'use client'
import { useState, useEffect } from 'react'

const ClientDataFetching = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/news')
    .then((res) => res.json())
    .then((data) => setData(data));
  }, [])
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((news) => (
          <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img 
              src={`/${news.image}`} 
              alt={news.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{news.title}</h2>
              <p className="text-sm text-gray-500 mb-3">{new Date(news.date).toLocaleDateString()}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {news.content.length > 100 ? `${news.content.substring(0, 100)}...` : news.content}
              </p>
              <div className="mt-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {news.slug}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClientDataFetching