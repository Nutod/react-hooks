import React from 'react'
import useSWR from 'swr'
import Error from './Error'

// Step 1
const fetcher = (...args) => fetch(...args).then(res => res.json())

// How do we get to do data transformations?

export function useUsers() {
  // we can treat the useSWR hook as the primitive and build off of that
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/users')

  return {
    users: data,
    isLoading: !error && !data,
    isError: error !== undefined,
    error,
  }
}

function useUser(id) {
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )

  return {
    user: data,
    isLoading: !error && !data,
    isError: error !== undefined,
    error,
  }
}

export default function Users() {
  // Step 2
  const { users, isLoading, isError } = useUsers()

  //   console.log(users)

  if (isError) {
    return <Error />
  }

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center' }}>
        <button className="zi-btn loading">
          <span className="zi-loading-shim">
            <i></i>
            <i></i>
            <i></i>
          </span>
        </button>
      </div>
    )
  }

  return (
    <div>
      {users.map(user => (
        <div
          className="zi-card"
          style={{ marginBlockEnd: '.5rem' }}
          key={user.id}
        >
          <h4>{user.name}</h4>
          <p>{user.company.catchPhrase}</p>
          <a href="">Link</a>
        </div>
      ))}
    </div>
  )
}
