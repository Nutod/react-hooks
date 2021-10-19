import React from 'react'
import { getAuth } from '@firebase/auth'
import { AuthProvider, useFirebaseApp } from 'reactfire'

type ProviderProps = {
  children: React.ReactNode
}

export default function Providers({ children }: ProviderProps) {
  const app = useFirebaseApp()
  const auth = getAuth(app)

  return <AuthProvider sdk={auth}>{children}</AuthProvider>
}
