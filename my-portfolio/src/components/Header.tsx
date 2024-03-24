import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
    <nav className="p-4 fixed top-0 left-0 right-0 z-50 bg-white w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div onClick={() => navigate('/')} className="text-xl font-semibold cursor-pointer hover:text-gray-800 transition-colors duration-200" style={{ fontFamily: "'DocumanSTC', serif" }}>
          Nicholas Hardy Portfolio
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`${isMenuOpen ? "fixed inset-0 bg-white bg-opacity-95 z-50 flex flex-col items-center justify-center" : "hidden"} md:flex md:flex-row md:relative md:bg-transparent md:items-center md:justify-between`}>
          <button className="absolute top-5 right-5 md:hidden" onClick={toggleMenu}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {['/', '#about', '#projects', '#contact'].map((path, index) => (
            <div key={index} onClick={() => navigate(path)} className="p-4 cursor-pointer font-semibold text-lg hover:text-red-800 transition-colors duration-200" style={{ fontFamily: "'DocumanSTC', serif" }}>
              {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
