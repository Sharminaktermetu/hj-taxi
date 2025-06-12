'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-black text-white p-4">
      <header className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-bold text-yellow-400">
          HJ <span className="text-white">taxi</span>
        </div>

        {/* Navigation for large screens only */}
        <nav className="space-x-4 hidden md:flex">
          <Link href="/" className={`hover:text-yellow-400 ${activeLink === 'home' ? 'text-yellow-400' : ''}`} onClick={() => handleLinkClick('home')}>
            Home
          </Link>
          <Link href="/services" className={`hover:text-yellow-400 ${activeLink === 'services' ? 'text-yellow-400' : ''}`} onClick={() => handleLinkClick('services')}>
            Services
          </Link>
          <Link href="/booking" className={`hover:text-yellow-400 ${activeLink === 'booking' ? 'text-yellow-400' : ''}`} onClick={() => handleLinkClick('booking')}>
            Booking
          </Link>
          <Link href="/cpam" className={`hover:text-yellow-400 ${activeLink === 'cpam' ? 'text-yellow-400' : ''}`} onClick={() => handleLinkClick('cpam')}>
            CPAM Transport
          </Link>
          <Link href="/contact" className={`hover:text-yellow-400 ${activeLink === 'contact' ? 'text-yellow-400' : ''}`} onClick={() => handleLinkClick('contact')}>
            Contact
          </Link>
        </nav>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-xl">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link href="/" className={`block p-2 ${activeLink === 'home' ? 'bg-yellow-400 text-black' : ''}`} onClick={() => handleLinkClick('home')}>
            Home
          </Link>
          <Link href="/services" className={`block p-2 ${activeLink === 'services' ? 'bg-yellow-400 text-black' : ''}`} onClick={() => handleLinkClick('services')}>
            Services
          </Link>
          <Link href="/booking" className={`block p-2 ${activeLink === 'booking' ? 'bg-yellow-400 text-black' : ''}`} onClick={() => handleLinkClick('booking')}>
            Booking
          </Link>
          <Link href="/cpam" className={`block p-2 ${activeLink === 'cpam' ? 'bg-yellow-400 text-black' : ''}`} onClick={() => handleLinkClick('cpam')}>
            CPAM Transport
          </Link>
          <Link href="/contact" className={`block p-2 ${activeLink === 'contact' ? 'bg-yellow-400 text-black' : ''}`} onClick={() => handleLinkClick('contact')}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
