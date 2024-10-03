import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { VscError } from 'react-icons/vsc';
import './HamburgerMenu.css';

const HamburgerMenu = ({ isOpen, onClose }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(isOpen);

  useEffect(() => {
    setIsMenuOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setIsMenuOpen(false);
    setTimeout(onClose, 400);
  };

  const menuData = [
    { name: 'NEW ARRIVAL', path: '/categories/new-arrival' },
    { name: 'BEST SELLING', path: '/categories/best-selling' },
    { name: 'GLITCH SPECIAL', path: '/categories/glitch-special' },
    { name: 'GLITCH PLUS', path: '/categories/glitch-plus' },
    { name: 'SHOP', path: '/categories/shop' },
    { name: 'TRACK ORDER', path: '/track-order' },
    { name: 'RETURN', path: '/return' },
    { name: 'EXCHANGE', path: '/exchange' },
    { name: 'AFFILIATE PROGRAM', path: '/affiliate-program' },
    { name: 'CUSTOMER SUPPORT', path: '/customer-support' },
    { name: 'REVOLVE', path: '/revolve' },
    { name: 'SUGGESTIONS', path: '/suggestions' },
  ];

  return (
    <div
      className={`h-full w-[320px] border-r-2 fixed left-0 top-0 bg-[#FAF9F6] z-10 p-4 overflow-y-auto transition-transform duration-500 ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center border-b-2 pb-2">
        <IoPersonCircleSharp size={40} />
        <h1 className="text-xl">LOG IN</h1>
        <button onClick={handleClose}>
          <VscError size={20} />
        </button>
      </div>
      <div className="mt-4">
        {menuData.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="block w-[300px] pt-4 h-[60px] border-b-2 text-center"
            onClick={handleClose}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HamburgerMenu;
