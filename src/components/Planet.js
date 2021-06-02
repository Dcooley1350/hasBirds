import React from "react"

const titleStyle = {
  color: 'white',
}
const imgStyle = {
  height: '100%',
  width: '100%',
}
const nonHoveredStyle = {
  height: '50px',
  width: '50px',
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
        <div
          onMouseOver={() => this.handlePlanetHover(true)}
          onFocus={() => this.handlePlanetHover(true)}
          onMouseOut={() => this.handlePlanetHover(false)}
          onBlur={() => this.handlePlanetHover(false)}
          style={this.state.imgHover ? hoveredStyle : nonHoveredStyle}
          role="button"
        >
          <img
            alt={planet.altDescription}
            src={planet.img}
            style={imgStyle}
          />
        </div>
      </div>
    )
  }
}

export default Planet