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

  const getRankStyle = (rank) => {
    switch(rank) {
      case 0: return "bg-[#FFD700] text-black";
      case 1: return "bg-[#C0C0C0] text-black";
      case 2: return "bg-[#CD7F32] text-black";
      default: return "bg-white";
    }
  };

  const getEmoji = (rank) => {
    switch(rank) {
      case 0: return "👑";
      case 1: return "🥈";
      case 2: return "🥉";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-3">Leaderboard</h1>
      <div className="overflow-auto w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
        {ldrbrd.map((item, key) => (
          <div className={`flex flex-col items-center justify-center ${getRankStyle(key)} border-b border-gray-200 p-4`}>
            <div className="flex flex-col items-center mb-2">
              <span className="text-3xl font-semibold mb-1">{key + 1} {getEmoji(key)}</span>
              <h3 className="text-md font-medium">{item.title}</h3>
            </div>
            <img src={item.link} alt="logo" className="h-44 w-44 object-cover mb-2" />
            <span className="text-lg font-semibold">Score: {item.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
