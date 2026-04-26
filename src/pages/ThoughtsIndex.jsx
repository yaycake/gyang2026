import { Link } from 'react-router-dom'
import { getAllThoughts, formatDate } from '../utils/markdown'
import { useEffect } from 'react'

export default function ThoughtsIndex() {
  const thoughts = getAllThoughts()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="page-thoughts-index">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">My Thoughts & Workflows</h1>
        <p className="text-lg text-gray-700 mb-10">Insights on AI-native thinking, design processes, and inspiration.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {thoughts.map(thought => (
            <Link to={`/thoughts/${thought.slug}`} key={thought.slug} className="block p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{thought.title}</h2>
              <p className="text-gray-600 text-sm mb-3">{thought.description}</p>
              <span className="text-sm text-gray-500">{formatDate(thought.date)}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
