import React, { useState, useEffect } from "react";
import { SlBasket } from "react-icons/sl";
import './Page.css'

const bettingData = [
    { id: 1, text: "Join Red 40", time: "2024-08-07 6:44:14 AM" },
    { id: 2, text: "Join Red 1", time: "2024-08-07 6:44:14 AM" },
    { id: 3, text: "Join Red 30", time: "2024-08-07 6:44:16 AM" },
    { id: 4, text: "Join Red 10", time: "2024-08-07 6:44:17 AM" },
    { id: 5, text: "Join Red 200", time: "2024-08-07 6:44:18 AM" },
];

const Wingo = () => {
    const [timeLeft, setTimeLeft] = useState(60);
    const [periods, setPeriods] = useState([
      { period: '202408071102', number: 3 },
      { period: '202408071101', number: 6 },
      { period: '202408071100', number: 8 },
      { period: '202408071099', number: 5 },
      { period: '202408071098', number: 7 },
      { period: '202408071097', number: 7 },
      { period: '202408071096', number: 5 },
      { period: '202408071095', number: 7 },
      { period: '202408071094', number: 7 },
      { period: '202408071093', number: 9 },
    ]);

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => (prevTime === 0 ? 60 : prevTime - 1));
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div className="bg-white">
        <div className="p-2 rounded-lg">
          <h1 className="text-3xl font-semibold text-orange-600 mb-6">Dashboard V</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-orange-500 p-4 rounded-lg">
            <div className="bg-white text-orange-600 border border-orange-400 p-2 flex items-center gap-2 rounded-lg transition-transform transform hover:scale-105 shadow-md">
              <p className="text-4xl p-2 rounded bg-[#e67e22] text-white">1M</p>
              <p className="text-sm">Player 1</p>
            </div>
            <div className="bg-white text-orange-600 border border-orange-400 p-2 flex items-center gap-2 rounded-lg transition-transform transform hover:scale-105 shadow-md">
              <p className="text-4xl p-2 rounded bg-[#e67e22] text-white">10M</p>
              <p className="text-sm">Player 2</p>
            </div>
          </div>
        </div>

        {/* Betting Statistics */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {bettingData.map((item) => (
            <div key={item.id} className="bg-orange-100 text-orange-700 p-4 rounded-lg flex gap-2 items-center shadow-md">
              <div className="text-4xl p-3 rounded bg-orange-500 text-white">
                <SlBasket />
              </div>
              <div className='flex flex-col gap-0'>
                <span className="text-lg">{item.text}</span>
                <span className="text-md">{item.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Timer & Periods */}
        {/* <div className="bg-orange-100 mt-5 p-4 rounded-lg shadow-lg">
          <div className="flex flex-col justify-center items-center mb-4 bg-orange-500 p-2 rounded text-white">
            <h1 className="text-2xl font-semibold">202408071103</h1>
            <div className="flex">
              <span className="text-4xl font-mono">{Math.floor(timeLeft / 60).toString().padStart(2, '0')}</span>
              <span className="text-4xl font-mono mx-2">:</span>
              <span className="text-4xl font-mono">{(timeLeft % 60).toString().padStart(2, '0')}</span>
            </div>
          </div>
          <table className="min-w-full bg-white border border-orange-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-orange-500 text-white">
                <th className="py-2">Periods</th>
                <th className="py-2">Number</th>
                <th className="py-2">Big/Small</th>
                <th className="py-2">Colour</th>
              </tr>
            </thead>
            <tbody>
              {periods.map((item) => {
                const bigSmall = item.number > 5 ? 'Big' : 'Small';
                const color = item.number > 5 ? 'green' : 'red';
                return (
                  <tr key={item.period} className="text-orange-700">
                    <td className="py-2 text-center">{item.period}</td>
                    <td className="py-2 text-center">{item.number}</td>
                    <td className="py-2 text-center">{bigSmall}</td>
                    <td className="py-2 text-center">
                      <span className="inline-block w-4 h-4 rounded-full" style={{ backgroundColor: color }}></span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div> */}

        {/* Adjusting Result */}
        {/* <div className="bg-orange-100 p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-xl bg-orange-500 p-3 text-white rounded">Adjusting the Result</h2>
          <p className="text-orange-700 mt-2">
            <span className="text-red-500">0 (Red and White)</span> | <span className="text-green-500">5 (Green and White)</span> | <span className="text-green-500">1, 3, 7, 9 (Green)</span> |
            <span className="text-red-500">2, 4, 6, 8 (Red)</span>
          </p>
          <h3 className="text-lg font-medium text-orange-700 mt-4">
            Next Result: <span className="text-orange-500">Random</span>
          </h3>
          <input type="text" placeholder="Enter the result (e.g., 1)" className="mt-4 p-3 bg-white border border-orange-400 rounded-md w-full focus:ring focus:ring-orange-500 focus:outline-none" />
          <button className="text-xl bg-orange-500 mt-2 px-3 py-1 text-white rounded">Submit</button>
        </div> */}
      </div>
    );
}

export default Wingo;
