import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const Navber = ({ onsearchchange }) => {
  const [input, setInput] = useState("");
  const [isvisible, setisvisible] = useState(false);

  return (
    <nav className="h-24 sm:h-16 bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg fixed w-full top-0 z-50 sm:flex items-center justify-between px-6">
      {/* Logo Section */}
      <div className="text-2xl font-extrabold text-white flex items-center gap-3 cursor-pointer">
        <img src="./src/assets/logo1.jpg" className="h-8 w-8 rounded-full" alt="logo" />
        <p className="tracking-wider">Eshany Bazaar</p>
        < span className="ml-32 sm:hidden" onClick={()=> { setisvisible(!isvisible)}}>&#9776;</span>
      </div>

      {isvisible && (
        <div className="mt-4 p-4 bg-white w-full h-screen rounded-2xl">
            <div className="flex flex-col gap-6 text-3xl" onClick={()=> {setisvisible(!isvisible)}}>
              <button className="cursor-pointer hover:bg-yellow-300 transition border text-center p-3 rounded-2xl">
                <NavLink to="/">Home</NavLink>
              </button>
              <button className="cursor-pointer hover:bg-yellow-300 transition border text-center p-3 rounded-2xl">
                <NavLink to="/about">About Us</NavLink>
              </button>
              <button className="cursor-pointer hover:bg-yellow-300 transition border text-center p-3 rounded-2xl">
                <NavLink to="/mobile">Contact Us</NavLink>
              </button>
              <button className="cursor-pointer hover:bg-yellow-300 transition border text-center p-3 rounded-2xl">
                <NavLink to="/help">Help</NavLink>
              </button>
              <button className="cursor-pointer hover:bg-yellow-300 transition border text-center p-3 rounded-2xl">
                <NavLink to="/login"> Login</NavLink>
                
              </button>
            </div>
        </div>
      )}

      {/* Search Bar */}
      <div className="flex items-center gap-2 mt-2">
        <input
          type="text"
          placeholder="Search items here..."
          className="bg-white h-10 w-80 px-4 rounded-full outline-none focus:ring-2 focus:ring-cyan-500 transition"
          onChange={(e) => setInput(e.target.value)}
        />
        <NavLink
          to="/search"
          onClick={() => onsearchchange(input)}
          className="bg-cyan-600 px-4 py-2 text-white rounded-full shadow-md hover:bg-cyan-700 transition"
        >
          Search
        </NavLink>
      </div>

      {/* Cart Button */}
      <NavLink
        to="/cart"
        className="hidden items-center gap-2 bg-blue-950 px-4 py-2 text-white rounded-full shadow-md hover:bg-blue-900 transition sm:block"
      >
         Cart
      </NavLink>

      {/* Navigation Links */}
      <ul className="flex gap-6 text-white text-lg">
        <li className="cursor-pointer hover:text-yellow-300 transition hidden sm:block">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="cursor-pointer hover:text-yellow-300 transition hidden sm:block">
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li className="cursor-pointer hover:text-yellow-300 transition hidden sm:block">
          <NavLink to="/mobile">Contact Us</NavLink>
        </li>
        <li className="cursor-pointer hover:text-yellow-300 transition hidden sm:block">
          <NavLink to="/help">Help</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navber;
