import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const textColor = '#575454';
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 fixed top-0 left-0 right-0 z-50 bg-white w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-semibold cursor-pointer" style={{ fontFamily: "'DocumanSTC', serif", color: textColor }}>Nicholas Hardy Portfolio</span>
        </Link>
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        {/* Fullscreen Menu Overlay */}
        <div className={`${isMenuOpen ? "fixed inset-0 bg-white bg-opacity-95 z-50 flex flex-col items-center justify-center" : "hidden"} md:flex md:flex-row md:relative md:bg-transparent md:items-center md:justify-between`}>
          <button className="absolute top-5 right-5 md:hidden" onClick={toggleMenu}>
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          {['/', '#about', '#projects', '#contact'].map((path, index) => (
            <Link key={index} href={path} className="p-4 cursor-pointer font-semibold text-lg" style={{ fontFamily: "'DocumanSTC', serif", color: textColor }} onClick={toggleMenu}>
              {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
