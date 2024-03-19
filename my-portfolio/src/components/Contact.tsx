import React from 'react';
import SocialLinks from './SocialLinks'; // Update the path as necessary

const Contact: React.FC = () => {
  return (
    <div style={{ position: "relative" }}>
      <main className="grid grid-cols-6 grid-rows-6 h-screen" style={{ position: "relative", zIndex: 2 }}>
        <div className="col-start-1 col-end-3 row-start-1 row-end-2 flex flex-col justify-center items-center ml-20 mt-20">
          <p className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'DocumanSTC', serif", color: "#000000" }}>
            {"Contact Me!"}
          </p>
        </div>
        <div className="col-start-1 col-end-6 row-start-2 row-end-6 flex justify-center items-center mt-10 mr-20">
          <div className="bg-white bg-opacity-90 shadow-lg p-4 md:p-6 max-w-3xl w-full rounded-lg" style={{ margin: "0 10%" }}>
            <p className="text-lg md:text-2xl lg:text-3xl font-normal" style={{ fontFamily: "'Nunito', serif", color: "#000000", lineHeight: "1.6" }}>
              {"Im currently seeking a full-time position at the intersection of engineering, innovation, and business. If you're interested in working with me, feel free to reach out via LinkedIn or email!"}
            </p>
          </div>
        </div>
        <SocialLinks />
        <div className="col-start-6 col-end-6 row-start-5 row-end-6 flex justify-start mr-15 pr-10 mb-10">
          <img src="/assets/EmailArrow.svg" alt="Email Me!" />
        </div>
      </main>
    </div>
  );
};

export default Contact;
