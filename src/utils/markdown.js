// Vite's import.meta.glob loads all .md files at BUILD TIME — no Node.js fs/path needed.
// Each module is eagerly imported as a raw string via `?raw`, then parsed with gray-matter.
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

// Eagerly import all markdown files from src/content/thoughts/ as raw strings
const rawFiles = import.meta.glob('../content/thoughts/*.md', { eager: true, as: 'raw' })

// Parse them once into a lookup map: { slug -> { slug, title, date, description, contentHtml } }
const thoughtsMap = Object.fromEntries(
  Object.entries(rawFiles).map(([filepath, raw]) => {
    const slug = filepath.replace(/^.*\//, '').replace(/\.md$/, '')
    const { data, content } = matter(raw)
    return [
      slug,
      {
        slug,
        title: data.title ?? slug,
        date: data.date ?? null,
        description: data.description ?? '',
        contentHtml: md.render(content),
      },
    ]
  })
)

export function getAllThoughts() {
  return Object.values(thoughtsMap).sort((a, b) =>
    new Date(a.date) < new Date(b.date) ? 1 : -1
  )
}

export function getThought(slug) {
  return thoughtsMap[slug] ?? null
}

export function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
