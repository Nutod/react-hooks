import React from 'react'

interface HoverState {
  hovering: boolean
}

export default class Hover extends React.Component<
  {
    children: () => React.ReactElement | null
  },
  HoverState
> {
  state: HoverState = { hovering: false }

  mouseOver = () => this.setState({ hovering: true })
  mouseOut = () => this.setState({ hovering: false })

  render() {
    return (
      <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        {this.props.children(this.state.hovering)}
      </div>
    )
  }
}
