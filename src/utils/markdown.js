import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

const THOUGHTS_DIR = path.join(process.cwd(), 'src/content/thoughts')

export function getAllThoughts() {
  const files = fs.readdirSync(THOUGHTS_DIR).filter(f => f.endsWith('.md'))

  return files
    .map(filename => {
      const slug = filename.replace(/\.md$/, '')
      const raw = fs.readFileSync(path.join(THOUGHTS_DIR, filename), 'utf8')
      const { data } = matter(raw)
      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description || '',
      }
    })
    .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
}

export function getThought(slug) {
  const filepath = path.join(THOUGHTS_DIR, `${slug}.md`)
  if (!fs.existsSync(filepath)) return null

  const raw = fs.readFileSync(filepath, 'utf8')
  const { data, content } = matter(raw)

  const contentHtml = md.render(content)

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description || '',
    contentHtml,
  }
}

export function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
