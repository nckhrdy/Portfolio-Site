import Image from "next/image";
import React, { useState, useEffect } from "react";

const About: React.FC = () => {
  const [bgColor, setBgColor] = useState("#ffffff"); // Initial background color

  useEffect(() => {
    // This function will be called every time the user scrolls
    const handleScroll = () => {
      const scrollY = window.scrollY; // Get the current vertical position of the scroll bar

      // Determine the new background color based on the scroll position
      // Here, the color changes to #ADD8E6 (light blue) if the user has scrolled down 300 pixels or more
      // If the scroll position is less than 300 pixels, it changes back to white (#ffffff)
      // You can adjust the '300' value to change when the color switch happens
      // Also, you can replace "#ADD8E6" and "#ffffff" with any colors you prefer
      const newColor = scrollY > 800 ? "#B3B1A1" : "#ffffff";
      setBgColor(newColor); // Update the state, and thus the background color
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and then on unmount

  return (
    <div
      style={{
        position: "relative",
        background: bgColor,
        transition: "background-color 0.3s",
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
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 flex flex-col justify-center items-center ml-20">
          <p
            className="text-3xl md:text-4xl font-normal font-poppins"
            style={{ color: "#575454" }}
          >
            About Me
          </p>
        </div>
        <div className="col-start-1 col-end-5 row-start-5 row-end-5 flex flex-col justify-center ml-20">
          <p
            className="text-3xl md:text-4xl font-normal font-poppins mb-10"
            style={{ color: "#575454" }}
          >
            STUFF ABOUT ME
          </p>
          <p
            className="text-3xl md:text-4xl font-normal font-poppins"
            style={{ color: "#575454" }}
          >
            More things
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
