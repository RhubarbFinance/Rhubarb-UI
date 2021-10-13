import React from "react"; 
import Price from "./Price.js";
import './App.css';

function App() {
  
  return ( <>
    <div className="textarea">
        <p>
          <img src="./logo192.png" alt="logo"/>
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

    <div className="textarea">
        <div className="box">
          <div className="box-header">
            
          </div>

          <div className="box-body">
            <p> Plant your LP-seed and see you $rhub growing over time</p>
            <p> Rhubarb is the first farm collaterized by market-making bots: earn juicy $rhub by traditional LP incentivization, as in traditional 
              farms, <b>and</b> some extra $rhub via our secret <i>non-custodial</i> recipe of rhubarb marmelade on stable-coin LP
            </p>
          </div>

        </div>
    </div>
  </>);
}

export default App;
