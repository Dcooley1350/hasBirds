import React from "react"
import Popover from './PopOver'

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
      popOverOpen: false,
      planetHover: false,
    }
    this.handleTogglePopOver = this.handleTogglePopOver.bind(this)
    this.handlePlanetHover = this.handlePlanetHover.bind(this)
  }

  handleTogglePopOver(isClicked) {
    this.setState({ popOverOpen: isClicked })
  }
  handlePlanetHover(isHovered) {
    this.setState({ planetHover: isHovered });
  }

  render() {
    const { planet } = this.props
    const {
      popOverOpen,
      planetHover,
    } = this.state

    return (
      <div style={flexBox}>
        <h2 style={titleStyle}>{planet.name}</h2>
        <div
          onClick={() => this.handleTogglePopOver(true)}
          onMouseOver={() => this.handlePlanetHover(true)}
          onFocus={() => this.handlePlanetHover(true)}
          onMouseOut={() => this.handlePlanetHover(false)}
          onBlur={() => this.handlePlanetHover(false)}
          style={planetHover ? hoveredStyle : nonHoveredStyle}
          role="button"
        >
          <img
            alt={planet.altDescription}
            src={planet.img}
            style={imgStyle}
          />
        </div>
        {popOverOpen && <Popover planet={planet} handleTogglePopover={this.handleTogglePopOver} />}
      </div>
    )
  }
}

export default Planet