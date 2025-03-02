const srednia = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;


function Uczen(props) {
 return (
   <div>
    <h2>Uczeń</h2>
     <ul>
       <li>Imie: {props.imie}</li>
       <li>Nazwisko: {props.nazwisko}</li>
       <li>Wiek: {props.wiek}</li>
       <li>Czy jest studentem: {props.czStudent ? "Tak" : "Nie"}</li> 
       <li>Oceny: {props.oceny}</li>
       <li>Średnia: {srednia(props.oceny)}</li>
     </ul> 
   </div>
 );
}


export default Uczen;