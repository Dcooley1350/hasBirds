import React from "react"

const titleStyle = {
  color: "white",
  '&:hover': {
    color: 'green',
  }
}
const imgStyle = {
  height: "50px",
  width: "50px",
}
const hoveredStyle = {
  height: '60px',
  width: '60px',
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
      imgHover: false,
    }
    this.handlePlanetHover = this.handlePlanetHover.bind(this)
  }
  handlePlanetHover(isHovered) {
    this.setState({ imgHover: isHovered });
  }


  render() {
    const { planet } = this.props

    return (
      <div style={flexBox}>
        <h2 style={titleStyle}>{planet.name}</h2>
        <img
          onMouseOver={() => this.handlePlanetHover(true)}
          onMouseOut={() => this.handlePlanetHover(false)}
          alt={planet.altDescription}
          src={planet.img}
          style={this.state.imgHover ? hoveredStyle : imgStyle} />
      </div>
    )
  }
}

export default Planet