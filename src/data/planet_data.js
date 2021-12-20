import Sun from '../images/sun.png'
import Mercury from '../images/mercury.png'
import Venus from '../images/venus.png'
import Earth from '../images/earth.png'
import Mars from '../images/mars.png'
import Jupiter from '../images/jupiter.png'
import Saturn from '../images/saturn.png'
import Uranus from '../images/uranus.png'
import Neptune from '../images/neptune.png'
import Pluto from '../images/pluto.png'


const planets = {
  sun: {
    name: "Sun",
    hasBirds: false,
    justification: "The sun does not have birds. Our sun can reach temperatures of 27 million degrees farenheit. The only bird that can survive in heat like that is a Phoenix, but their existence on the sun is unconfirmed.",
    img: Sun,
    imgHeight: 70,
    imgWidth: 70,
    altDescription: "A cartoon drawing of the sun.",
  },
  mercury: {
    name: "Mercury",
    hasBirds: false,
    justification: "Mercury does not have birds. The planet has an incredibly thin atmosphere composed mostly of oxygen (O2), sodium (Na), hydrogen (H2), helium (He), and potassium (K). Assuming birds are in-fact animals, and not robots, they would suffocate immediately.",
    img: Mercury,
    imgHeight: 70,
    imgWidth: 70,
    altDescription: "A cartoon drawing of the planet Mercury.",
  },
  venus: {
    name: "Venus",
    hasBirds: false,
    justification: "Venus does not have birds. The air pressure on the surface of Venus is around 90 times the air pressure on Earth's surface. That pressure would cause any bird to be unceremoniously squished.",
    img: Venus,
    imgHeight: 70,
    imgWidth: 70,
    alt: "A cartoon drawing of the planet Venus.",
  },
  earth: {
    name: "Earth",
    hasBirds: true,
    justification: "The Earth does have birds! Can confirm. They might be robots, but that's another conversation.",
    img: Earth,
    imgHeight: 70,
    imgWidth: 70,
    altDescription: "A cartoon drawing of the planet Earth.",
  },
  mars: {
    name: "Mars",
    hasBirds: false,
    justification: "Mars does not have birds. Liquid water cannot exist on the surface of Mars due to low atmospheric pressure, which is less than 1% that of Earth's except at the lowest elevations for short periods. Birds would not survive without water to drink. Also, due to lack of water, their are not bird baths on Mars, and birds love bird baths.",
    img: Mars,
    imgHeight: 70,
    imgWidth: 70,
    altDescription: "A cartoon drawing of the planet Mars.",
  },
  jupiter: {
    name: "Jupiter",
    hasBirds: false,
    justification: "Jupiter does not have birds. Jupiter is the largest and most massive planet in our solar system. It has gravity about 2.5 times as strong as the gravity on our Earth. Gravity that strong would make it much too hard for birds to fly. Jupiter is also a gas giant, meaning it is made up entirely of gasses and has no true surface. If birds can't fly, but there is no real surface, then where does that leave them?!",
    img: Jupiter,
    imgHeight: 70,
    imgWidth: 70,
    altDescription: "A cartoon drawing of the planet Jupiter.",
  },
  saturn: {
    name: "Saturn",
    hasBirds: false,
    justification: "Saturn does not have birds. It has pretty rings though. Not as cool as birds, but still nice.",
    img: Saturn,
    imgHeight: 75,
    imgWidth: 95,
    altDescription: "A cartoon drawing of the planet Saturn.",
  },
  uranus: {
    name: "Uranus",
    hasBirds: false,
    justification: "Uranus does not have birds. It is an ice giant, meaning that most of its mass is a hot, dense fluid of 'icy' materials - water, methane and ammonia - above a small rocky core. The only birds that like ice and could live on Uranus are penguins, but there are no penguins on Uranus, unfortunately.",
    img: Uranus,
    imgHeight: 72,
    imgWidth: 75,
    altDescription: "A cartoon drawing of the planet Uranus.",
  },
  neptune: {
    name: "Neptune",
    hasBirds: false,
    justification: "Neptune has no birds. The equatorial regions of Neptune have average wind speeds on 700 miles per hour. That is faster than the speed of sound on Earth! Any poor Neptune birds would be blown out of the skies by wind like that.",
    img: Neptune,
    imgHeight: 70,
    imgWidth: 70,
    altDescription: "A cartoon drawing of the planet Neptune.",
  },
  pluto: {
    name: "Pluto",
    hasBirds: false,
    justification: "Pluto does not have birds. Pluto is not a planet. Only planets can have birds. It's science.",
    img: Pluto,
    imgHeight: 70,
    imgWidth: 70,
    altDescription: "A cartoon drawing of the planet Pluto.",
  },
}

export default planets