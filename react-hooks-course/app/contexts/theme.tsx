import React, { ReactNode } from 'react'

const { Consumer, Provider } = React.createContext({})

export const ThemeConsumer = Consumer
export const ThemeProvider = Provider

function useMountedCallback<T>(toggleCb: () => () => void, options: T[]) {
  return React.useCallback(toggleCb(), options)
}

const ThemeContext = React.createContext(
  {} as {
    theme: 'light' | 'dark'
    toggleTheme: () => void
  }
)

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light')

  function toggleCb() {
    return () => {
      setTheme(theme => (theme === 'dark' ? 'light' : 'dark'))
    }
  }

  const toggleTheme = useMountedCallback(toggleCb, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
