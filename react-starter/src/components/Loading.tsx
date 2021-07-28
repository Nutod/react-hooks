import React from 'react'

export default function Loading({ text = 'Loading', speed = 300 }) {
  const [content, setContent] = React.useState(text)
  const interval = React.useRef<number>()

  React.useEffect(() => {
    interval.current = window.setInterval(() => {
      if (content === `${text}...`) {
        setContent(text)
      } else {
        setContent(content => content + '.')
      }
    }, speed)

    return () => window.clearInterval(interval.current)
  }, [content])

  return <p>{content}</p>
}
