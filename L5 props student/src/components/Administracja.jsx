import React from 'react'

function Administracja(props) {
  return (
    <div>
    <h2>Administracja</h2>
     <ul>
       <li>Imie: {props.imie}</li>
       <li>Nazwisko: {props.nazwisko}</li>
       <li>Wiek: {props.wiek}</li>
       <li>Rola: {props.rola}</li>
     </ul> 
   </div>
  )
}

export default Administracja