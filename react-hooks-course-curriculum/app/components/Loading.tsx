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

export default function Loading({ text = 'Loading', speed = 300 }) {
  const [content, setContent] = React.useState(text)

  React.useEffect(() => {
    let intervalId = window.setInterval(() => {
      if (content === text + '...') {
        setContent(text)
      } else {
        setContent(content => content + '.')
      }
    }, speed)

    return () => window.clearInterval(intervalId)
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
