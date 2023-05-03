import { useState } from "react"
import { Link } from "react-router-dom";

function SearchBar({onSearch}) {
  const [id, setId] = useState("")
  const randomNum = Math.floor(Math.random() * 826) + 1;

  function handleChange(e){
    setId(e.target.value)
  } 

  return (
    <div className="search">
      <input type="search" onChange={handleChange} value={id}/>
      <button onClick={() => onSearch(id)}>Agregar</button>
      <button onClick={() => onSearch(randomNum)}>Random</button>
    </div>
  )
}

export default function Nav({onSearch}) {
  return (
  <>
    <SearchBar onSearch={onSearch}/>
    <button>
      <Link to="/about">About</Link>
    </button>
    <button>
      <Link to="/home">Home</Link>
    </button>
  </>
  )
}
