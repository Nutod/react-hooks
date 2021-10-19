import React from 'react'
import Head from 'next/head'
import { styled } from '@linaria/react'
import Nav from './Nav'
import { Divider } from '@geist-ui/react'

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
  return (
    <LayoutWrapper>
      <Head>
        <title>{title ? title : 'DevTo with NextJS'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <Divider />

      <main>{children}</main>
    </LayoutWrapper>
  )
}
