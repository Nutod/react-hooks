import React from 'react'

export default function useHover() {
  const [hovering, setHovering] = React.useState(false)

  const mouseOver = React.useCallback(() => {
    setHovering(true)
  }, [])

  const mouseOut = React.useCallback(() => {
    setHovering(false)
  }, [])

  return {
    hovering,
    mouseOver,
    mouseOut,
  }
}
