import React, { useState } from "react";

const BettingHistory = () => {
  const [searchData, setSearchData] = useState("");

  const bettingHistoryData = [
    { id: 67305, userid: "9399444869", gameName: "wingo", amount: 4.85, win: 0.0, status: "Looser" },
    { id: 67304, userid: "9399444869", gameName: "wingo", amount: 19.4, win: 0.0, status: "Looser" },
    { id: 67303, userid: "7038267915", gameName: "wingo", amount: 0.97, win: 0.0, status: "Looser" },
    { id: 67302, userid: "9399444869", gameName: "wingo", amount: 14.55, win: 0.0, status: "Looser" },
    { id: 67301, userid: "7038267915", gameName: "wingo", amount: 0.97, win: 1.94, status: "Winner" },
    { id: 67300, userid: "7038267915", gameName: "wingo", amount: 4.85, win: 9.7, status: "Winner" },
  ];

  const filteredData = bettingHistoryData.filter((item) =>
    item.userid.includes(searchData)
  );

  return (
    <div className="container mx-auto text-[#FF9F00]">
      <h2 className="text-2xl font-bold bg-[#FF9F00] text-white py-2 px-4 rounded mb-4">Betting History</h2>
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter User ID to search"
          className="w-full p-2 rounded border border-[#FF9F00] text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9F00]"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
      </div>

      <div className="w-full overflow-x-auto">
        <table className="min-w-full bg-white border border-[#FF9F00] rounded-lg shadow-md">
          <thead>
            <tr className="bg-[#FF9F00] text-white">
              <th className="py-2 px-4 border border-[#ff9933]">#</th>
              <th className="py-2 px-4 border border-[#ff9933]">User ID</th>
              <th className="py-2 px-4 border border-[#ff9933]">Game</th>
              <th className="py-2 px-4 border border-[#ff9933]">Amount</th>
              <th className="py-2 px-4 border border-[#ff9933]">Win</th>
              <th className="py-2 px-4 border border-[#ff9933]">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={item.id} className="text-black text-center border-b hover:bg-orange-100 transition">
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">{item.userid}</td>
                  <td className="py-2 px-4 border-b">{item.gameName}</td>
                  <td className="py-2 px-4 border-b">₹{item.amount.toFixed(2)}</td>
                  <td className="py-2 px-4 border-b">₹{item.win.toFixed(2)}</td>
                  <td className="py-2 px-4 border-b">
                    <span
                      className={`px-2 py-1 rounded font-semibold text-white ${
                        item.status === "Winner" ? "bg-green-600" : "bg-red-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BettingHistory;

