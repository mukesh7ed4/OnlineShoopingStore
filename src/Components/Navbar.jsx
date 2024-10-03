import React, { useState, useContext, lazy, Suspense } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';
import { CartContext } from '../context/CartContext';
import { FaShoppingCart } from "react-icons/fa"
import { FcLike } from "react-icons/fc";
import { BsPersonCircle } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";

const HamburgerMenu = lazy(() => import('./HamburgerMenu'));
const GiHamburgerMenu = lazy(() => import('react-icons/gi').then(module => ({ default: module.GiHamburgerMenu })));

const Navbar = () => {
  const { updateSearchQuery } = useContext(SearchContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    updateSearchQuery(searchQuery);
    navigate('/search');
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav className="flex justify-between items-center bg-[#FAF9F6] h-[50px] border-2 w-full px-4 md:px-8">
      <button className="px-3 py-2 rounded-md border-2" onClick={toggleMenu}>
        <Suspense fallback={null}>
          <GiHamburgerMenu size={30} />
        </Suspense>
      </button>
      <div className="flex">
        <h1 className='text-2xl p-2 font-bold'>GLITCH</h1>
      </div>
      <div className="flex gap-2 md:gap-4 pr-2">
        {/* Search input directly in the navbar */}
        {/* <form onSubmit={handleSearchSubmit} className="hidden sm:flex">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search..."
            className="px-4 py-2 border-2 rounded-md"
          />
          <button type="submit" className="px-3 py-2 border-2 rounded-md">Search</button>
        </form> */}
        <Link to="/login" className="px-2 md:px-4 py-2 border-2 rounded-md">
          <BsPersonCircle size={24} md:size={30} />
        </Link>
        <Link to="/Like" className="px-2 md:px-4 py-2 border-2 rounded-md">
          <FcLike size={24} md:size={30} />
        </Link>
        {cartItems.length > 0 ? (
          <Link to="/Cart" className="px-2 md:px-4 py-2 border-2 rounded-md">
            Cart ({cartItems.length})
          </Link>
        ) : (
          <Link to="/Cart" className="px-2 md:px-4 py-2 border-2 rounded-md">
            <FaShoppingCart size={24} md:size={30} />
          </Link>
        )}
      </div>
      <Suspense fallback={null}>
        <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </Suspense>
    </nav>
  );
};

export default Navbar;


