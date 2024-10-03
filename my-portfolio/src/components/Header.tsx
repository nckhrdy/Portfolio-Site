import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (path: string) => {
    if (path.startsWith('#') && router.pathname === '/') {
      const element = document.querySelector(path) as HTMLElement;
      if (element) {
        window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
      }
    } else if (path.startsWith('#')) {
      router.push('/').then(() => setTimeout(() => {
        const element = document.querySelector(path) as HTMLElement;
        if (element) {
          window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
        }
      }, 100));
    } else {
      router.push(path);
    }

    toggleMenu();
  };

  return (
    <nav className={`p-4 fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <span className="text-xl font-black cursor-pointer hover:text-red-800 transition-colors duration-200" style={{ fontVariationSettings: "'wdth' 125, 'wght' 900" }}>
            Nicholas Hardy
          </span>
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`${isMenuOpen ? "fixed inset-0 bg-white bg-opacity-95 z-50 flex flex-col items-center justify-center" : "hidden"} md:flex md:flex-row md:relative md:bg-transparent md:items-center md:justify-between`}>
          <button className="absolute top-5 right-5 md:hidden" onClick={toggleMenu} aria-label="Close menu">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {['/', '#about', '#projects', '#contact'].map((path, index) => (
            <div 
              key={index} 
              onClick={() => navigate(path)} 
              className="p-4 cursor-pointer font-bold text-lg hover:text-red-800 transition-colors duration-200"
              style={{ fontVariationSettings: "'wdth' 110, 'wght' 700" }}
            >
              {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
