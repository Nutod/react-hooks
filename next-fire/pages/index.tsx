import Head from 'next/head'
import { Page, Text, Display, Button, Grid } from '@geist-ui/react'
import Nav from '../components/Nav'

// Similar to DevTo

// Main Home Page
// Dynamic Content
// Server Rendering Content and Content Hydration on Client
// We'll route to profile based on the username
// username, users, profile

// Going over the Technical overview of the project again and again
// use firebase hooks to manage the authentication state

export default function Home() {
  return (
    <div>
      <Head>
        <title>DevTo with NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
