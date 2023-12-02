import {useState , useEffect} from 'react';
import axios from 'axios';
import '../styles/main.css';	

function Main() {

  const [img , setImg] = useState("https://source.unsplash.com/random");
	useEffect(() => {
		fetchNext();
	}, []);
  async function fetchNext() {
	  let res = await axios.get("https://nutornot.el.r.appspot.com/image");
	  console.log(res.data[0].link);
	  setImg(res.data[0]);
}
  async function Nut() {
	  // update count in db
	  await axios.get(`https://nutornot.el.r.appspot.com/image/add/${img.title}`);
	  fetchNext();
  }
  async function Not() {
	  // update count in db
	  await axios.get(`https://nutornot.el.r.appspot.com/image/sub/${img.title}`);
	  fetchNext();
  }

  return (
    <div class="contri">
	<h1>Nut or Not</h1>
	<img src={img.link} alt="logo" />
	<div className="btn-container">	
	  <button className="btn" onClick={Nut}>Nut</button>
	  <button className="btn" onClick={Not}>Not</button>
	</div>
    </div>
  );
}

export default Main;
