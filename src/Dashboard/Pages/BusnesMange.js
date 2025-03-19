import React from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaDice, FaRegFlag, FaCheck, FaScaleBalanced } from "react-icons/fa6";
import { GiFlyingFlag } from "react-icons/gi";
import { MdBlock } from "react-icons/md";
import { BsBank2 } from "react-icons/bs";

const BusnesMange = () => {
  return (
    <div className='text-gray-900'>
      <h2 className='text-2xl font-semibold text-orange-600'>Statistical Data</h2>

      {/* Date Picker and Search Button */}
      <div className='flex flex-col gap-2 mt-6'>
        <input type="date" className='bg-white text-gray-900 w-fit rounded-sm p-2 border border-gray-400' />
        <button className='px-3 py-2 bg-orange-500 text-white w-fit rounded-sm hover:bg-orange-600'>Search</button>
      </div>

      {/* Statistics Grid */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {[
          { icon: <IoPersonCircleOutline />, label: "Total Members", value: 0 },
          { icon: <FaDice />, label: "Today Bets", value: 0 },
          { icon: <FaDice />, label: "Total Bets", value: 0 },
          { icon: <FaRegFlag />, label: "Win Counts", value: 0 },
          { icon: <FaRegFlag />, label: "Wins", value: 0 },
          { icon: <GiFlyingFlag />, label: "Losses Count", value: 0 },
          { icon: <GiFlyingFlag />, label: "Losses", value: 0 },
          { icon: <MdBlock />, label: "Locked Account", value: 0 },
          { icon: <FaCheck />, label: "Total Deposit", value: 0 },
          { icon: <FaCheck />, label: "Today Deposit", value: 0 },
          { icon: <BsBank2 />, label: "Total Withdrawals", value: 0 },
          { icon: <BsBank2 />, label: "Withdrawals Today", value: 0 },
          { icon: <FaScaleBalanced />, label: "Total P/L", value: 0 },
          { icon: <FaScaleBalanced />, label: "Today P/L", value: 0 },
          { icon: <FaScaleBalanced />, label: "Net Earning", value: 0 },
        ].map((item, index) => (
          <div key={index} className="p-4 rounded-lg flex gap-2 items-center bg-white shadow-md">
            <div className="text-4xl p-3 rounded text-orange-600">
              {item.icon}
            </div>
            <div className='flex flex-col gap-0'>
              <span className="text-lg font-semibold text-orange-600">{item.label}</span>
              <span className="text-xl font-bold text-orange-600">{item.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Export Data Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-lg font-semibold text-orange-600 mb-4">Export Data</h2>
        <ul className="space-y-2">
          {["Today Recharge", "Total Recharge", "Total Withdrawal", "Today Withdrawal", "Today Betting", "Total Betting"].map((label, index) => (
            <li key={index}>
              <button className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600">{label} Export</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Create Partner Account Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-lg font-semibold text-orange-600 mb-4">Create Partner Account</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-orange-600">Username</label>
          <input type="text" id="username" placeholder="Enter username" className="mt-1 text-gray-900 bg-white block w-full border border-gray-400 rounded p-2 focus:outline-none focus:ring focus:ring-orange-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-orange-600">Password</label>
          <input type="password" id="password" placeholder="Enter password" className="mt-1 text-gray-900 bg-white block w-full border border-gray-400 rounded p-2 focus:outline-none focus:ring focus:ring-orange-500" />
        </div>
        <button className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600">Initialize</button>
      </div>

      {/* Increase/Decrease Points for All Partners */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-lg font-semibold text-orange-600 mb-4">Increase/Decrease Points/Money for All Partners</h2>
        <div className="mb-4">
          <label className="block text-md font-medium text-orange-600">Select Function</label>
          <select className='text-gray-900 bg-white w-full p-2 rounded border border-gray-400'>
            <option value="Recharge">Add Money</option>
            <option value="Withdrawal">Deduct Money</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-md font-medium text-orange-600">Amount</label>
          <input type="number" placeholder="Enter Amount" className="mt-1 text-gray-900 bg-white block w-full border border-gray-400 rounded p-2 focus:outline-none focus:ring focus:ring-orange-500" />
        </div>
        <button className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600">Initialize</button>
      </div>

      {/* Increase/Decrease Points for a Specific Partner */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-lg font-semibold text-orange-600 mb-4">Increase/Decrease Points/Money for a Partner</h2>
        <div className="mb-4">
          <label className="block text-md font-medium text-orange-600">User Name</label>
          <input type="text" placeholder="Enter Partner Name" className="mt-1 text-gray-900 bg-white block w-full border border-gray-400 rounded p-2 focus:outline-none focus:ring focus:ring-orange-500" />
        </div>
        <div className="mb-4">
          <label className="block text-md font-medium text-orange-600">Select Function</label>
          <select className='text-gray-900 bg-white w-full p-2 rounded border border-gray-400'>
            <option value="Recharge">Add Money</option>
            <option value="Withdrawal">Deduct Money</option>
          </select>
        </div>
        <button className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600">Initialize</button>
      </div>
    </div>
  );
};

export default BusnesMange;
