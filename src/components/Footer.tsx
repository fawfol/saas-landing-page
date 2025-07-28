// src/components/Footer.tsx
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 md:py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Brand Info / Copyright */}
        <div>
          <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-200">
            ADmyBRAND
          </Link>
          <p className="mt-4 text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ADmyBRAND. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/features" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Features</Link></li>
            <li><Link href="/pricing" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Pricing</Link></li>
            <li><Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">About Us</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Contact</Link></li>
          </ul>
        </div>

        {/* Legal Links & Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal & Social</h3>
          <ul className="space-y-2 mb-6">
            <li><Link href="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Terms of Service</Link></li>
          </ul>
          <div className="flex justify-center md:justify-start space-x-4">
            {/* Social Media Icons - Replace with actual SVG icons or react-icons */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm2.707 9.293L12 14.586l-2.707-2.707a1 1 0 00-1.414 1.414l3.414 3.414a1 1 0 001.414 0l3.414-3.414a1 1 0 00-1.414-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg> {/* Facebook Placeholder */}
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
             <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm2.707 9.293L12 14.586l-2.707-2.707a1 1 0 00-1.414 1.414l3.414 3.414a1 1 0 001.414 0l3.414-3.414a1 1 0 00-1.414-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg> {/* Twitter Placeholder */}
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm2.707 9.293L12 14.586l-2.707-2.707a1 1 0 00-1.414 1.414l3.414 3.414a1 1 0 001.414 0l3.414-3.414a1 1 0 00-1.414-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg> {/* LinkedIn Placeholder */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
