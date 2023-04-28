import Card from "./Card"
import '../styles/App.css'

export default function Cards({characters}) {
  return (
    <div className="cards">
      {
        characters.map(e => {
          return <Card 
            name={e.name}
            species={e.species}
            gender={e.gender}
            image={e.image}
          />
        })
      }
    </div>
  )
}


