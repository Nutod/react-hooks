import React from 'react'

export const ThemeContext = React.createContext<{ theme: string }>({
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
