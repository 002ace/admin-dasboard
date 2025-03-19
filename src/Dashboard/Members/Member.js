import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const data = [
  { id: 39558, mobile: "8169448604", position: "USER", referCode: "JIvQz97554", referBy: "oCNXn89123", amount: 1170, password: "Marshal@1421", status: "Active" },
  { id: 84181, mobile: "9209931804", position: "USER", referCode: "jnrvy49662", referBy: "yGiOO17100", amount: 0, password: "Subhan123", status: "Active" },
  { id: 39332, mobile: "6305383177", position: "USER", referCode: "OppgJ4362", referBy: "xQtJY37878", amount: 0, password: "2580", status: "Active" },
  { id: 44359, mobile: "8001213775", position: "USER", referCode: "hmAWr29033", referBy: "QVERw41134", amount: 5750, password: "BK04062014", status: "Active" },
  { id: 35781, mobile: "8955109913", position: "USER", referCode: "NQCiv58933", referBy: "ZMTJi89641", amount: 381, password: "nikknikhil", status: "Active" },
  { id: 70645, mobile: "78008663173", position: "USER", referCode: "ZraOB35365", referBy: "HJlua23384", amount: 0, password: "manishmj7471", status: "Active" },
];

const Member = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredData = data.filter(
    (item) =>
      (statusFilter === "All" || item.status === statusFilter) &&
      (item.mobile.includes(searchTerm) ||
        item.position.includes(searchTerm) ||
        item.referCode.includes(searchTerm) ||
        item.referBy.includes(searchTerm) ||
        item.password.includes(searchTerm))
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleLockClick = (id) => {
    Swal.fire({
      title: "Lock Account",
      text: `Are you sure you want to lock the account of member ID: ${id}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF8C00",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, lock it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Locked!", "The account has been locked.", "success");
      }
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-orange-600 mb-6">Member List</h2>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center space-y-4 md:space-y-0 md:space-x-4">
        <select
          className="border border-orange-400 p-3 rounded-md bg-white focus:ring focus:ring-orange-500 text-gray-700"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Deactive">Deactive</option>
        </select>
        <input
          type="text"
          placeholder="Enter the member you are looking for"
          className="border border-orange-400 p-3 rounded-md flex-1 bg-white focus:ring focus:ring-orange-500 text-gray-700"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-6 rounded-lg shadow-md">
        <table className="min-w-full bg-orange-100 border border-orange-300 rounded-lg">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="py-2 border border-orange-300">#</th>
              <th className="py-2 border border-orange-300">Mobile No.</th>
              <th className="py-2 border border-orange-300">Position</th>
              <th className="py-2 border border-orange-300">Refer Code</th>
              <th className="py-2 border border-orange-300">Refer By</th>
              <th className="py-2 border border-orange-300">Amount</th>
              <th className="py-2 border border-orange-300">Password</th>
              <th className="py-2 border border-orange-300">Status</th>
              <th className="py-2 border border-orange-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr key={item.id} className="text-center text-orange-700">
                <td className="py-2 border border-orange-300">{item.id}</td>
                <td className="py-2 border border-orange-300">{item.mobile}</td>
                <td className="py-2 border border-orange-300">{item.position}</td>
                <td className="py-2 border border-orange-300">{item.referCode}</td>
                <td className="py-2 border border-orange-300">{item.referBy}</td>
                <td className="py-2 border border-orange-300">{item.amount}</td>
                <td className="py-2 border border-orange-300">{item.password}</td>
                <td className="py-2 border border-orange-300">
                  <span className="bg-green-500 text-white px-2 py-1 rounded">{item.status}</span>
                </td>
                <td className="py-2 border border-orange-300 flex justify-center space-x-2">
                  <Link to={`/profile/${item.id}`}>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded flex items-center">
                      <FaUser className="mr-1" /> Profile
                    </button>
                  </Link>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded flex items-center"
                    onClick={() => handleLockClick(item.id)}
                  >
                    <FaLock className="mr-1" /> Lock
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          className={`px-4 py-2 rounded-md text-white font-semibold transition-all ${
            currentPage === 1 ? "bg-orange-300 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600"
          }`}
          onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className={`px-4 py-2 rounded-md text-white font-semibold transition-all ${
            currentPage * itemsPerPage >= filteredData.length
              ? "bg-orange-300 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600"
          }`}
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          disabled={currentPage * itemsPerPage >= filteredData.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Member;
