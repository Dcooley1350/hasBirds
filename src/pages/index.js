import * as React from "react"
import planets from '../data/planet_data.js'
import Planet from '../components/Planet.js'


// styles
const pageStyles = {
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  color: '#ffffff',
  textAlign: 'center',
  width: '100%',
}
const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignContent: 'center',
  width: '100%',
  height: '100%',
}

// markup
const IndexPage = () => {
  return (

    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>Has Birds?</h1>
      <div style={flexContainer}>
        {Object.keys(planets).map(planet => (
          <Planet key={planet} planet={planets[planet]} />
        ))}
      </div>
    </main>
  )
}

export default IndexPage
