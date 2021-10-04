import React, { CSSProperties } from 'react'
import PropTypes from 'prop-types'

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center',
  } as CSSProperties,
}

function useInterval(fn: () => void, interval: number) {
  const [active, setActive] = React.useState(false)
  const intervalRef = React.useRef<number>()

  const start = () => {
    setActive(true)
    intervalRef.current = window.setInterval(fn, interval)
  }

  const stop = () => {
    setActive(false)
    window.clearInterval(intervalRef.current)
  }

  const toggle = () => {
    if (active) {
      stop()
    } else {
      start()
    }
  }

  return { start, stop, toggle, active }
}

export default function Loading({ text = 'Loading', speed = 300 }) {
  const [content, setContent] = React.useState(text)
  const interval = useInterval(() => {
    content === text + '...' ? setContent(text) : setContent(c => c + '.')
  }, speed)

  React.useEffect(() => {
    interval.start()
    return interval.stop
  }, [content])

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
