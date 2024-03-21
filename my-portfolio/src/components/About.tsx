import React from 'react';

const About: React.FC = () => {
  return (
    <div style={{ position: "relative" }}>
      <main className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4 min-h-screen" style={{ position: "relative", zIndex: 2 }}>
        <div className="col-start-1 md:col-start-1 md:col-end-3 row-start-1 flex flex-col justify-center items-center px-4 md:px-20 pt-20">
          <p className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'DocumanSTC', serif", color: "#000000" }}>
            {"So! Who am I?"}
          </p>
        </div>
        {/* Ensure the image resizes and repositions correctly without overlap */}
        <div className="col-start-1 md:col-start-1 md:col-end-3 row-start-2 md:row-start-2 row-end-3 md:row-end-4 flex justify-center items-center px-4 md:px-20 py-4">
          <img src="/assets/aboutme.svg" alt="About Me" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        {/* Adjust text content for better spacing and readability */}
        <div className="col-start-1 md:col-start-3 md:col-end-7 row-start-3 md:row-start-2 row-end-4 md:row-end-6 flex justify-center items-center px-4 md:px-20 py-4">
          <div className="bg-white bg-opacity-90 shadow-lg p-4 md:p-6 max-w-3xl w-full rounded-lg" style={{ margin: "0 auto" }}>
            <p className="text-lg md:text-2xl lg:text-3xl font-normal" style={{ fontFamily: "'Nunito', serif", color: "#000000", lineHeight: "1.6" }}>
              {"I'm a senior studying Computer Engineering at Boston University and my biggest passion is innovation. My interests began with robotics from an early age and that has since evolved into a love for software development and entrepreneurship. Recently, most of my projects have been built using embedded systems which has allowed me to quickly turn ideas to prototypes and then to practical solutions. I'm excited to see where my journey takes me as I aim to bridge the gaps between technology and business solutions."}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
