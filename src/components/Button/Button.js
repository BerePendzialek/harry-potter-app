import createElement from '../../lib/createElement'
import './Button.css'

export default function Button(text, onClick) {
  const el = createElement(
    'button',
    {
      className: 'Button',
    },
    text
  )

  el.addEventListener('click', onClick)

  function toogle() {
    el.classList.toogle('selected')
  }

  function updateText(text) {
    el.innerText = text
  }

  return { el, updateText, toogle }
}
