import type { AppProps } from 'next/app'
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { FirebaseAppProvider } from 'reactfire'
import { firebaseConfig } from '../config/firebase'
import Providers from '../providers/providers'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <GeistProvider>
        <CssBaseline />
        <Providers>
          <Component {...pageProps} />
        </Providers>
      </GeistProvider>
    </FirebaseAppProvider>
  )
}

export default MyApp
