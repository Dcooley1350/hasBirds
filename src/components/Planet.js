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
const modalStyle = {
  backgroundColor: 'white',
  height: '20px',
  width: '20px',
}

class Planet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planetClick: false,
      planetHover: false,
    }
    this.handlePlanetClick = this.handlePlanetClick.bind(this)
    this.handlePlanetHover = this.handlePlanetHover.bind(this)
    this.modalConditionalRender = this.modalConditionalRender.bind(this)
  }

  handlePlanetClick(isClicked) {
    this.setState({ planetClick: isClicked })
  }
  handlePlanetHover(isHovered) {
    this.setState({ planetHover: isHovered });
  }

  modalConditionalRender() {
    const { planetClick } = this.state
    if (planetClick) {
      return (
        <div style={modalStyle}>
          HI!
        </div>
      )
    }
  }

  render() {
    const { planet } = this.props

    return (
      <div style={flexBox}>
        <h2 style={titleStyle}>{planet.name}</h2>
        <div
          onClick={() => this.handlePlanetClick(true)}
          onMouseOver={() => this.handlePlanetHover(true)}
          onFocus={() => this.handlePlanetHover(true)}
          onMouseOut={() => this.handlePlanetHover(false)}
          onBlur={() => this.handlePlanetHover(false)}
          style={this.state.planetHover ? hoveredStyle : nonHoveredStyle}
          role="button"
        >
          <img
            alt={planet.altDescription}
            src={planet.img}
            style={imgStyle}
          />
        </div>
        {this.modalConditionalRender()}
      </div>
    )
  }
}

export default Planet