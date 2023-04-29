import './styles/App.css'
import Cards from './components/Cards'
import Nav from './components/Nav'
import { useState } from 'react'

export default function App() {
  const [characters, setCharacters] = useState([]);

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

  function onSearch(id){
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(data => data.json())
      .then(data => {
        if (data.name) {
          setCharacters(oldChars => [...oldChars, data])
        } else {
          window.alert('¡No hay personaje con este ID!')
        }
      })
  }

  function onClose(index){
    setCharacters(characters.filter((_, i) => i !== index))
  }
  return (
    <div className='App'>
      <Nav onSearch={onSearch}/>
      <Cards characters={characters} onClose={onClose}/>
    </div>
  )
}
