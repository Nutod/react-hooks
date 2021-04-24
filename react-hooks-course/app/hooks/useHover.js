import React from 'react'

export default function useHover() {
  const [hovering, setHovering] = React.useState(false)

  const handlers = React.useMemo(
    () => ({
      mouseOver: () => setHovering(true),
      mouseOut: () => setHovering(false),
    }),
    []
  )

  return [hovering, handlers]
}
