import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaPizzaSlice, FaHome, FaUtensils, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import ScrollToTop from './ScrollToTop';

const Layout: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      {/* Header - Fixed Position */}
      <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-red-700 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <FaPizzaSlice className="text-3xl text-white mr-2" />
              <span className="text-2xl font-bold text-white">Pizza Paradise</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/"
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive('/')
                    ? 'bg-white text-red-600'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <FaHome className="mr-2" />
                Home
              </Link>
              <Link
                to="/menu"
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive('/menu')
                    ? 'bg-white text-red-600'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <FaUtensils className="mr-2" />
                Menu
              </Link>
              <Link
                to="/about"
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive('/about')
                    ? 'bg-white text-red-600'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <FaInfoCircle className="mr-2" />
                About
              </Link>
              <Link
                to="/contact"
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive('/contact')
                    ? 'bg-white text-red-600'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <FaEnvelope className="mr-2" />
                Contact
              </Link>
            </nav>

            {/* Mobile Navigation Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-2">
                <Link
                  to="/"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive('/')
                      ? 'bg-white text-red-600'
                      : 'text-white hover:bg-white/20'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaHome className="mr-2" />
                  Home
                </Link>
                <Link
                  to="/menu"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive('/menu')
                      ? 'bg-white text-red-600'
                      : 'text-white hover:bg-white/20'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaUtensils className="mr-2" />
                  Menu
                </Link>
                <Link
                  to="/about"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive('/about')
                      ? 'bg-white text-red-600'
                      : 'text-white hover:bg-white/20'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaInfoCircle className="mr-2" />
                  About
                </Link>
                <Link
                  to="/contact"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive('/contact')
                      ? 'bg-white text-red-600'
                      : 'text-white hover:bg-white/20'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaEnvelope className="mr-2" />
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content - With Padding for Fixed Header */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-600 to-red-700 text-white py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Pizza Paradise</h3>
              <p className="text-gray-200">
                Bringing families together through the love of pizza since 1995.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-200 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/menu" className="text-gray-200 hover:text-white">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-200 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-200 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-200">
                <li>123 Pizza Street, Food City</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@pizzaparadise.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-500 text-center text-gray-200">
            <p>&copy; {new Date().getFullYear()} Pizza Paradise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;