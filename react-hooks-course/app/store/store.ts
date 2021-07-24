// Rule of thumb: read from snapshots, mutate the source

// we need a theme state and a function to toggle it
import { proxy } from 'valtio'

export const state: { theme: 'light' | 'dark' } = proxy({
  theme: 'light',
})

export const toggleTheme = () => {
  state.theme = state.theme === 'light' ? 'dark' : 'light'
}
