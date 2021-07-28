import { proxy } from 'valtio'

interface IThemeContext {
  theme: 'light' | 'dark'
}

export const ThemeContext: IThemeContext = proxy({
  theme: 'light',
})

export function toggleTheme() {
  ThemeContext.theme = ThemeContext.theme === 'dark' ? 'light' : 'dark'
}
