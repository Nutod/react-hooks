import React, { useState } from 'react'
import { useMantineTheme } from '@mantine/core'
import logo from './logo.svg'

// Config and then defaults
// Use a custom Context Provider?

function App() {
  const [count, setCount] = useState(0)

  const theme = useMantineTheme()

  console.log(theme)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Heading One</h1>
        <p
          style={{
            color: `${theme.primaryColor}`,
            fontFamily: theme.fontFamily,
          }}
        >
          Hello Vite + React!
        </p>
        <p>
          <button type="button" onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
