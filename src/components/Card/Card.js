import './Card.css'
import createElement from '../../lib/createElement'

export default function Card(name, imageUrl) {
  return createElement('section', {
    className: 'Card',
    innerHTML: `
  <h2> Who is this character? </h2>
<img class= 'Card__images' src= ${imageUrl} alt= '' >
  <button>${name}</button>
  <button>RANDOM - ${name}
  </button>
  `,
  })

  // ASK FOR THE LOGIC
  function showRandomName(max) {
    const randomIndex = getRandom(`${name}`.length - 1)
    const ShownRandom = index !== randomIndex
    return ShownRandom
  }

  function getRandom(max) {
    return Math.floor(Math.random() + (max + 1))
  }
}
