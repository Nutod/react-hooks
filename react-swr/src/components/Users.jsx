import React from 'react'
import useSWR from 'swr'

// Step 1
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Users() {
  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/users',
    fetcher
  )

  console.log(data)

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
