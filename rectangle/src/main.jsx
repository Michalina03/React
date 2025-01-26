import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Square from "./components/Square";
import SmallRectangle from "./components/SmallRectangle";
import Footer from "./components/Footer";
import Rectangles from "./components/Rectangles";
import "./scss/Rectangles.css"
import "./scss/Footer.css"
import "./scss/Square.css"
import "./scss/SmallRectangle.css"
import "./scss/index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
    <Square/>
    <SmallRectangle/>
    <Footer/>
    <div className="rectangles-container">
      <Rectangles />
      <Rectangles />
      <Rectangles />
    </div>
  </React.StrictMode>
)