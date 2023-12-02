import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Leaderboard from './components/Leaderboard.js';
import Contri from './components/Contri';
import {useState , useRef} from 'react';

function App() {

  const [pg , setPg] = useState("main");

  function navHandler(e) {
	  console.log(e.target.attributes[0].value);
	  setPg(e.target.attributes[0].value);
  }

  return (
    <div className="App">
<nav>
      <ul>
	<li>
	    <a value="main" onClick={navHandler}>Home</a>
	</li>
	<li>
	    <a value="leaderboard" onClick={navHandler}>Leaderboard</a>
	</li>
	<li>
	    <a value="contri" onClick={navHandler}>Contribute</a>
	</li>
      </ul>
    </nav>

	{ pg == "contri" && <Contri/>  }
	  {pg == "main" && <Main />}
	  {pg == "leaderboard" && <Leaderboard />}
    </div>
  );
}

export default App;
