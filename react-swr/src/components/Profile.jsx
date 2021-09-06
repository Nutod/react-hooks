import React from 'react'
import Loading from './Loading'
import { useUsers } from './Users'

export default function Profile() {
  const { users, isLoading, isError } = useUsers()

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <h3>Profile</h3>

      <pre style={{ maxHeight: '50vh', overflow: 'scroll' }}>
        {JSON.stringify(users, null, 2)}
      </pre>
    </div>
  )
}
