import { useState } from 'react'
import EditCharacter from './pages/EditCharacter'
import ReadCharacters from './pages/ReadCharacter'
import { Link, useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Card from './components/Card'
import './App.css'
import CreateCharacter from './pages/CreateCharacter'
import CharacterInfo from './pages/CharacterInfo'

function App() {
  let element = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/explore',
      element: <ReadCharacters />
    },
    {
      path: '/explore/edit/:id',
      element: <EditCharacter d />
    },
    {
      path: '/new',
      element: <CreateCharacter />
    },
    {
      path: '/explore/info/:id',
      element: <CharacterInfo />
    }
  ])

  return (
    <div className="App">
      <div className='header'>
        <h1>Fortnite Skins</h1>
        <Link to="/explore"><button className='headerBtn'>EXPLORE SKINS 🔍</button></Link>
        <Link to="/"><button className='headerBtn'>HOME 🚪</button></Link>
        <Link to="/new"><button className='headerBtn'>CREATE SKIN 🎨</button></Link>
      </div>
      {element}
    </div>
  )
}

export default App
