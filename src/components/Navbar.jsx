import React, { useState } from "react";
import Logo from "../assets/home/hero/logo.svg";
import Hamburger from "../assets/home/hero/hamburger.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="absolute w-full top-4 left-0 z-50 bg-transparent">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-semibold text-gray-800">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="relative">
          <button onClick={toggleMenu} className="bg-white focus:outline-none">
            <img src={Hamburger} alt="Hamburger" className="w-12 h-11" />
          </button>
          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-9 right-12 mt-2 bg-white text-black w-48 z-50">
              <ul className="text-center">
                <li className="py-2 hover:bg-gray-100">
                  <Link to="/">HOME</Link>
                </li>
                <li className="py-2 hover:bg-gray-100">
                  <Link to="/about">ABOUT</Link>
                </li>
                <li className="py-2 hover:bg-gray-100">
                  <Link to="/contact">CONTACT</Link>
                </li>
                <li className="py-2 hover:bg-gray-100">
                  <Link to="/blogs">BLOGS</Link>
                </li>
                <li className="py-2 hover:bg-gray-100">
                  <Link to="/works">WORKS</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
