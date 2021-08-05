import React from 'react'
import { Text, Title, useMantineTheme } from '@mantine/core'

export default function Sidebar() {
  const theme = useMantineTheme()

  console.log(theme)

  return (
    <>
      <p>Sidebar...</p>
      <Text component="h1">Level Heading</Text>
      <Text component="h2">Level Heading</Text>
      <Text component="h3">Level Heading</Text>
      <Text component="h4">Level Heading</Text>
      <Text component="h5">Level Heading</Text>
      <Text component="p">Heading One</Text>

      <Title order={1}>This is h1 title</Title>
      <Title order={2}>This is h2 title</Title>
      <Title order={3}>This is h3 title</Title>
      <Title order={4}>This is h4 title</Title>
      <Title order={5}>This is h5 title</Title>
      <Title order={6}>This is h6 title</Title>
    </>
  )
}
