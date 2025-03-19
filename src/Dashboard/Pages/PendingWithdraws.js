import React, { useState } from "react";
import { AiOutlineCheck, AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const initialData = [
  {
    id: 187,
    upi: "ia3553421@gmail.com",
    usdtAddress: "Mumbai",
    account: "7208305839",
    bank: "HDFC",
    accountNumber: "501004085958850",
    ifscCode: "HDFC0002655",
    cardholderName: "IRFAN AHMAD",
    amount: "₹300",
    status: "Pending",
    date: "2024-08-08 5:24:21 PM",
  },
  {
    id: 188,
    upi: "example123@upi",
    usdtAddress: "Delhi",
    account: "9876543210",
    bank: "ICICI",
    accountNumber: "123456789012",
    ifscCode: "ICIC0001234",
    cardholderName: "Rahul Sharma",
    amount: "₹500",
    status: "Approved",
    date: "2024-08-09 4:10:15 PM",
  },
];

const ApproveWithdrawal = () => {
  const [tableData, setTableData] = useState(initialData);

  const handleApprove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to approve this withdrawal?",
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
        Swal.fire("Approved!", "The withdrawal has been approved.", "success");
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
        Approve Withdrawal
      </h2>

      {/* Table Section */}
      <div className="overflow-x-auto bg-white p-4 rounded-md mt-4 shadow-lg border border-[#ff9933]">
        <table className="min-w-full border border-[#ff9933] text-black">
          <thead>
            <tr className="bg-[#ff9933] text-white">
              {[
                "#",
                "UPI",
                "USDT Address",
                "Account",
                "Bank",
                "Account Number",
                "IFSC Code",
                "Cardholder Name",
                "Amount",
                "Status",
                "Date",
                "Action",
              ].map((heading, index) => (
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
                <td className="border border-[#ff9933] px-4 py-3 text-center">{data.upi}</td>
                <td className="border border-[#ff9933] px-4 py-3 text-center">{data.usdtAddress}</td>
                <td className="border border-[#ff9933] px-4 py-3 text-center">{data.account}</td>
                <td className="border border-[#ff9933] px-4 py-3 text-center">{data.bank}</td>
                <td className="border border-[#ff9933] px-4 py-3 text-center">{data.accountNumber}</td>
                <td className="border border-[#ff9933] px-4 py-3 text-center">{data.ifscCode}</td>
                <td className="border border-[#ff9933] px-4 py-3 text-center">{data.cardholderName}</td>
                <td className="border border-[#ff9933] px-4 py-3 text-center">{data.amount}</td>
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
                <td className="border border-[#ff9933] px-4 py-3 text-center">{data.date}</td>
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

export default ApproveWithdrawal;
