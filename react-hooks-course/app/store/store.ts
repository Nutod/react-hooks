// Rule of thumb: read from snapshots, mutate the source

// we need a theme state and a function to toggle it
import { proxy } from 'valtio'

export const themeState: { theme: 'light' | 'dark' } = proxy({
  theme: 'light',
})

export const toggleTheme = () => {
  themeState.theme = themeState.theme === 'light' ? 'dark' : 'light'
}
