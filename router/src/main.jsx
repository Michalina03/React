import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Polska from "./components/Polska";
import Rosja from "./components/Rosja";
import Belgia from "./components/Belgia";
import Niemcy from "./components/Niemcy";
import Ukraina from "./components/Ukraina";
import "./scss/main.css"


function Navigation(){
  return(
    <div>
      <nav>
        <ul>
          <li>
            <Link to ="/polska"> Przejdz do Polski</Link>
          </li>
          <li>
            <Link to ="/rosja">Przejdz do Rosja</Link>
          </li>
          <li>
            <Link to = "/belgia">Przejdz do Belgi</Link>
          </li>
          <li>
            <Link to = "/niemcy">Przejdz do Niemcy</Link>
          </li>
          <li>
            <Link to = "/ukraina">Przejdz do Ukraina</Link>
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
      <Route path="/rosja" element={<Rosja/>}/>
      <Route path="/belgia" element={<Belgia/>}/>
      <Route path="/niemcy" element={<Niemcy/>}/>
      <Route path="/ukraina" element={<Ukraina/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
