import React from 'react';
import Link from 'next/link';

const Header = () => {
  const textColor = '#575454';

  return (
    <nav className="p-4 fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto flex justify-between">
        <div className="flex">
          {/* Logo or Brand Name */}
          <Link href="/">
            <span className="text-xl font-semibold cursor-pointer font-poppins" style={{ color: textColor }}>Nicholas Hardy Portfolio</span>
          </Link>
        </div>
        <div className="flex">
          {/* Navigation Links */}
          <Link href="/"><span className="p-2 cursor-pointer font-semibold font-poppins ml-5 mr-5" style={{ color: textColor }}>Home</span></Link>
          {/* Update About Link */}
          <Link href="#about"><span className="p-2 cursor-pointer font-semibold font-poppins ml-5 mr-5" style={{ color: textColor }}>About</span></Link>
          {/* Other Links */}
          <Link href="#projects"><span className="p-2 cursor-pointer font-semibold font-poppins ml-5 mr-5" style={{ color: textColor }}>Projects</span></Link>
          <Link href="/Contact"><span className="p-2 cursor-pointer font-semibold font-poppins ml-5 mr-5" style={{ color: textColor }}>Contact</span></Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
