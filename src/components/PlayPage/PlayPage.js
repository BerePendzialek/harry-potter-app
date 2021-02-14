import createElement from '../../lib/createElement'
import './PlayPage.css'
import '../CardFoto'
import CardFoto from '../CardFoto'

export default function PlayPage() {
  const cardFoto = CardFoto(cardsFoto)

  return createElement(
    'main',
    { className: 'PlayPage', hidden: true },
    cardFoto
  )
}
