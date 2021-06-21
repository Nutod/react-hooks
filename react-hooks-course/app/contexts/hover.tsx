import React, { ReactNode } from 'react'

interface IHoverContext {
  hovering: boolean
  mouseOn: () => void
  mouseOut: () => void
}

export function useHover() {
  const [hovering, setHovering] = React.useState(false)

  const mouseOn = React.useCallback(() => {
    setHovering(true)
  }, [])

  const mouseOut = React.useCallback(() => {
    setHovering(false)
  }, [])

  return { hovering, mouseOn, mouseOut }
}

const HoverContext = React.createContext({} as IHoverContext)

export function HoverContextProvider({ children }: { children: ReactNode }) {
  const { hovering, mouseOn, mouseOut } = useHover()

  return (
    <HoverContext.Provider value={{ hovering, mouseOn, mouseOut }}>
      {children}
    </HoverContext.Provider>
  )
}

export function useHoverContext() {
  const context = React.useContext(HoverContext)

  if (!context) throw new Error('Context is not defined')

  return context
}
