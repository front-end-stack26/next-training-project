'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const ClientDataFetching = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6 shadow-lg">
            <span className="text-4xl">🌐</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Client Data Fetching
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn client-side data fetching in Next.js with useEffect, SWR, loading states, and error handling.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
              <span className="text-white font-bold text-xl">📚</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Client-Side Fetching Essentials</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Client data fetching is crucial for interactivity and real-time updates. It runs after the page has hydrated and helps you build dynamic user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">useEffect + Fetch</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4">
              <pre className="text-sm overflow-x-auto">
                <code>{`'use client'
import { useState, useEffect } from 'react'

export default function News() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api/news')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json()
      })
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return <div>{/* Render news */}</div>
}`}</code>
              </pre>
            </div>
            <div className="text-gray-700">
              <p className="mb-2"><strong>Best Practices:</strong> Add loading/error UI and avoid stale data.</p>
              <p>In a real app, add abort controllers to cancel fetch on unmount.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">SWR (Optional)</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4">
              <pre className="text-sm overflow-x-auto">
                <code>{`import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function News() {
  const { data, error, isLoading } = useSWR('/api/news', fetcher)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return <div>{/* Render news */}</div>
}`}</code>
              </pre>
            </div>
            <p className="text-gray-700">SWR simplifies data fetching with caching, revalidation, and retry support.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white mt-8">
          <h2 className="text-3xl font-bold mb-4">Client Fetching Best Practices</h2>
          <ul className="space-y-3">
            <li>• Use `useEffect` and `useState` for simple requests.</li>
            <li>• Use SWR/React Query for caching, revalidate, and focus tracking.</li>
            <li>• Handle loading/error states and avoid race conditions.</li>
            <li>• Use `fetch('/api/...')` (relative URL) for production independence.</li>
            <li>• Implement polling or `refreshInterval` for real-time updates.</li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/day-2"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            ← Back to Day 2 Overview
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ClientDataFetching