function Animal(props) {
  return (
    <div className="animal">
        <h2>PolskiSsak: {props.nazwa}</h2>
        <ul>
          <li>Czy chroniony: {props.czyChroniony ? "Tak" : "Nie"}</li>
          <li>Waga: {props.waga}</li>
          <li>Środowisko: {props.srodowisko}</li>
        </ul>
        <img src={props.img} alt="" />
    </div>
  )
}
export default Animal;