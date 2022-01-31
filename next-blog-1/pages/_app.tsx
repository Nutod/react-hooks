import type { AppProps } from 'next/app'
import '@geist-ui/style'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
