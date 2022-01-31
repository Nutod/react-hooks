import type { AppProps } from 'next/app'
import '@geist-ui/style'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

// What we have here is a framework that has ideas about how things should be done

// 1. What's the rendering page strategy?
// 2. SSG or SSR
// 3. First, is there a dynamic content on the page that prevents it from being gen
// erated ahead of time?
// getStaticProps to the rescue
// 4. In the event that there's dynamic content, then we can use SSR or ISR
// 5. We already have our data source from the articles folder
// 6. A lot of the things you'd be doing here will be working with different data sources

// Rendering pages based on some data fetching strategies
// SSR or SSG or ISR?
