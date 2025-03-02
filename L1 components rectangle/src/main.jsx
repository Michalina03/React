import React from "react";
import ReactDOM from "react-dom/client";
import Square from "./components/Square";
import SmallRectangle from "./components/SmallRectangle";
import Footer from "./components/Footer";
import Rectangles from "./components/Rectangles";
import "./scss/main.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
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