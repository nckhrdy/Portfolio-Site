import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const textColor = '#575454';
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = (path) => {
    if (path.startsWith('#') && router.pathname === '/') {
      // If on the homepage and navigating to a hash, use the browser's native behavior
      const element = document.querySelector(path);
      if (element) {
        window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
      }
    } else if (path.startsWith('#')) {
      // If not on the homepage but navigating to a hash, push to homepage then scroll
      router.push('/').then(() => setTimeout(() => {
        const element = document.querySelector(path);
        if (element) {
          window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
        }
      }, 100));
    } else {
      // For all other routes, use Next.js router
      router.push(path);
    }

    toggleMenu(); // Close menu after navigating
  };

  return (
    <nav className="p-4 fixed top-0 left-0 right-0 z-50 bg-white w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div onClick={() => navigate('/')} className="text-xl font-semibold cursor-pointer" style={{ fontFamily: "'DocumanSTC', serif", color: textColor }}>
          Nicholas Hardy Portfolio
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {/* Hamburger Icon SVG */}
          </button>
        </div>
        <div className={`${isMenuOpen ? "fixed inset-0 bg-white bg-opacity-95 z-50 flex flex-col items-center justify-center" : "hidden"} md:flex md:flex-row md:relative md:bg-transparent md:items-center md:justify-between`}>
          <button className="absolute top-5 right-5 md:hidden" onClick={toggleMenu}>
            {/* Close Icon SVG */}
          </button>
          {['/', '#about', '#projects', '#contact'].map((path, index) => (
            <div key={index} onClick={() => navigate(path)} className="p-4 cursor-pointer font-semibold text-lg" style={{ fontFamily: "'DocumanSTC', serif", color: textColor }}>
              {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
