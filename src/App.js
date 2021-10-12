import React from "react"; 
import Price from "./Price.js";
import './App.css';

function App() {
  
  return (
    <div className="textarea">
        <p>
          <img src="./assets/rhubarb.gif" alt="logo"/>
          <br/>Rhubarb - In Plant We Trust
        </p>
        <div className="box">
          <div className="box-header">
            <Price />
          </div>

          <div className="box-body">
            <p> Coming soon fren. </p>
            <p> Very soon. </p>
          </div>

        </div>
    </div>
  );
}

export default App;
