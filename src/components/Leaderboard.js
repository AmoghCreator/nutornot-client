import {useState , useEffect} from 'react';
import axios from 'axios';
import '../styles/main.css';	
import '../styles/leaderboard.css';	

function Leaderboard() {

  const [ldrbrd , setldrbrd] = useState([]);
	useEffect(() => {
		fetchNext();
	}, []);
  async function fetchNext() {
	  let res = await axios.get("https://nutornot.el.r.appspot.com/leaderboard");
	  console.log(res.data);
	  setldrbrd(res.data);
}

  return (
    <div class="leaderboard">
	<h1>Nut or Not</h1>
	<div className="btn-container">	
	  {ldrbrd.map((item, key) => 
		  (
			  <div className="ldrbrd-item">
			  <h3>{key+1}</h3>
			  <h3>{item.title}</h3> 
			  <img src={item.link} alt="logo" />
			  <h3>{item.score}</h3>
			  </div>
		  ))} </div>
    </div>
  );
}

export default Leaderboard;
