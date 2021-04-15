import React from 'react'
import PropTypes from 'prop-types'
import useHover from '../hooks/useHover'

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
  } as React.CSSProperties,
  tooltip: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '160px',
    bottom: '100%',
    left: '50%',
    marginLeft: '-80px',
    borderRadius: '3px',
    backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
    padding: '7px',
    marginBottom: '5px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px',
  } as React.CSSProperties,
}

export default function Tooltip({ text, children }) {
  const { hovering, mouseOut, mouseOver } = useHover()

  return (
    <div style={styles.container} onMouseOut={mouseOut} onMouseOver={mouseOver}>
      {hovering === true && <div style={styles.tooltip}>{text}</div>}
      {children}
    </div>
  )
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
}
