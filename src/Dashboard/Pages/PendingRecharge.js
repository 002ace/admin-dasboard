import React, { useState } from "react";
import { AiOutlineCheck, AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const initialData = [
  { id: 1, account: "John Doe", type: "Recharge", amount: "$50", utrNo: "UTR123456", time: "2023-10-01 10:00", orderId: "ORD001", status: "Pending" },
  { id: 2, account: "Jane Smith", type: "Recharge", amount: "$75", utrNo: "UTR654321", time: "2023-10-01 11:00", orderId: "ORD002", status: "Approved" },
  { id: 3, account: "Alice Johnson", type: "Recharge", amount: "$100", utrNo: "UTR789012", time: "2023-10-01 12:00", orderId: "ORD003", status: "Pending" },
  { id: 4, account: "Bob Brown", type: "Recharge", amount: "$200", utrNo: "UTR345678", time: "2023-10-01 13:00", orderId: "ORD004", status: "Rejected" },
  { id: 5, account: "Charlie Davis", type: "Recharge", amount: "$150", utrNo: "UTR901234", time: "2023-10-01 14:00", orderId: "ORD005", status: "Pending" },
];

const PendingRecharge = () => {
  const [tableData, setTableData] = useState(initialData);

  const handleApprove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to approve this recharge?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff9933",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, approve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setTableData((prevData) =>
          prevData.map((item) =>
            item.id === id ? { ...item, status: "Approved" } : item
          )
        );
        Swal.fire("Approved!", "The recharge has been approved.", "success");
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this record?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff9933",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setTableData((prevData) => prevData.filter((item) => item.id !== id));
        Swal.fire("Deleted!", "The record has been deleted.", "success");
      }
    });
  };

  return (
    <div className="p-4 bg-white min-h-screen">
      {/* Header Section */}
      <h2 className="text-2xl font-semibold p-4 text-white bg-[#ff9933] rounded-md text-center shadow-md">
        Approve Recharge
      </h2>

      {/* Table Section */}
      <div className="overflow-x-auto bg-white p-4 rounded-md mt-4 shadow-lg border border-[#ff9933]">
        <table className="min-w-full border border-[#ff9933] text-black">
          <thead>
            <tr className="bg-[#ff9933] text-white">
              {["#", "Account", "Type", "Amount", "UTR No", "Time", "Order ID", "Status", "Action"].map((heading, index) => (
                <th key={index} className="border border-white px-4 py-3 text-center font-semibold">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={data.id} className="hover:bg-[#ffe5cc] transition-all">
                <td className="border border-[#ff9933] px-4 py-3 text-center">{index + 1}</td>
                <td className="border border-[#ff9933] px-4 py-3 text-center">{data.account}</td>
                <td className="border border-[#ff9933] px-4 py-3 text-center">{data.type}</td>
                <td className="border border-[#ff9933] px-4 py-3 text-center">{data.amount}</td>
                <td className="border border-[#ff9933] px-4 py-3 text-center">{data.utrNo}</td>
                <td className="border border-[#ff9933] px-4 py-3 text-center">{data.time}</td>
                <td className="border border-[#ff9933] px-4 py-3 text-center">{data.orderId}</td>
                <td
                  className={`border border-[#ff9933] px-4 py-3 text-center font-semibold ${
                    data.status === "Approved"
                      ? "text-green-500"
                      : data.status === "Rejected"
                      ? "text-red-500"
                      : "text-[#ff9933]"
                  }`}
                >
                  {data.status}
                </td>
                <td className="border border-[#ff9933] px-4 py-3 flex justify-center gap-2">
                  {data.status === "Pending" && (
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white p-2 rounded flex items-center justify-center w-8 h-8 transition-all"
                      onClick={() => handleApprove(data.id)}
                    >
                      <AiOutlineCheck size={18} />
                    </button>
                  )}
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white p-2 rounded flex items-center justify-center w-8 h-8 transition-all"
                    onClick={() => handleDelete(data.id)}
                  >
                    <AiOutlineDelete size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingRecharge;
