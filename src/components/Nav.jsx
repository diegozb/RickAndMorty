import { useState } from "react"

function SearchBar({onSearch}) {
  const [id, setId] = useState("")

  function handleChange(e){
    setId(e.target.value)
  } 

  return (
    <div className="search">
      <input type="search" onChange={handleChange} value={id}/>
      <button onClick={() => onSearch(id)}>Agregar</button>
    </div>
  )
}

export default function Nav({onSearch}) {
  return (
    <SearchBar onSearch={onSearch}/>
  )
}
