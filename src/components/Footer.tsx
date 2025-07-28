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
              {/* This is a placeholder SVG - replace with actual icon paths */}
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.505 1.493-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.262c-1.225 0-1.624.755-1.624 1.543V12h2.77l-.443 2.891h-2.327v6.987C18.343 21.128 22 16.991 22 12z"></path></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              {/* This is a placeholder SVG - replace with actual icon paths */}
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.175-1.55-3.597-1.55-3.41 0-6.182 2.766-6.182 6.182 0 .484.055.955.15 1.404-5.14-.26-9.692-2.723-12.742-6.467-.532.919-.84 1.987-.84 3.137 0 2.144 1.096 4.02 2.76 5.121-.81.025-1.56-.248-2.227-.616v.081c0 2.673 1.905 4.885 4.428 5.39-.464.123-.956.18-1.46.18-.357 0-.704-.035-1.036-.1.707 2.22 2.795 3.84 5.26 3.885-1.898 1.402-4.286 2.229-6.883 2.229-.448 0-.89-.029-1.32-.078C.917 21.947 3.553 23 6.36 23c7.633 0 11.93-6.49 11.93-12.164 0-.186-.002-.37-.01-.554A8.342 8.342 0 0024 4.557z"></path></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              {/* This is a placeholder SVG - replace with actual icon paths */}
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M22.23 0H1.77C.792 0 0 .774 0 1.733v20.534C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.733V1.733C24 .774 23.208 0 22.23 0zM7.18 20.457H3.42V9.088h3.76v11.369zM5.3 7.423c-1.22 0-2.02-.857-2.02-1.928 0-1.071.8-1.93 2.02-1.93 1.22 0 2.02.859 2.02 1.93 0 1.07-.8 1.928-2.02 1.928zm15.157 13.034h-3.76V14.12c0-1.082-.387-1.822-1.352-1.822-.738 0-1.176.497-1.372.977-.07.17-.058.4-.058.62v6.562h-3.76s.05-10.358 0-11.369h3.76v1.61c.49-.773 1.343-1.876 3.393-1.876 2.47 0 4.305 1.603 4.305 5.045v6.589z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
