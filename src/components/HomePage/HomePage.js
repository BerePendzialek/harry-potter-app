import './HomePage.css'
import createElement from '../../lib/createElement'

export default function HomePage() {
  const imageEl = createElement('img', {
    className: 'HomePage__image',
    src: 'https://picsum.photos/200.jpg',
    alt: '',
  })

  const describeEl = createElement('section', {
    className: 'HomePage__description',
    innerHTML: `
<h2>A must have quiz App for the true Harry Potter fans!</h2><br>
<h3> Play to recognize the movie characters, get their information or create your own character. <br>
Have fun!</h3>
`,
  })
  const el = createElement(
    'main',
    { className: 'HomePage', hidden: false },
    imageEl,
    describeEl
  )

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
