import createElement from '../../lib/createElement'
import './Navigation.css'

import homeSVG from '@fortawesome/fontawesome-free/svgs/solid/home.svg'
import playSVG from '@fortawesome/fontawesome-free/svgs/solid/play-circle.svg'
import learnSVG from '@fortawesome/fontawesome-free/svgs/solid/chalkboard-teacher.svg'
import createCharacterSVG from '@fortawesome/fontawesome-free/svgs/solid/plus-square.svg'

const buttonsConfig = [
  { svgPath: homeSVG, text: 'Home' },
  { svgPath: playSVG, text: 'Play' },
  { svgPath: learnSVG, text: 'Learn' },
  { svgPath: createCharacterSVG, text: '+ Character' },
]

export default function Navigation() {
  const buttons = buttonsConfig.map(({ svgPath, text }) => {
    const button = createElement(
      'button',
      { className: 'Navigation__button' },
      createElement('img', { src: svgPath, alt: '' }),
      text
    )

    //button.addEventListener('click', () => onNavigate(text))
    return button
  })

  return createElement('nav', { className: 'Navigation' }, ...buttons)
}
