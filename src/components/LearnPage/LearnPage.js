import createElement from '../../lib/createElement'
import getCharacters from '../../Services/getCharacters'
import './LearnPage.css'
import Card from '../Card'
import HouseFilter from '../HouseFilter'

export default function LearnPage(hidden) {
  const houseFilter = HouseFilter(onFilterByHouse)
  const cardContainer = createElement('div')
  const el = createElement(
    'main',
    { className: 'LearnPage', hidden },
    houseFilter,
    cardContainer
  )

  let characters

  getCharacters()
    .then(data => {
      createCards(data)
      characters = data
    })

    .catch(error => handleGetCharacterError(error))

  function onFilterByHouse(house) {
    console.log('App says: ', house)
    const filteredCharacters = characters.filter(
      character => house == null || character.house === house
    )

    createCards(filteredCharacters)
  }

  function createCards(characters) {
    const cards = characters.map(character => Card(character))
    cardContainer.innerHTML = ''
    cardContainer.append(...cards)
  }

  function handleGetCharacterError(error) {
    const errorMessage = createElement(
      'strong',
      { style: 'color: crimson;' },
      error.message
    )
    el.append(errorMessage)
  }

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
