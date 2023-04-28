
function SearchBar({onSearch}) {

  return (
    <div className="search">
      <input type="search"/>
      <button onClick={onSearch}>Agregar</button>
    </div>
  )
}

export default function Nav({onSearch}) {
  return (
    <SearchBar onSearch={onSearch}/>
  )
}
