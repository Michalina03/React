import React, { useState } from "react";
import k1 from "./img/k1.jpg";
import k2 from "./img/k2.jpg";
import k3 from "./img/k3.jpg";

function A1() {
  const [state, setState] = useState(0);

  const dodaj = () => {
    setState(state + 1);
  };

  const reset = () => {
    setState(0);
  };

  const odejmij = () => {
    setState(state - 1);
  };

  const img = () => {
    if (state < 0) {
      return <img src={k1} alt="" />;
    } 
    else if (state >= 0 && state < 8) {
      return <img src={k2} alt="" />;
    } 
    else {
      return <img src={k3} alt="" />;
    }
  };

  return (
    <div>
      <p>State: {state}</p>
      <button onClick={dodaj}>Dodaj</button>
      <button onClick={odejmij}>Odejmij</button>
      <button onClick={reset} RESET>Reset</button>
      <div>{img()}</div>
    </div>
  );
}

export default A1;
