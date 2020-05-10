import React from "react"

export default class DigitalCLicker extends React.Component {

  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    this.setState(previousState => {
      return {
        timesClicked: previousState.timesClicked + 1
      }
    })
  }

  render() {
    return(
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}
