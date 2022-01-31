import path from 'path'
import fs from 'fs'
import { sync } from 'glob'
import matter from 'gray-matter'

const ARTICLES_PATH = path.join(process.cwd(), 'articles')

export function getArticleSlug() {
  const paths = sync(`${ARTICLES_PATH}/*.mdx`)

  return paths.map((path) => {
    const fileName = path.split('/').slice(-1)[0]
    const [slug, _ext] = fileName.split('.')

    return slug
  })
}

export function getAllArticles() {
  const slugs = getArticleSlug()

  return slugs.map((slug) => renderToHTML(slug))
}

function renderToHTML(slug: string) {
  const articlePath = path.join(ARTICLES_PATH, `${slug}.mdx`)

  const source = fs.readFileSync(articlePath)

  const { content, data } = matter(source)

  return {
    content,
    data: {
      ...data,
      date: (data.date ?? new Date()).toString(),
      slug,
    },
  }
}
