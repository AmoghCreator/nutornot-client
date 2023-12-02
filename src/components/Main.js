import { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div className="flex flex-col items-center justify-center pt-20 ">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">Nut or Not</h1>
      {loading ? (
        <div className="flex justify-center items-center">
		<div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-green-500"></div>
	  </div>
      ) : (
        <>
          <div className="mb-4 w-96 h-2/3 flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
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
