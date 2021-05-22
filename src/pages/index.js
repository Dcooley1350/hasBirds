import * as React from "react"
import image from '../images/Universe.jpg'
import planets from '../data/planet_data.js'

// styles
const pageStyles = {
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundImage: `url(${image})`,
  height: '100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  color: '#ffffff',
}

// markup
const IndexPage = () => {
  return (

    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>Has Birds?</h1>
    </main>
  )
}

export default IndexPage
