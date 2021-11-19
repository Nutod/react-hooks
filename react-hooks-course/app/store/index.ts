import create from 'zustand'

type State = {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export const useStore = create<State>(set => ({
  theme: 'light',
  toggleTheme: () =>
    set(state => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}))
