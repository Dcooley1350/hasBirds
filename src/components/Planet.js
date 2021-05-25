import React from "react"

const titleStyle = {
  color: "white",
}
const imgStyle = {
  height: "50px",
  width: "50px",
}
const flexBox = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
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
      <div style={flexBox}>
        <h2 style={titleStyle}>{planet.name}</h2>
        <img alt={planet.altDescription} src={planet.img} style={imgStyle} />
      </div>
    )
  }
}

export default Planet