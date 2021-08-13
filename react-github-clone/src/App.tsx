import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          <button
            className="surface-1"
            type="button"
            onClick={() => setCount(count => count + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          <button
            className="surface-2"
            type="button"
            onClick={() => setCount(count => count + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          <button
            className="surface-3"
            type="button"
            onClick={() => setCount(count => count + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          <button
            className="surface-4"
            type="button"
            onClick={() => setCount(count => count + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <input type="text" />
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
