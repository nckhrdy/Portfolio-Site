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

  const makeHref = (section: string) => {
    return router.pathname === '/' ? section : `/${section}`;
  };

  return (
    <nav className="p-4 fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-semibold cursor-pointer" style={{ fontFamily: "'DocumanSTC', serif", color: textColor }}>Nicholas Hardy Portfolio</span>
        </Link>
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5h14a1 1 0 011 1v1a1 1 0 11-2 0V6H4v1a1 1 0 11-2 0V6a1 1 0 011-1zm0 5h14a1 1 0 011 1v1a1 1 0 11-2 0v-1H4v1a1 1 0 11-2 0v-1a1 1 0 011-1zm0 5h14a1 1 0 011 1v1a1 1 0 11-2 0v-1H4v1a1 1 0 11-2 0v-1a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        {/* Navigation Links */}
        <div className={`flex flex-col md:flex-row ${isMenuOpen ? "block" : "hidden"} md:block`}>
          <Link href="/"><span className="p-2 cursor-pointer font-semibold" style={{ fontFamily: "'DocumanSTC', serif", color: textColor }}>Home</span></Link>
          <Link href={makeHref("#about")}><span className="p-2 cursor-pointer font-semibold" style={{ fontFamily: "'DocumanSTC', serif", color: textColor }}>About</span></Link>
          <Link href={makeHref("#projects")}><span className="p-2 cursor-pointer font-semibold" style={{ fontFamily: "'DocumanSTC', serif", color: textColor }}>Projects</span></Link>
          <Link href={makeHref("#contact")}><span className="p-2 cursor-pointer font-semibold" style={{ fontFamily: "'DocumanSTC', serif", color: textColor }}>Contact</span></Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
