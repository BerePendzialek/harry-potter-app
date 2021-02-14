import createElement from '../../lib/createElement'
import './CreatePage.css'
import '../CreateForm'
import CreateForm from '../CreateForm'

export default function CreatePage(hidden) {
  const form = CreateForm()
  const el = createElement('main', { className: 'CreatePage', hidden }, form)

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
