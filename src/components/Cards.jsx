import Card from "./Card"
import '../styles/App.css'

export default function Cards({characters, onClose}) {
  return (
    <div className="cards">
      {
        characters.map((e,i) => {
          return <Card 
            name={e.name}
            species={e.species}
            gender={e.gender}
            image={e.image}
            onClose={() => onClose(i)}
            key={i}
            id={i}
          />
        })
      }
    </div>
  )
}


