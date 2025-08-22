import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-purple-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Notochan ✨</h1>
      <ul className="flex gap-6">
        <li className="hover:text-gray-200 cursor-pointer">My Notes</li>
        <li className="hover:text-gray-200 cursor-pointer">Remainders</li>
        <li className="hover:text-gray-200 cursor-pointer">Archive</li>
        <li className="hover:text-gray-200 cursor-pointer">Bin</li>
      </ul>
      <button className="bg-white text-purple-600 px-3 py-1 rounded hover:bg-gray-100">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
