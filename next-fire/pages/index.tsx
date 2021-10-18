import Head from 'next/head'
import { Page, Text, Display, Button, Grid } from '@geist-ui/react'

// Similar to DevTo

// Main Home Page
// Dynamic Content
// Server Rendering Content and Content Hydration on Client
// We'll route to profile based on the username
// username, users, profile

// Going over the Technical overview of the project again and again

export default function Home() {
  const gh = 'https://github.com/geist-org/react'
  const docs = 'https://react.geist-ui.dev'
  const redirect = (url: string) => {
    window.open(url)
  }

  return (
    <div>
      <Head>
        <title>Geist UI with NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page dotBackdrop width="800px" padding={0}>
        <Display
          title="Geist UI"
          caption={
            <>
              Welcome to{' '}
              <Text span b>
                Geist UI
              </Text>{' '}
              and start learning more !
            </>
          }
        >
          {/* <Image src="/geist-banner.png" draggable={false} /> */}
        </Display>
        <Grid.Container justify="center" gap={3} mt="100px">
          <Grid xs={20} sm={7} justify="center">
            <Button
              shadow
              type="secondary-light"
              width="100%"
              onClick={() => redirect(gh)}
            >
              GitHub Repo
            </Button>
          </Grid>
          <Grid xs={0} sm={3} />
          <Grid xs={20} sm={7} justify="center">
            <Button width="100%" onClick={() => redirect(docs)}>
              Documentation Site
            </Button>
          </Grid>
        </Grid.Container>
      </Page>
    </div>
  )
}
