import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import sports_logo from "/images/sports_logo.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Team", path: "/team" },
    { name: "Functionaries", path: "/staff" },
    { name: "Clubs", path: "/clubs" },
    { name: "Facilities", path: "/facilities" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Feedback", path: "/feedback" },
  ];

  return (
    <header className="bg-[#020B2D] border-b border-[#1E3A5F] sticky top-0 z-50 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={sports_logo}
            alt="Logo"
            className="w-12 h-12 rounded-full object-cover border-2 border-[#B05B4C]"
          />
          <h1 className="text-lg md:text-xl font-bold text-[#F3C4B0]">
            IIT Indore Sports Council
          </h1>
        </div>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `relative py-1 text-sm font-semibold tracking-wide transition-colors duration-300 ${isActive
                  ? "text-[#F3C4B0]"
                  : "text-white hover:text-[#F3C4B0]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-[#F3C4B0]
            transition-all duration-500 ease-in-out
            ${isActive ? "w-full" : "w-0"}`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden text-[#F3C4B0] text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black/60 transition-all duration-500 ease-out ${menuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 h-full w-[75%] max-w-sm bg-[#07153F]
        transform transition-transform duration-300 z-50
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-5 border-b border-[#1E3A5F]">
          <h2 className="text-[#F3C4B0] font-bold text-xl">Menu</h2>
          <FiX
            className="text-white cursor-pointer text-2xl"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <div className="p-4 flex flex-col gap-3">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-lg transition-all duration-500 ease-out ${isActive
                  ? "bg-[#B05B4C]/10 text-[#F3C4B0] border-l-4 border-[#F3C4B0]"
                  : "bg-[#0D214D] text-white hover:bg-[#B05B4C]/10 hover:text-[#F3C4B0]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;