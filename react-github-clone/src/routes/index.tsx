import React from 'react'
import { useRoutes } from 'react-router-dom'
import Battle from '../components/Battle'
import Container from '../components/Container'
import Nav from '../components/Nav'
import Popular from '../components/Popular'
import Result from '../components/Result'

export const AppRoutes = () => {
  let element = useRoutes([
    { path: '/', element: <Popular /> },
    { path: 'battle', element: <Battle /> },
    { path: 'battle/result', element: <Result /> },
  ])

  return (
    <>
      <Nav />
      <Container>{element}</Container>
    </>
  )
}
