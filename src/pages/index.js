import * as React from "react"
import { Helmet } from "react-helmet"

import planets from '../data/planet_data.js'
import Planet from '../components/Planet.js'
import favicon16 from '../images/favicon/favicon-16x16.png'
import favicon32 from '../images/favicon/favicon-32x32.png'

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
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  width: '100%',
  height: '100%'
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Helmet
        title="Has birds?"
        meta={[
          {
            name: "description",
            content: "Has birds?",
          },
          {
            name: "keywords",
            content: "bird, birds",
          },
        ]}
        link={[
          { rel: "icon", type: "image/png", sizes: "16x16", href: `${favicon16}` },
          { rel: "icon", type: "image/png", sizes: "32x32", href: `${favicon32}` },
        ]}
      />
      <title>Has Birds?</title>
      <h1 style={headingStyles}>Has Birds?</h1>
      <div style={flexContainer}>
        {Object.keys(planets).map((planet, index) => (
          <Planet key={index} planet={planets[planet]} />
        ))}
      </div>
    </main>
  )
}

export default IndexPage
