// Vite's import.meta.glob loads all .md files at BUILD TIME — no Node.js fs/path needed.
// Each module is eagerly imported as a raw string via `?raw`, then parsed with a simple
// frontmatter parser to avoid Node.js-dependent packages like gray-matter.
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

function parseFrontmatter(raw) {
  if (!raw.startsWith('---')) return { data: {}, content: raw }
  const end = raw.indexOf('\n---', 3)
  if (end === -1) return { data: {}, content: raw }
  const yamlBlock = raw.slice(4, end).trim()
  const content = raw.slice(end + 4).trim()
  const data = {}
  for (const line of yamlBlock.split('\n')) {
    const colon = line.indexOf(':')
    if (colon === -1) continue
    const key = line.slice(0, colon).trim()
    const val = line.slice(colon + 1).trim().replace(/^['"]|['"]$/g, '')
    data[key] = val
  }
  return { data, content }
}

// Eagerly import all markdown files from src/content/thoughts/ as raw strings
const rawFiles = import.meta.glob('../content/thoughts/*.md', { eager: true, query: '?raw', import: 'default' })

// Parse them once into a lookup map: { slug -> { slug, title, date, description, contentHtml } }
const thoughtsMap = Object.fromEntries(
  Object.entries(rawFiles).map(([filepath, raw]) => {
    const slug = filepath.replace(/^.*\//, '').replace(/\.md$/, '')
    const { data, content } = parseFrontmatter(raw)
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
