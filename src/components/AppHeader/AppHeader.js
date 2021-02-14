import './AppHeader.css'
import createElement from '../../lib/createElement'

export default function AppHeader(title) {
  const el = createElement('header', {
    className: 'AppHeader',
    innerHTML: `<h1>${title}</h1>`,
  })

  setText(title)
  function setText(title) {
    el.innerHTML = `
  <h1>${title}</h1>
  `
  }

  return {
    el,
    setText,
  }
}
