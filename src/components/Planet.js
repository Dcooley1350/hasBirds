import React from "react"
import Modal from "react-modal/lib/components/Modal"

// Styles
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

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
  },
  content: {
    height: '20vh',
    width: '30vw',
    margin: 'auto'
  }
}

Modal.setAppElement('#___gatsby')

class Planet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      planetHover: false,
    }
    this.handleToggleModal = this.handleToggleModal.bind(this)
    this.handlePlanetHover = this.handlePlanetHover.bind(this)
  }

  handleToggleModal(isClicked) {
    this.setState({ modalIsOpen: isClicked })
  }

  handlePlanetHover(isHovered) {
    this.setState({ planetHover: isHovered });
  }

  render() {
    const { planet } = this.props
    const {
      modalIsOpen,
      planetHover,
    } = this.state

    return (
      <div style={flexBox}>
        <h2 style={titleStyle}>{planet.name}</h2>
        <div
          onClick={() => this.handleToggleModal(true)}
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
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => this.handleToggleModal(false)}
          style={modalStyles}
          contentLabel="Planet info Modal"
        >
          <h2>{planet.name}</h2>
          <p>{planet.justification}</p>
          <button onClick={() => this.handleToggleModal(false)}>close</button>
        </Modal>
      </div>
    )
  }
}

export default Planet