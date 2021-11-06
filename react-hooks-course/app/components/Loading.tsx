import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center',
  } as React.CSSProperties,
}

type LoadingProps = {
  text: string
  speed: number
}
export default function Loading({
  text = 'Loading',
  speed = 300,
}: LoadingProps) {
  const [content, setContent] = React.useState(text)
  const intervalRef = React.useRef<number>()

  React.useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      content === text + '...'
        ? setContent(text)
        : setContent(content => content + '.')
    }, speed)

    return () => window.clearInterval(intervalRef.current)
  }, [content])

  // Call a function and that does the rest for me

  return <p style={styles.content}>{content}</p>
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300,
}
