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
  },
}

export default function Loading({ text = 'Loading', speed = 300 }) {
  const [content, setContent] = React.useState(text)
  const interval = React.useRef(null)

  React.useEffect(() => {
    interval.current = window.setInterval(
      () => setContent(content => content + '.'),
      speed
    )

    if (content === `${text}...`) {
      window.clearInterval(interval.current)
      setContent(text)
    }

    return () => window.clearInterval(interval.current)
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
