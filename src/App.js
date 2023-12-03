import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import Leaderboard from "./components/Leaderboard.js";
import Contri from "./components/Contri";
import { useState, useRef } from "react";

function App() {
  const [pg, setPg] = useState("main");

  function navHandler(e) {
    console.log(e.target.attributes[0].value);
    setPg(e.target.attributes[0].value);
  }

  return (
    <div className="App">
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex justify-center space-x-4">
          <li className="hover:bg-gray-700 px-3 py-2 md:text-lg text-md font-medium rounded-md cursor-pointer">
            <a value="main" onClick={navHandler}>
              Home
            </a>
          </li>
          <li className="hover:bg-gray-700 px-3 py-2 md:text-lg text-md font-medium  rounded-md cursor-pointer">
            <a value="leaderboard" onClick={navHandler}>
              Leaderboard
            </a>
          </li>
          <li className="hover:bg-gray-700 px-3 py-2 text-lg font-medium  rounded-md cursor-pointer">
            <a value="contri" onClick={navHandler}>
              Contribute
            </a>
          </li>
        </ul>
      </nav>

      {pg == "contri" && <Contri />}
      {pg == "main" && <Main />}
      {pg == "leaderboard" && <Leaderboard />}
      <footer className="bg-gray-800 text-white p-4 text-center">
	  <h3 className="bg-red-700">To Report Image Send Screenshot to 
	  	<a href="mailto: nutornot@proton.me" className="px-2">nutornot@proton.me</a>
	  </h3>
	  <h3>Created with 🍆 by Council Of Cocks [KiiT Chapter]</h3>
      </footer>
    </div>
  );
}

export default App;
