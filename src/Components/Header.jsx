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

  // Custom styles for react-burger-menu
  const menuStyles = {
    bmBurgerButton: {
      display: 'none', // Hide default button
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
      right: '32px',
      top: '32px',
    },
    bmCross: {
      background: '#493B32',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      width: '300px',
      top: '0px',
    },
    bmMenu: {
      background: '#FFF7F2',
      padding: '2.5em 1.5em',
      fontSize: '1.15em',
      borderLeft: '2px solid rgba(73, 59, 50, 0.1)',
    },
    bmItemList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      padding: '2rem 0',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
    },
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
          <div className="w-[62vw] border-t border-1 border-[#5a3e2b]"></div>
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
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 hover:bg-[#493B32]/5 rounded-full transition-all duration-300"
            aria-label="Open Menu"
          >
            <FiMenu className="w-8 h-8 text-[#493B32]" />
          </button>
          
          <Menu 
            right
            isOpen={isMenuOpen}
            onStateChange={handleStateChange}
            styles={menuStyles}
          >
            <Link 
              to="/" 
              onClick={closeMenu} 
              className="relative text-[#493B32] text-xl font-tan hover:text-[#F75590] transition-all duration-300 group"
            >
              <span className="relative z-10">Home</span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#F75590] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/about" 
              onClick={closeMenu} 
              className="relative text-[#493B32] text-xl font-tan hover:text-[#F75590] transition-all duration-300 group"
            >
              <span className="relative z-10">About Me</span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#F75590] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/projects" 
              onClick={closeMenu} 
              className="relative text-[#493B32] text-xl font-tan hover:text-[#F75590] transition-all duration-300 group"
            >
              <span className="relative z-10">Projects</span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#F75590] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
