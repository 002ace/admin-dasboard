import React from 'react';

const withdrawalHistory = [
  { id: 1, amount: 200, bank: 'Bank A', status: 'Completed', time: '2024-08-09 14:22' },
  { id: 2, amount: 150, bank: 'Bank B', status: 'Pending', time: '2024-08-08 10:15' },
  { id: 3, amount: 300, bank: 'Bank C', status: 'Failed', time: '2024-08-07 16:40' },
];

const giftHistory = [
  { creator: 'User123', amount: 50, code: 'ABCD1234', status: 'Redeemed', time: '2024-08-05 09:30' },
  { creator: 'User456', amount: 100, code: 'EFGH5678', status: 'Pending', time: '2024-08-04 12:45' },
];

const betHistory = [
  { periods: 'Period 1', amount: 100, type: 'Win', status: 'Completed', time: '2024-08-06 18:22' },
  { periods: 'Period 2', amount: 200, type: 'Loss', status: 'Completed', time: '2024-08-05 20:10' },
];

const Profile = () => {
  return (
    <div className="p-6 min-h-screen bg-white text-[#FF9F00]">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/3 p-4 bg-[#FF9F00] text-white rounded-lg shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <img
              className="w-16 h-16 rounded-full bg-white"
              src="https://openui.fly.dev/openui/24x24.svg?text=👤&background=FFFFFF&color=FF9F00"
              alt="User Avatar"
            />
            <div>
              <h2 className="text-xl font-bold">Member64708</h2>
              <p className="text-sm">ID: 96116</p>
            </div>
          </div>

          <div className="bg-white text-[#FF9F00] p-4 rounded-lg shadow-md">
            <p className="flex justify-between border-b p-2"><span>Surplus:</span> <span>0.0</span></p>
            <p className="flex justify-between border-b p-2"><span>Total Recharge:</span> <span>0.0</span></p>
            <p className="flex justify-between border-b p-2"><span>Total Withdrawals:</span> <span>0.0</span></p>
            <p className="flex justify-between border-b p-2"><span>General Invitation:</span> <span>0.0</span></p>
            <p className="flex justify-between border-b p-2"><span>IP:</span> <span>130.131.313.340</span></p>
            <p className="flex justify-between border-b p-2"><span>Inviter:</span> <span>73463500</span></p>
            <button className="bg-[#D97706] hover:bg-[#B45309] mt-4 p-2 rounded w-full text-white font-semibold transition">
              USER
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-full space-y-6">
          {/* Withdrawal History */}
          <div className="bg-[#FF9F00] text-white p-4 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg text-center">Withdrawal History</h3>
            <table className="min-w-full mt-2 bg-white text-[#FF9F00] rounded-md">
              <thead>
                <tr className="bg-[#FF9F00] text-white">
                  <th className="p-2">ID</th>
                  <th className="p-2">Amount</th>
                  <th className="p-2">Bank</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Time</th>
                </tr>
              </thead>
              <tbody>
                {withdrawalHistory.length > 0 ? (
                  withdrawalHistory.map((item) => (
                    <tr key={item.id} className="text-center border-b">
                      <td className="p-2">{item.id}</td>
                      <td className="p-2">{item.amount}</td>
                      <td className="p-2">{item.bank}</td>
                      <td className="p-2">{item.status}</td>
                      <td className="p-2">{item.time}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center p-2">
                      No records found!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Gift History */}
          <div className="bg-[#FF9F00] text-white p-4 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg text-center">Gift History</h3>
            <table className="min-w-full mt-2 bg-white text-[#FF9F00] rounded-md">
              <thead>
                <tr className="bg-[#FF9F00] text-white">
                  <th className="p-2">Creator</th>
                  <th className="p-2">Amount</th>
                  <th className="p-2">Code</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Time</th>
                </tr>
              </thead>
              <tbody>
                {giftHistory.length > 0 ? (
                  giftHistory.map((item, index) => (
                    <tr key={index} className="text-center border-b">
                      <td className="p-2">{item.creator}</td>
                      <td className="p-2">{item.amount}</td>
                      <td className="p-2">{item.code}</td>
                      <td className="p-2">{item.status}</td>
                      <td className="p-2">{item.time}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center p-2">
                      No records found!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Bet History */}
          <div className="bg-[#FF9F00] text-white p-4 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg text-center">Bet History</h3>
            <table className="min-w-full mt-2 bg-white text-[#FF9F00] rounded-md">
              <thead>
                <tr className="bg-[#FF9F00] text-white">
                  <th className="p-2">Periods</th>
                  <th className="p-2">Amount</th>
                  <th className="p-2">Type</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Time</th>
                </tr>
              </thead>
              <tbody>
                {betHistory.length > 0 ? (
                  betHistory.map((item, index) => (
                    <tr key={index} className="text-center border-b">
                      <td className="p-2">{item.periods}</td>
                      <td className="p-2">{item.amount}</td>
                      <td className="p-2">{item.type}</td>
                      <td className="p-2">{item.status}</td>
                      <td className="p-2">{item.time}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center p-2">
                      No records found!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
