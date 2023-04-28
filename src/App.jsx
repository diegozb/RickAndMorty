import './styles/App.css'
import Cards from './components/Cards'
import Nav from './components/Nav'
import { useState } from 'react'

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [showCard, setShowCard] = useState(true)

    const arr = [{
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
        name: 'Earth (C-137)',
        url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    }]

  function onSearch(){

    setCharacters(e => [...e, arr])
  }
  return (
    <div className='App'>
      <Nav onSearch={onSearch}/>
      <Cards characters={characters}/>
    </div>
  )
}
