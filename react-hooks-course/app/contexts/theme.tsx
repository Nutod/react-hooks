import React, { ReactNode } from 'react'

const { Consumer, Provider } = React.createContext({})

export const ThemeConsumer = Consumer
export const ThemeProvider = Provider

const ThemeContext = React.createContext(
  {} as {
    theme: 'light' | 'dark'
    toggleTheme: () => void
  }
)

function useToggle<T>(initialValue: T, options: [T, T]) {
  const [state, setState] = React.useState(initialValue)

  const toggle = (value?: React.SetStateAction<T>) => {
    if (typeof value !== 'undefined') {
      setState(value)
    } else {
      setState(current => {
        if (current === options[0]) {
          return options[1]
        }

        return options[0]
      })
    }
  }

  return [state, toggle] as const
}

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, toggleTheme] = useToggle<'light' | 'dark'>('light', [
    'dark',
    'light',
  ])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const context = React.useContext(ThemeContext)

  if (!context) throw new Error('ThemeContext is not defined')

  return context
}
