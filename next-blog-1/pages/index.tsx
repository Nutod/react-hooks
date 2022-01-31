import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Article, getAllArticles } from '../lib'

type HomeProps = {
  articles: Article[]
}

function Home(props: HomeProps) {
  return (
    <div>
      <Head>
        <title>Nutod's Blog</title>
        <meta name="description" content="Articles by Nutod" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ marginInline: '25rem', marginBlockStart: '5rem' }}>
        <h1>Articles</h1>

        <ul>
          {props.articles.map((article) => (
            <>
              <Link href={`/articles/${article.meta.slug}`}>
                <li
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  {article.meta.title}
                </li>
              </Link>
              <p>{article.meta.excerpt}</p>
              <div style={{ marginBlockEnd: '2rem' }}>
                {article.meta.tags.map((tag) => (
                  <span
                    className="zi-badge"
                    style={{ marginInlineEnd: '.5rem', padding: '1px' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          ))}
        </ul>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const articles = getAllArticles()

  return {
    props: { articles },
  }
}

export default Home
