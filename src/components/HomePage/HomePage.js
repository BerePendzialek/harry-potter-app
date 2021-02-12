import './HomePage.css'
import createElement from '../../lib/createElement'

export default function HomePage(cards) {
  const el = createElement('main', { className: 'HomePage', hidden: false })

  return el
}
