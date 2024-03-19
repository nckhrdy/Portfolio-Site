import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const textColor = '#575454';
  const router = useRouter();

  const makeHref = (section) => {
    // If not on the home page, return the root path with the hash, otherwise just the hash
    return router.pathname === '/' ? section : `/${section}`;
  };

  return (
    <nav className="p-4 fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto flex justify-between">
        <div className="flex">
          <Link href="/">
            <span className="text-xl font-semibold cursor-pointer" style={{ fontFamily: "'DocumanSTC', serif", color: textColor }}>Nicholas Hardy Portfolio</span>
          </Link>
        </div>
        <div className="flex">
          <Link href="/"><span className="p-2 cursor-pointer font-semibold ml-5 mr-5" style={{ fontFamily: "'DocumanSTC', serif", color: textColor }}>Home</span></Link>
          <Link href={makeHref("#about")}><span className="p-2 cursor-pointer font-semibold ml-5 mr-5" style={{ fontFamily: "'DocumanSTC', serif", color: textColor }}>About</span></Link>
          <Link href={makeHref("#projects")}><span className="p-2 cursor-pointer font-semibold ml-5 mr-5" style={{ fontFamily: "'DocumanSTC', serif", color: textColor }}>Projects</span></Link>
          <Link href={makeHref("#contact")}><span className="p-2 cursor-pointer font-semibold ml-5 mr-5" style={{ fontFamily: "'DocumanSTC', serif", color: textColor }}>Contact</span></Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
