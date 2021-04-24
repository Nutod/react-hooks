import React from 'react'

interface HoverState {
  hovering: boolean
}

export default class Hover extends React.Component<
  {
    children: (param: boolean) => React.ReactElement | null
  },
  {
    hovering: boolean
  }
> {
  state = { hovering: false }

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
