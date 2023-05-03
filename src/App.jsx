import './styles/App.css'
import Cards from './components/Cards'
import Nav from './components/Nav'
import { useState } from 'react'
import { Router, Route, Routes } from 'react-router-dom'
import About from './components/About'

export default function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id){
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(data => data.json())
      .then(data => {
        if (data.name) {
          const arr = characters.filter(e => e.name == data.name)
          if(arr.length === 0){
            setCharacters(oldChars => [...oldChars, data])
          } else {
            window.alert('¡Ya existe esa card!')
          }

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
      <Routes>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  )
}
