// src/components/Header.tsx
import Link from 'next/link';
import { useState } from 'react'; // <--- ONLY import useState, NOT React

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200">
          ADmyBRAND
        </Link>

        {/* Navigation (Hidden on small screens) */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/features" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            Features
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            Pricing
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            Contact
          </Link>
        </nav>

        {/* Call-to-Action Button */}
        <div className="hidden md:block">
          <Link href="/signup" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) - Visible on small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay (Conditional Rendering) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 border-t border-gray-200">
          <nav className="flex flex-col space-y-3">
            <Link href="/features" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Contact
            </Link>
            <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Sign Up
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
