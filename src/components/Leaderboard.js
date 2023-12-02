import { useState, useEffect } from 'react';
import axios from 'axios';

function Leaderboard() {
  const [ldrbrd, setldrbrd] = useState([]);

  useEffect(() => {
    fetchNext();
  }, []);

  async function fetchNext() {
    let res = await axios.get("https://nutornot.el.r.appspot.com/leaderboard");
    console.log(res.data);
    setldrbrd(res.data);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Nut or Not</h1>
      <div className="overflow-auto w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
        {ldrbrd.map((item, key) => (
          <div className="flex items-center justify-between bg-white border-b border-gray-200 p-4">
            <span className="text-lg font-semibold">{key + 1}</span>
            <div className="flex flex-col items-center">
              <h3 className="text-md font-medium">{item.title}</h3>
              <img src={item.link} alt="logo" className="h-44 w-44 object-cover " />
            </div>
            <span className="text-lg font-semibold">Score {item.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
