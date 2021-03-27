import React from 'react'

interface ThemeInterface {
  theme: string
}

export const ThemeContext = React.createContext<null | ThemeInterface>({
  theme: 'light',
})

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeContext.Provider value={{ theme: 'light' }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeContext)

  return context
}
