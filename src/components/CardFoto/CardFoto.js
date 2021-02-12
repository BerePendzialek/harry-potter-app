import './CardFoto.css'
import createElement from '../../lib/createElement'
import Button from '../Button/Button'

export default function CardFoto(name, image) {
  const questionEl = createElement('h2', {
    innerText: 'Who is this character?',
  })

  const imagesEl = createElement('img', {
    className: 'CardFoto__images',
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
    { className: 'CardFoto' },
    questionEl,
    imagesEl,
    twoAnswers,
    answerEl,
    buttonEl
  )
}
