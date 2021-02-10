import './Card.css'
import createElement from '../../lib/createElement'
import Button from '../Button/Button'

export default function Card(name, imageUrl) {
  const questionEl = createElement('h2', {
    innerText: 'Who is this character?',
  })
  const buttonEl = Button('Show answer')
  const imagesEl = createElement('img', {
    className: 'Card__images',
    src: `${imageUrl}`,
    alt: '',
  })
  const twoAnswers = createElement('div', {
    innerHTML: `<button>${name}</button>
  <button> Other Random Name
  </button>`,
  })
  const answerEl = createElement('p', { hidden: true, innerText: `${name}` })

  buttonEl.addEventListener('click', () => {
    answerEl.hidden = !answerEl.hidden
  })
  return createElement(
    'section',
    { className: 'Card' },
    questionEl,
    imagesEl,
    twoAnswers,
    buttonEl,
    answerEl
  )
}

// ASK FOR THE LOGIC
function showRandomName(max) {
  const randomIndex = getRandom(`${name}`.length - 1)
  const ShownRandom = index !== randomIndex
  return ShownRandom
}

function getRandom(max) {
  return Math.floor(Math.random() + (max + 1))
}
