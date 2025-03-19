import React from 'react';

const Setting = () => {
  return (
    <div className="container mx-auto text-[#FF9F00]">
      <h2 className="text-2xl font-bold bg-[#FF9F00] text-white py-3 px-4 rounded-md shadow-md text-center">
        Settings
      </h2>

      {/* Increase | Decrease Section */}
      <div className="bg-white w-full p-5 mt-6 rounded-lg shadow-lg border border-[#FF9F00]">
        <h3 className="text-center font-semibold text-[#FF9F00]">Increase | Decrease For Members</h3>
        <input
          type="number"
          placeholder="Enter Account ID"
          className="py-2 px-3 rounded-md border border-[#FF9F00] text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9F00] w-full mt-3"
        />
        <select
          name="Function"
          id="function"
          className="py-2 px-3 rounded-md border border-[#FF9F00] text-black w-full mt-3"
        >
          <option value="increase">Increase</option>
          <option value="decrease">Decrease</option>
        </select>
        <input
          type="number"
          placeholder="Amount"
          className="py-2 px-3 rounded-md border border-[#FF9F00] text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9F00] w-full mt-3"
        />
        <button className="mt-4 px-6 py-2 bg-[#FF9F00] text-white rounded-md font-semibold hover:bg-orange-600 transition shadow-md w-full">
          Submit
        </button>
      </div>

      {/* Telegram Section */}
      <div className="bg-white w-full p-5 mt-6 rounded-lg shadow-lg border border-[#FF9F00]">
        <h2 className="text-xl font-semibold text-[#FF9F00] text-center">Telegram</h2>
        <div className="flex flex-col gap-4 mt-4">
          <input
            type="text"
            placeholder="Enter Telegram Link"
            className="py-2 px-3 rounded-md border border-[#FF9F00] text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9F00] w-full"
          />
          <input
            type="text"
            placeholder="Online Services"
            className="py-2 px-3 rounded-md border border-[#FF9F00] text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9F00] w-full"
          />
          <input
            type="text"
            placeholder="Enter App Link"
            className="py-2 px-3 rounded-md border border-[#FF9F00] text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9F00] w-full"
          />
          <button className="mt-4 px-6 py-2 bg-[#FF9F00] text-white rounded-md font-semibold hover:bg-orange-600 transition shadow-md w-full">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
