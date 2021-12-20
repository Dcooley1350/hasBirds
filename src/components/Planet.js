import React from "react"
import Modal from "react-modal/lib/components/Modal"

// Styles
const titleStyle = {
  color: 'white',
}
const flexBox = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  height: '150px',
  width: '110px'
}
const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
  },
  content: {
    height: '30vh',
    width: '40vw',
    margin: 'auto'
  }
}
const modalTitle = {
  textAlign: 'center',
}
const justificationStyle = {
  textIndent: '20px'
}
const buttonStyle = {
  background: 'none',
  cursor: 'pointer',
  border: 0,
  margin: 0,
  padding: 0
}
const buttonBox = {
  textAlign: 'right'
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
    this.handleModalClose = this.handleModalClose.bind(this)
  }

  handleToggleModal(isClicked) {
    this.setState({ modalIsOpen: isClicked })
  }

  handlePlanetHover(isHovered) {
    this.setState({ planetHover: isHovered });
  }

  handleModalClose() {
    this.handleToggleModal(false)
    this.handlePlanetHover(false)
  }

  render() {
    const { planet } = this.props
    const {
      modalIsOpen,
      planetHover,
    } = this.state

    // Set planet size and hover
    var imgStyle
    if(planetHover) {
      imgStyle = {
        height: `${planet.imgHeight + 10}px`,
        width: `${planet.imgWidth + 10}px`
      }
    } else {
      imgStyle = {
        height: `${planet.imgHeight}px`,
        width: `${planet.imgWidth}px`
      }
    }
    return (
      <div style={flexBox}>
        <h2 style={titleStyle}>{planet.name}</h2>
        <button
          onClick={() => this.handleToggleModal(true)}
          onMouseOver={() => this.handlePlanetHover(true)}
          onFocus={() => this.handlePlanetHover(true)}
          onMouseOut={() => this.handlePlanetHover(false)}
          onBlur={() => this.handlePlanetHover(false)}
          style={buttonStyle}
        >
          <img
            alt={planet.altDescription}
            src={planet.img}
            style={imgStyle}
          />
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => this.handleModalClose()}
          shouldReturnFocusAfterClose={false}
          style={modalStyles}
          contentLabel="Planet info Modal"
        >
          <div style={buttonBox}>
            <button onClick={() => this.handleModalClose()}>X</button>
          </div>
          <h2 style={modalTitle}>{planet.name}</h2>
          <p style={justificationStyle}>{planet.justification}</p>
        </Modal>
      </div>
    )
  }
}

export default Planet