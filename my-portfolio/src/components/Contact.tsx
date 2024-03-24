import React from 'react';
import SocialLinks from './SocialLinks'; // Update the path as necessary

const Contact: React.FC = () => {
  return (
    <div style={{ position: "relative" }}>
      <main className="grid grid-cols-6 grid-rows-6 h-screen" style={{ position: "relative", zIndex: 2 }}>
        <div className="col-start-1 col-end-3 row-start-1 row-end-2 flex flex-col justify-center items-center ml-20 mt-20">
          <p className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'DocumanSTC', serif", color: "#000000" }}>
            Contact Me!
          </p>
        </div>
        <div className="col-start-1 col-end-6 row-start-2 row-end-6 flex justify-center items-center mt-10 mr-20">
          <div className="bg-white bg-opacity-90 shadow-lg p-4 md:p-6 max-w-3xl w-full rounded-lg" style={{ margin: "0 10%" }}>
            <p className="text-lg md:text-2xl lg:text-3xl font-normal" style={{ fontFamily: "'Nunito', serif", color: "#000000", lineHeight: "1.6" }}>
              I&apos;m currently seeking a full-time position at the intersection of engineering, innovation, and business. If you&apos;re interested in working with me, feel free to reach out via <a href="https://www.linkedin.com/in/hardy-nicholas" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>LinkedIn</a> or <a href="mailto:nckhrdy@bu.edu" style={{ textDecoration: "underline" }}>email</a>!
            </p>
          </div>
        </div>
        <SocialLinks />
      </main>
    </div>
  );
};

export default Contact;
