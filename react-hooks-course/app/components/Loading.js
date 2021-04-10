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
  const intervalId = React.useRef(null)

  React.useEffect(() => {
    intervalId.current = window.setInterval(
      () => setContent(content => content + '.'),
      speed
    )

    return () => window.clearInterval(intervalId.current)
  }, [])

  React.useEffect(() => {
    if (content === text + '....') {
      setContent(text)
    }
  }, [content])

  // componentDidMount () {
  //   const { speed, text } = this.props

  //   this.interval = window.setInterval(() => {
  //     this.state.content === text + '...'
  //       ? this.setState({ content: text })
  //       : this.setState(({ content }) => ({ content: content + '.' }))
  //   }, speed)
  // }
  // componentWillUnmount () {
  //   window.clearInterval(this.interval)
  // }

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
