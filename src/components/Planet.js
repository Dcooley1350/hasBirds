import React from "react"

const titleStyle = {
  color: "white",
}

class Planet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    const { planet } = this.props

    return (
      <h2 style={titleStyle}>{planet.name}</h2>
    )
  }
}

export default Planet