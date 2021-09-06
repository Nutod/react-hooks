import React from 'react'
import useSWR from 'swr'

// Step 1
const fetcher = (...args) => fetch(...args).then(res => res.json())

// How do we get to do data transformations?

function useUsers() {
  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/users',
    fetcher
  )

  return {
    users: data,
    isLoading: !error && !data,
    isError: error !== undefined,
    error,
  }
}

function useUser(id) {
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    fetcher
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

  console.log(users)

  if (isError) {
    return (
      <p class="zi-note error">
        <span class="zi-note-type">ERROR:</span> Data was not fetched
      </p>
    )
  }

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center' }}>
        <button class="zi-btn loading">
          <span class="zi-loading-shim">
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
      {/* <pre style={{ maxHeight: '50vh', overflow: 'scroll' }}>
        {JSON.stringify(data, null, 2)}
      </pre> */}

      {users.map(user => (
        <div class="zi-card" style={{ marginBlockEnd: '.5rem' }} key={user.id}>
          <h4>{user.name}</h4>
          <p>{user.company.catchPhrase}</p>
          <a href="">Link</a>
        </div>
      ))}
    </div>
  )
}
