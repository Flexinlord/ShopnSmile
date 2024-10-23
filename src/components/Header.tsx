import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Smile, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Smile size={32} />
            <span className="text-2xl font-bold">Shop n Smile</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><Link to="/" className="hover:text-indigo-200">Home</Link></li>
              <li><Link to="/products" className="hover:text-indigo-200">Products</Link></li>
              <li><Link to="/about" className="hover:text-indigo-200">About</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-200">Contact</Link></li>
            </ul>
          </nav>

          <Link
            to="/cart"
            className="hidden md:flex items-center space-x-1 bg-white text-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-100 transition duration-300"
          >
            <ShoppingCart size={20} />
            <span>Cart (0)</span>
          </Link>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-4">
              <li><Link to="/" className="block hover:text-indigo-200">Home</Link></li>
              <li><Link to="/products" className="block hover:text-indigo-200">Products</Link></li>
              <li><Link to="/about" className="block hover:text-indigo-200">About</Link></li>
              <li><Link to="/contact" className="block hover:text-indigo-200">Contact</Link></li>
              <li>
                <Link
                  to="/cart"
                  className="flex items-center space-x-1 bg-white text-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-100 transition duration-300 w-fit"
                >
                  <ShoppingCart size={20} />
                  <span>Cart (0)</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;