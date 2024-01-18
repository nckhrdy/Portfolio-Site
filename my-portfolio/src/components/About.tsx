import Image from "next/image";
import React, { useState, useEffect } from "react";

const About: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        background: "#ffffff",
      }}
    >
      {/* SVG as the background layer using Image component */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <Image
          src="/assets/Elipse1.svg" // Replace with your SVG path
          alt="Blury circles"
          layout="fill"
          objectFit="fill" // Adjust as needed
          priority // Loads image immediately
        />
      </div>

      {/* Grid overlay on top of the SVG */}
      <main
        className="grid grid-cols-6 grid-rows-6 h-screen"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div className="col-start-1 col-end-3 row-start-1 row-end-2 flex flex-col justify-center items-center ml-20 mt-20">
          <p
            className="text-3xl md:text-4xl font-normal font-poppins"
            style={{ color: "#575454" }}
          >
            So! Who am I?
          </p>
        </div>
        <div className="col-start-3 col-end-7 row-start-2 row-end-6 flex justify-center items-center mt-10 mr-20">
          <div
            className="bg-white bg-opacity-90 shadow-lg p-4 md:p-6 max-w-3xl w-full rounded-lg"
            style={{ margin: "0 10%" }}
          >
            <p
              className="text-lg md:text-2xl lg:text-3xl font-normal font-poppins"
              style={{ color: "#575454", lineHeight: "1.6" }}
            >
              I'm an engineer with a passion for
              innovation. I am currently a senior at Boston University, studying
              Computer Engineering, with a concentration in Technology
              Innovation and interests in Machine Learning and Robotics. I have
              past experience in software development, hardware development,
              product marketing and sales, and strategy. I am currently looking
              for where to spend my next chapter post-graduation.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
