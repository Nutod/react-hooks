import fs from 'fs'
import path from 'path'
import { sync } from 'glob'
import matter from 'gray-matter'

const ARTICLE_PATHS = path.join(process.cwd(), 'articles')

// We might use this method for some other folders as well
function getSlugs() {
  const paths = sync(`${ARTICLE_PATHS}/*.mdx`)

  return paths.map((path) => {
    const parts = path.split('/')
    const fileName = parts[parts.length - 1]
    const [slug, _ext] = fileName.split('.')

    return slug
  })
}

export function getAllArticles() {
  // 1. We need the slugs
  // 2. We need the article content

  // maybe we need to sort that or something?
  const articles = getSlugs().map((slug) => getArticleFromSlug(slug))

  return articles
}

export type Article = {
  content: string
  meta: {
    slug: string
    title: string
    tags: string[]
    date: string
    excerpt: string
  }
}

// we need the contents of the file in a way that is usable to us
function getArticleFromSlug(slug: string): Article {
  // we have access to the slug so let's fetch the article
  // we can enter the directory to read the file
  const articlePath = path.join(ARTICLE_PATHS, `${slug}.mdx`)
  const source = fs.readFileSync(articlePath)
  const { content, data } = matter(source)

  return {
    content,
    meta: {
      slug,
      title: data.title ?? slug,
      date: (data.date ?? new Date()).toString(),
      excerpt: data.excerpt ?? '',
      tags: (data.tags ?? []).sort(),
    },
  }
}
