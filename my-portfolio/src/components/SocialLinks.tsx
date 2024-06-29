import React from 'react';

const socialLinks = [
  { src: '/assets/LinkedIn.svg', alt: 'LinkedIn', href: 'https://www.linkedin.com/in/hardy-nicholas', text: 'LinkedIn'},
  { src: '/assets/GitHub.svg', alt: 'GitHub', href: 'https://github.com/nckhrdy', text: 'GitHub' },
  {
    src: '/assets/Green.svg', alt: 'Green', href: '/assets/ResumeNH_v.1.0.P.pdf', text: 'Resume' },
  { src: '/assets/email.svg', alt: 'Email', href: 'mailto:nckhrdy@bu.edu', text: 'Email' },
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
              style={{ marginLeft: '-120%', paddingLeft: '15%', fontFamily: 'poppins' }}>
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