import { useParams, Link } from 'react-router-dom'
import { getThought, formatDate } from '../utils/markdown'
import { useEffect } from 'react'

export default function ThoughtPost() {
  const { slug } = useParams()
  const thought = getThought(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!thought) {
    return (
      <section className="page-thought-post">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">404 - Post Not Found</h1>
          <p className="text-lg text-gray-700">The thought you are looking for does not exist.</p>
          <Link to="/thoughts" className="text-blue-600 hover:underline mt-4 inline-block">Back to Thoughts</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="page-thought-post">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1 flex-wrap">
          <Link to="/" className="hover:text-blue-700 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/thoughts" className="hover:text-blue-700 transition-colors">Thoughts</Link>
          <span>/</span>
          <span className="text-gray-900 truncate">{thought.title}</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{thought.title}</h1>
          <p className="text-gray-600 text-lg mb-4">{thought.description}</p>
          <span className="text-sm text-gray-500">Published on {formatDate(thought.date)}</span>
        </div>

        <article className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: thought.contentHtml }} />

        <div className="mt-10 pt-8 border-t border-gray-200">
          <Link to="/thoughts" className="text-blue-600 hover:underline text-sm font-medium">
            ← Back to Thoughts
          </Link>
        </div>
      </div>
    </section>
  )
}
