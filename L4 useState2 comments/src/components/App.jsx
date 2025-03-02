import React, { useState } from "react";

const a = "komentarz 1";
const b = "komentarz 2";
const c = "komentarz 3";
const d = "komentarz 4";
const e = "komentarz 5";

function App() {
 const [displayA, setDisplayA] = useState(false);
 const [displayB, setDisplayB] = useState(false);
 const [displayC, setDisplayC] = useState(false);
 const [displayD, setDisplayD] = useState(false);
 const [displayE, setDisplayE] = useState(false);

const toggleDisplayA = () => {
   setDisplayA((prev) => {
     if (prev === false) {
       return true;
     }
     return false;
   });
 };

const toggleDisplayB = () => {
   setDisplayB((prev) => {
     if (prev === false) {
       return true;
     }
     return false;
   });
 };

const toggleDisplayC = () => {
   setDisplayC((prev) => {
     if (prev === false) {
       return true;
     }
     return false;
   });
 };

const toggleDisplayD = () => {
   setDisplayD((prev) => {
     if (prev === false) {
       return true;
     }
     return false;
   });
 };

const toggleDisplayE = () => {
   setDisplayE((prev) => {
     if (prev === false) {
       return true;
     }
     return false;
   });
 };

 return (
    <div className="container">
      <button className="button" onClick={toggleDisplayA}>Przycisk 1</button>
      {displayA && <p className="text">{a}</p>}

      <button className="button" onClick={toggleDisplayB}>Przycisk 2</button>
      {displayB && <p className="text">{b}</p>}

      <button className="button" onClick={toggleDisplayC}>Przycisk 3</button>
      {displayC && <p className="text">{c}</p>}

      <button className="button" onClick={toggleDisplayD}>Przycisk 4</button>
      {displayD && <p className="text">{d}</p>}

      <button className="button" onClick={toggleDisplayE}>Przycisk 5</button>
      {displayE && <p className="text">{e}</p>}
    </div>
  );
}

export default App;