import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";
import { FaPeopleGroup, FaGift } from "react-icons/fa6";
import { DiGoogleAnalytics } from "react-icons/di";
import { FaCreditCard } from "react-icons/fa6";
import { BiSolidBank } from "react-icons/bi";
import { HiDocumentReport } from "react-icons/hi";
import { RiLogoutBoxFill } from "react-icons/ri";
import "./layout.css";

const Sidebar = ({ isOpen, isMinimized, toggleSidebar, toggleMinimize }) => {
  const location = useLocation(); // Get current route

  const navItems = [
    { path: "/", label: "Wingo", icon: <MdDashboard size={22} /> },
    { path: "/members", label: "Members", icon: <IoPersonCircle size={22} /> },
    { path: "/agents", label: "Agents", icon: <FaPeopleGroup size={22} /> },
    { path: "/business", label: "Business Manage", icon: <DiGoogleAnalytics size={22} /> },
    { path: "/pendingRecharge", label: "Pending Recharge", icon: <FaCreditCard size={22} /> },
    { path: "/pendingWithdraws", label: "Pending Withdrawals", icon: <BiSolidBank size={22} /> },
    { path: "/turnover", label: "Turnover Report", icon: <HiDocumentReport size={22} /> },
    { path: "/bethistory", label: "Betting History", icon: <FaGift size={22} /> },
    { path: "/giftcode", label: "Create Gift Code", icon: <FaGift size={22} /> },
    { path: "/setting", label: "Settings", icon: <FaGift size={22} /> },
    { path: "/report", label: "Today Report", icon: <FaGift size={22} /> },
    { path: "/logout", label: "Come Back", icon: <RiLogoutBoxFill size={22} /> },
  ];

  return (
    <div
      className={`sidebar fixed z-20 h-[100vh] overflow-auto bg-gradient-to-b from-orange-500 to-yellow-500 text-white transition-transform duration-300 
      ${isOpen ? "translate-x-0" : "-translate-x-full"} 
      ${isMinimized ? "w-12" : "w-64"} md:relative md:translate-x-0 md:${isMinimized ? "w-20" : "w-64"}`}
    >
      <div className="flex items-center justify-between p-4">
        <h1 className={`text-xl font-bold ${isMinimized && "hidden"}`}>Dashboard V5</h1>
        <button className="md:hidden" onClick={toggleSidebar}>
          <FaTimes />
        </button>
        {/* <button className="hidden md:block" onClick={toggleMinimize}>
          <FaBars />
        </button> */}
      </div>

      {/* Sidebar Navigation */}
      <ul className="mt-4 space-y-1">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`flex items-center p-2 rounded-md transition-all duration-300 
                ${location.pathname === item.path ? "bg-orange-700 text-white" : "hover:bg-orange-600"}
              `}
            >
              {item.icon}
              {!isMinimized && <span className="ml-2">{item.label}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;