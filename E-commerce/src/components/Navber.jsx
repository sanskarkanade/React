import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsPerson, BsCart } from "react-icons/bs";

const Navber = ({ onsearchchange }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [isvisible, setisvisible] = useState(false);
  const [profilebox, setprofilebox] = useState(false);
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);

  const profileRef = useRef(null);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    setShowLogoutAlert(true);
    setTimeout(() => {
      setShowLogoutAlert(false);
      navigate("/");
    }, 2000); // Show alert for 2 seconds
  };

  // ✅ Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setprofilebox(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="h-24 sm:h-16 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-gray-900 dark:to-black shadow-xl fixed w-full top-0 z-50 sm:flex items-center justify-between px-6">
      {/* Logo */}
      <div className="text-2xl font-extrabold text-white flex items-center gap-3 cursor-pointer">
        <img src="./src/assets/logo1.jpg" className="h-8 w-8 rounded-full" alt="logo" />
        <p className="tracking-wider">Eshany Bazaar</p>
        <span className="ml-32 sm:hidden" onClick={() => setisvisible(!isvisible)}>
          &#9776;
        </span>
      </div>

      {/* Mobile Menu */}
      {isvisible && (
        <div className="mt-4 p-4 bg-white dark:bg-gray-900 w-full h-screen rounded-2xl">
          <div className="flex flex-col gap-6 text-3xl" onClick={() => setisvisible(false)}>
            {["/", "/about", "/mobile", "/help", "/login"].map((route, i) => (
              <NavLink
                key={i}
                to={route}
                className="cursor-pointer hover:bg-yellow-300 dark:hover:bg-gray-700 transition border text-center p-3 rounded-2xl"
              >
                {route === "/" ? "Home" : route.slice(1).replace(/^\w/, (c) => c.toUpperCase())}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* Search */}
      <div className="flex items-center gap-2 mt-2">
        <input
          type="text"
          placeholder="Search items here..."
          className="bg-white dark:bg-gray-200 h-10 w-80 px-4 rounded-full outline-none focus:ring-2 focus:ring-cyan-500 transition"
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

      {/* Right Icons: Cart + Profile/Login */}
      <div className="flex items-center gap-6">
        {/* Cart Icon */}


        {/* Profile */}
        {user ? (
          <div className="relative flex gap-5" ref={profileRef}>
            <button onClick={() => setprofilebox(!profilebox)}>
              <BsPerson size={30} className="text-white hover:text-yellow-300 transition" />
            </button>
             <NavLink to="/cart" className="relative text-white hover:text-yellow-300 transition">
                  <BsCart size={28} />
                </NavLink>

            {profilebox && (
              <div onClick={() => setprofilebox(!profilebox)}
                className="absolute right-0 mt-3 w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl z-50 overflow-hidden animate-fade-in">
               
                <div className="px-4 py-3 border-b dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Signed in as</p>
                  <p className="text-md font-semibold text-gray-800 dark:text-white truncate">
                    {user?.email || "user@example.com"}
                  </p>
                </div>
                <div className="flex flex-col">
                  <NavLink
                    to="/profile"
                    className="px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2 transition"
                  >
                    <span className="text-lg">👤</span> My Profile
                  </NavLink>
                  <NavLink
                    to="/orders"
                    className="px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2 transition"
                  >
                    <span className="text-lg">📦</span> My Orders
                  </NavLink>
                  <NavLink
                    to="/"
                    onClick={handleLogout}
                    className="px-4 py-3 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900 dark:text-red-400 flex items-center gap-2 transition"
                  >
                    <span className="text-lg">🚪</span> Logout
                  </NavLink>
                </div>
              </div>
            )}

          </div>
        ) : (
          <NavLink
            to="/login"
            className="hidden sm:flex items-center gap-2 bg-white dark:bg-gray-200 text-blue-900 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Login
          </NavLink>
        )}
      </div>
      {/* Alert Toast */}
      {showLogoutAlert && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg transition-all duration-300 z-50">
          👋 Logged out successfully
        </div>
      )}
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
        {user?.isAdmin && (
          <li className="cursor-pointer hover:text-yellow-300 transition hidden sm:block">
            <NavLink to="/add">Add Product</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navber;
