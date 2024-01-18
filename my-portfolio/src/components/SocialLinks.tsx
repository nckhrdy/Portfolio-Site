import React from 'react';

const socialLinks = [
  { src: '/assets/LinkedIn.svg', alt: 'LinkedIn', href: 'https://www.linkedin.com/in/hardy-nicholas' },
  { src: '/assets/GitHub.svg', alt: 'GitHub', href: 'https://github.com/nckhrdy' },
  { src: '/assets/Green.svg', alt: 'Green', href: '/assets/Resume NH 2024.pdf', text: 'Resume PDF' },
  { src: '/assets/Beige.svg', alt: 'Beige', href: 'https://yourbeigething.com' },
];

const SocialLinks: React.FC = () => {
  return (
    <div className="col-start-6 col-end-6 row-start-1 row-end-7 flex flex-col justify-center items-center space-y-4">
      {socialLinks.map((link, index) => (
        <div key={index} className="group relative">
          <a href={link.href} target="_blank" rel="noopener noreferrer" className="block opacity-100 hover:opacity-50 transition-opacity duration-300 flex items-center">
            <img src={link.src} alt={link.alt} className="w-35 h-35" />
            {link.text && (
              <span className="absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap overflow-hidden" 
              style={{ marginLeft: '-120%', paddingLeft: '15%' }}>
              {link.text}
            </span>
            )}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;