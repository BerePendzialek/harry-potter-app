import './Card.css'
import createElement from '../../lib/createElement'
import Button from '../Button/Button'

export default function Card(name, image) {
  const questionEl = createElement('h2', {
    innerText: 'Who is this character?',
  })

  const imagesEl = createElement('img', {
    className: 'Card__images',
    src: `${image}`,
    alt: '',
  })
  const twoAnswers = createElement('div', {
    innerHTML: `<button>${name}</button>
  <button> Other Random Name
  </button>`,
  })

  const answerEl = createElement('p', { hidden: true, innerText: `${name}` })

  const buttonEl = Button('Show answer', () => {
    answerEl.hidden = !answerEl.hidden
  })

  return createElement(
    'section',
    { className: 'Card' },
    questionEl,
    imagesEl,
    twoAnswers,
    answerEl,
    buttonEl
  )
}

// ASK FOR THE LOGIC
function showRandomName(max) {
  const randomIndex = getRandom(`${name}`.length - 1)
  const shownRandom = index !== randomIndex
  return shownRandom
}

function getRandom(max) {
  return Math.floor(Math.random() + (max + 1))
}
