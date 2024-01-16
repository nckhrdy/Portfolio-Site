import React from 'react';

const socialLinks = [
  { src: '/assets/LinkedIn.svg', alt: 'LinkedIn', href: 'https://www.linkedin.com/in/hardy-nicholas' },
  { src: '/assets/GitHub.svg', alt: 'GitHub', href: 'https://github.com/nckhrdy' },
  { src: '/assets/Green.svg', alt: 'Green', href: 'https://yourgreenthing.com' },
  { src: '/assets/Beige.svg', alt: 'Beige', href: 'https://yourbeigething.com' },
];

const SocialLinks: React.FC = () => {
  return (
    <div className="col-start-6 col-end-6 row-start-1 row-end-7 flex flex-col justify-center items-center space-y-0">
      {socialLinks.map((link, index) => (
        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity duration-300">
          <img src={link.src} alt={link.alt} className="w-35 h-35" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
