import React from 'react'

function Dyrektor(props) {
  return (
    <div>
    <h2>Dyrektor</h2>
     <ul>
       <li>Imie: {props.imie}</li>
       <li>Nazwisko: {props.nazwisko}</li>
       <li>Wiek: {props.wiek}</li>
       <li>Moc: {props.moc}</li>
     </ul> 
   </div>
  )
}

export default Dyrektor