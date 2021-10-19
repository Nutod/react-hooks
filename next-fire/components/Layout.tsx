import React from 'react'
import Head from 'next/head'
import { Divider } from '@geist-ui/react'
import { AuthProvider, useFirebaseApp } from 'reactfire'
import { getAuth } from '@firebase/auth'
import { styled } from '@linaria/react'
import Nav from './Nav'

const LayoutWrapper = styled.div`
  min-height: 100vh;
  padding: 2rem;
`

type LayoutProps = {
  children: React.ReactNode
  title?: string
}

// Add other meta tags here

export default function Layout({ children, title }: LayoutProps) {
  const app = useFirebaseApp()
  const auth = getAuth(app)

  return (
    <AuthProvider sdk={auth}>
      <LayoutWrapper>
        <Head>
          <title>{title ? title : 'DevTo with NextJS'}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />

        <Divider />

        <main>{children}</main>
      </LayoutWrapper>
    </AuthProvider>
  )
}
