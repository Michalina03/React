import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Polska from "./components/Polska";
import Francja from "./components/Francja";
import Belgia from "./components/Belgia";
import "./scss/main.css"


function Navigation(){
  return(
    <div>
      <nav>
        <ul>
          <li>
            <Link to ="/polska"> Przeejdz do Polski</Link>
          </li>
          <li>
            <Link to ="/francja">Przejdz do Francji</Link>
          </li>
          <li>
            <Link to = "/belgia">Przejdz do Belgi</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/polska" element={<Polska/>}/>
      <Route path="/francja" element={<Francja/>}/>
      <Route path="/belgia" element={<Belgia/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
