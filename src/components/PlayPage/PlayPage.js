import createElement from '../../lib/createElement'
import './PlayPage.css'
import '../CardFoto'
import CardFoto from '../CardFoto'

export default function PlayPage(hidden) {
  const cardFoto = CardFoto()
  const el = createElement('main', { className: 'PlayPage', hidden }, cardFoto)

  function show() {
    el.hidden = false
  }

  function hide() {
    el.hidden = true
  }

  return {
    el,
    show,
    hide,
  }
}
