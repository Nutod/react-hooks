import React from 'react'
import { useUsers } from './Users'

export default function Profile() {
  const { users } = useUsers()

  return (
    <div>
      <h3>Profile</h3>

      <pre style={{ maxHeight: '50vh', overflow: 'scroll' }}>
        {JSON.stringify(users, null, 2)}
      </pre>
    </div>
  )
}
