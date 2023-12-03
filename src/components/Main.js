import { useState, useEffect } from 'react';
import axios from 'axios';
import logo from "../images/logo.png";
import nutOrNot from "../images/NutOrNot.png";

function Main() {
  const [img, setImg] = useState("https://source.unsplash.com/random");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNext();
  }, []);

  async function fetchNext() {
	setLoading(true);
    let res = await axios.get("https://nutornot.el.r.appspot.com/image");
    console.log(res.data[0].link);
    setImg(res.data[0]);
	setLoading(false);
  }

  async function Nut() {
	setLoading(true);
    await axios.get(`https://nutornot.el.r.appspot.com/image/add/${img.title}`);
    fetchNext();
  }

  async function Not() {
	setLoading(true);
    await axios.get(`https://nutornot.el.r.appspot.com/image/sub/${img.title}`);
    fetchNext();
  }

  return (
	  // tailwind css for page height and width : 
	<div className=" main flex flex-col items-center justify-center pt-3 h-fit">
	<div className="mb-2 flex">
	  <img src={logo} alt="logo" className="mx-auto w-24 h-20 md:h-36 md:w-40" />
	  <img src={nutOrNot} alt="logo" className="mx-auto w-24 h-20 md:h-36 md:w-40" />
	</div>
	<div className="flex items-center">
	  <h1 className="md:text-5xl text-4xl font-bold text-gray-800 ">Nut or Not</h1>
	  <span className="italic text-green-500 text-lg font-medium ml-2">KIIT Edition</span>
	</div>
      {loading ? (
        <div className="flex justify-center items-center">
		<div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-green-500"></div>
	  </div>
      ) : (
        <>
          <div className="mb-4 mt-6 md:w-96 w-88 h-2/3 flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
            <img src={img.link} alt="logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-4 px-8 rounded" onClick={Nut}>Nut</button>
            <h3 className="my-auto text-xl">OR</h3>
            <button className="bg-red-500 hover:bg-red-700 text-white text-2xl font-bold py-4 px-8 rounded" onClick={Not}>Not</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Main;
