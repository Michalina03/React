import React from 'react'

function Nauczyciel(props) {
  return (
    <div>
    <h2>Nauczyciel</h2>
     <ul>
       <li>Imie: {props.imie}</li>
       <li>Nazwisko: {props.nazwisko}</li>
       <li>Wiek: {props.wiek}</li>
       <li>Przedmiot: {props.przedmiot}</li>
     </ul> 
   </div>
  )
}

export default Nauczyciel