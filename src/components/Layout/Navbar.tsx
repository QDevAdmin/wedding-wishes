import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeartIcon, MenuIcon, XIcon } from 'lucide-react';
import { useCart } from '../../context/CartContext';
const Navbar: React.FC = () => {
  const {
    totalItems
  } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-white py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-indigo-600 to-violet-500 mr-3">
            <HeartIcon className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-lg text-neutral-800">
            Wedding Wishes
          </span>
        </Link>
        <button className="md:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors relative" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <XIcon className="h-6 w-6" /> : <>
              <MenuIcon className="h-6 w-6" />
              {totalItems > 0 && !isMenuOpen && <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>}
            </>}
        </button>
        <nav className="hidden md:flex items-center space-x-1">
          <Link to="/" className={`px-4 py-2 rounded-lg transition-colors ${isActive('/') ? 'text-indigo-700 bg-indigo-50 font-medium' : 'text-neutral-600 hover:text-indigo-600 hover:bg-neutral-100'}`}>
            Главная
          </Link>
          <Link to="/catalog" className={`px-4 py-2 rounded-lg transition-colors ${isActive('/catalog') ? 'text-indigo-700 bg-indigo-50 font-medium' : 'text-neutral-600 hover:text-indigo-600 hover:bg-neutral-100'}`}>
            Каталог
          </Link>
          <Link to="/cart" className={`px-4 py-2 rounded-lg transition-colors flex items-center ${isActive('/cart') ? 'text-indigo-700 bg-indigo-50 font-medium' : 'text-neutral-600 hover:text-indigo-600 hover:bg-neutral-100'}`}>
            Корзина
            {totalItems > 0 && <span className="ml-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>}
          </Link>
        </nav>
      </div>
      {isMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-neutral-200 z-50 animate-fade-in-down">
          <div className="container mx-auto px-6 py-4 flex flex-col">
            <Link to="/" className={`py-3 px-4 rounded-lg mb-2 ${isActive('/') ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-neutral-600 hover:bg-neutral-100'}`} onClick={() => setIsMenuOpen(false)}>
              Главная
            </Link>
            <Link to="/catalog" className={`py-3 px-4 rounded-lg mb-2 ${isActive('/catalog') ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-neutral-600 hover:bg-neutral-100'}`} onClick={() => setIsMenuOpen(false)}>
              Каталог
            </Link>
            <Link to="/cart" className={`py-3 px-4 rounded-lg flex items-center ${isActive('/cart') ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-neutral-600 hover:bg-neutral-100'}`} onClick={() => setIsMenuOpen(false)}>
              Корзина
              {totalItems > 0 && <span className="ml-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>}
            </Link>
          </div>
        </div>}
    </header>;
};
export default Navbar;