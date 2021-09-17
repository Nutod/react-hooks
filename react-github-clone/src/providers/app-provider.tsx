import React, { ReactNode } from 'react'
import { useRoutes } from 'react-router-dom'
import Popular from '../components/Popular'

export default function AppProvider({ children }: { children: ReactNode }) {
  let element = useRoutes([{ path: '/', element: <Popular /> }])

  return <>{element}</>
}
