
export default function Card(props) {
  return (
    <div className='card'>
      <button style={{margin: "5px"}} onClick={props.onClose}>X</button>
      <span>{props.name}</span>
      <p>{props.species}</p>
      <p>{props.gender}</p>
      <img src={props.image}/>
    </div>
  )
}
