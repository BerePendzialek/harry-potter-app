import './App.css'
import Grid from '../Grid'
import AppHeader from '../AppHeader'
import HomePage from '../HomePage'
import PlayPage from '../PlayPage'
import LearnPage from '../LearnPage'
import CreatePage from '../CreatePage'
import Navigation from '../Navigation'

export default function App() {
  const header = AppHeader('Harry Potter App')
  const homePage = HomePage()
  const playPage = PlayPage()
  const learnPage = LearnPage()
  const createPage = CreatePage()
  const navigation = Navigation(onNavigate)

  const grid = Grid(
    header,
    homePage,
    playPage,
    learnPage,
    createPage,
    navigation
  )
  document.body.append(grid)

  onNavigate('Home')

  function onNavigate(text) {
    if (text === 'Home') {
      homePage.show()
      playPage.hide()
      learnPage.hide()
      createPage.hide()
      header.setText('Harry Potter App')
    }

    if (text === 'Play') {
      homePage.hide()
      playPage.show()
      learnPage.hide()
      createPage.hide()
      header.setText('Play')
    }

    if (text === 'Learn') {
      homePage.hide()
      playPage.hide()
      learnPage.show()
      createPage.hide()
      header.setText('Learn more')
    }

    if (text === 'Character') {
      homePage.hide()
      playPage.hide()
      learnPage.hide()
      createPage.show()
      header.setText('Create yor character')
    }
  }
}
