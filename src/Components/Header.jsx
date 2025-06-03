import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-[#FFF7F2] py-4 px-6 fixed top-0 left-0 z-50">
      <div className="max-w-8xl mx-auto flex justify-between items-center w-full">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Logo" className="h-20 md:h-30" />
          </Link>
          {/* Horizontal Line Separator */}
          <div className=" w-[62vw] border-t border-1 border-[#5a3e2b]"></div>
        </div>

        {/* Desktop Navigation - Only visible on lg screens and up */}
        <nav className="hidden lg:flex justify-center space-x-15 w-full">
          <Link
            to="/"
            className="text-[#5a3e2b] text-lg hover:text-[#3e2a1e] transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="text-[#5a3e2b] text-lg hover:text-[#3e2a1e] transition duration-300"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="text-[#5a3e2b] text-lg hover:text-[#3e2a1e] transition duration-300"
          >
            About Me
          </Link>
        </nav>

        {/* Mobile and Tablet Navigation - Visible on mobile and md screens */}
        <div className="lg:hidden">
          <Menu 
            right
            isOpen={isMenuOpen}
            onStateChange={handleStateChange}
            className="fixed top-5 right-5 w-64 h-screen bg-[#FFF7F2] shadow-lg z-50 flex flex-col p-6 space-y-4"
            customCrossIcon={<div className="text-[#5E3F27] text-3xl">&times;</div>}
            customBurgerIcon={
              <div className="p-2 cursor-pointer">
                <FiMenu className="w-8 h-8 text-[#5E3F27]" /> {/* Custom menu icon */}
              </div>
            }
          >
            <Link to="/" onClick={closeMenu} className="block text-[#5E3F27] hover:text-[#3e2a1e] text-lg transition duration-300">Home</Link>
            <Link to="/about" onClick={closeMenu} className="block text-[#5E3F27] hover:text-[#3e2a1e] text-lg transition duration-300">About Me</Link>
            <Link to="/projects" onClick={closeMenu} className="block text-[#5E3F27] hover:text-[#3e2a1e] text-lg transition duration-300">Projects</Link>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
