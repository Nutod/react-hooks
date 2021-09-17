import React, { ReactNode } from 'react'

const ThemeContext = React.createContext(
  {} as {
    theme: 'light' | 'dark'
    toggleTheme: () => void
  }
)

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light')

  const toggleTheme = React.useCallback(() => {
    setTheme(theme => {
      if (theme === 'light') {
        document.querySelector('html')?.classList.add('dark-theme')
        return 'dark'
      } else {
        document.querySelector('html')?.classList.remove('dark-theme')
        return 'light'
      }
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeContext)

  if (!context) throw new Error('ThemeContext is not defined')

  return context
}
