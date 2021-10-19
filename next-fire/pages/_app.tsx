import type { AppProps } from 'next/app'
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { FirebaseAppProvider } from 'reactfire'
import { firebaseConfig } from '../config/firebase'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <GeistProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </GeistProvider>
    </FirebaseAppProvider>
  )
}

export default MyApp
