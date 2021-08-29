import React from 'react'

const modalStyle = {
  backgroundColor: 'white',
  height: '100px',
  width: '100px',
}

const Popover = ({ planet, handleTogglePopover }) => (
  <div style={modalStyle} onClick={() => handleTogglePopover(false)}>
    <p>{planet.name}</p>
  </div>
)

export default Popover