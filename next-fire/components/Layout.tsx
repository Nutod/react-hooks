import React from 'react'
import Head from 'next/head'
import { styled } from '@linaria/react'
import Nav from './Nav'

const LayoutWrapper = styled.div``

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

      <main>{children}</main>
    </LayoutWrapper>
  )
}
