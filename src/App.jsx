import './styles/App.css'
import Cards from './components/Cards'
import characters from './data.js'
import SearchBar from './components/SearchBar'

export default function App() {
  return (
      <div className='App'>
        <SearchBar/>
        <Cards characters={characters}/>
      </div>
  )
}
