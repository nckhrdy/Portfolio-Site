import React from 'react';

const About: React.FC = () => {
  return (
    <div style={{ position: "relative" }}>
      {/* Content */}
      <main className="grid grid-cols-6 grid-rows-6 h-screen" style={{ position: "relative", zIndex: 2 }}>
        {/* Your existing content */}
        <div className="col-start-1 col-end-3 row-start-1 row-end-2 flex flex-col justify-center items-center ml-20 mt-20">
          <p className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Bodoni Moda', serif", color: "#000000" }}>
            {"So! Who am I?"}
          </p>
        </div>
        <div className="col-start-3 col-end-7 row-start-2 row-end-6 flex justify-center items-center mt-10 mr-20">
          <div className="bg-white bg-opacity-90 shadow-lg p-4 md:p-6 max-w-3xl w-full rounded-lg" style={{ margin: "0 10%" }}>
            <p className="text-lg md:text-2xl lg:text-3xl font-normal" style={{ fontFamily: "'Bodoni Moda', serif", color: "#000000", lineHeight: "1.6" }}>
              {"I'm an engineer with a passion for innovation. I am currently a senior at Boston University, studying Computer Engineering, with a concentration in Technology Innovation and interests in Machine Learning and Robotics. I have past experience in software development, hardware development, product marketing and sales, and strategy. I am currently looking for where to spend my next chapter post-graduation."}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
