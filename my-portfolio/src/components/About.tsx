import React from "react";

const About: React.FC = () => {
  const skills = [
    {
      category: "Programming",
      items:
        "C/C++/C#, Python, JavaScript, TypeScript, Swift, HTML/CSS, MATLAB, Verilog",
    },
    {
      category: "Development Tools",
      items:
        "Git, Node.js, React, Firebase, MongoDB, Next.js, TailwindCSS, Jest, various microcontrollers and sensors",
    },
    {
      category: "Design & Modeling",
      items: "SolidWorks, OnShape, Canva, Figma, Adobe Suite",
    },
    {
      category: "Languages",
      items: "Native English and Spanish",
    },
  ];

  const awards = [
    {
      src: "/assets/DesignExcel.jpeg",
      alt: "Award 1",
      description: "Design Excellence Award 2023/2024",
    },
    {
      src: "/assets/SocialImpact.jpeg",
      alt: "Award 2",
      description: "Societal Impact Capstone Project Award",
    },
  ];

  return (
    <div className="relative">
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 min-h-screen">
        {/* Title centered above both columns in all sizes */}
        <div className="lg:col-span-2 flex justify-center items-center px-20 py-4 text-center">
          <p
            className="text-3xl lg:text-4xl font-bold"
            style={{ fontFamily: "'DocumanSTC', serif", color: "#000000" }}
          >
            So! Who am I?
          </p>
        </div>
        {/* Image section, stays next to the text until the smallest window size */}
        <div className="flex justify-center items-center px-4 lg:px-20 py-4">
          <img
            src="/assets/aboutme.svg"
            alt="About Me"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        {/* Text content section, stays next to the image until the smallest window size */}
        <div className="flex justify-center items-center px-4 lg:px-20 py-4">
          <div
            className="bg-white bg-opacity-90 shadow-lg p-4 lg:p-6 max-w-3xl w-full rounded-lg"
            style={{ margin: "0 auto" }}
          >
            <p
              className="text-lg lg:text-2xl xl:text-3xl font-normal"
              style={{
                fontFamily: "'Nunito', serif",
                color: "#000000",
                lineHeight: "1.6",
              }}
            >
              I&apos;m a recent 2024 Computer Engineering graduate from Boston
              University and my biggest passion is innovation. My interests
              began with robotics from an early age and that has since evolved
              into a love for software development and entrepreneurship.
              Recently, many of my projects have involved combining embedded
              systems with web apps, mobile apps and machine learning. This has
              enabled me to quickly turn ideas to prototypes and then into
              practical solutions. I&apos;m excited to see where my journey
              takes me as I aim to bridge the gaps between technology and
              business solutions.
            </p>
          </div>
        </div>
        {/* Skills Section */}
        <div className="lg:col-span-2 flex justify-center items-center px-20 py-2 text-center">
          <p
            className="text-2xl lg:text-3xl font-bold"
            style={{ fontFamily: "'DocumanSTC', serif", color: "#000000" }}
          >
            Skills
          </p>
        </div>
        <div className="lg:col-span-2 flex justify-center items-center px-4 lg:px-20 py-2">
          <div
            className="bg-white bg-opacity-90 shadow-lg p-4 lg:p-6 max-w-3xl w-full rounded-lg"
            style={{ margin: "0 auto" }}
          >
            {skills.map((skill) => (
              <div key={skill.category} className="mb-2">
                <p
                  className="font-semibold text-base lg:text-lg xl:text-xl"
                  style={{ fontFamily: "'Nunito', serif", color: "#000000" }}
                >
                  {skill.category}:
                </p>
                <p
                  className="text-gray-700 text-base lg:text-lg xl:text-xl"
                  style={{
                    fontFamily: "'Nunito', serif",
                    color: "#000000",
                    lineHeight: "1.4",
                  }}
                >
                  {skill.items}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Awards Section */}
        <div className="lg:col-span-2 flex justify-center items-center px-20 py-2 text-center">
          <p
            className="text-2xl lg:text-3xl font-bold"
            style={{ fontFamily: "'DocumanSTC', serif", color: "#000000" }}
          >
            Awards
          </p>
        </div>
        <div className="lg:col-span-2 flex justify-center items-center px-4 lg:px-20 py-2">
          <div
            className="bg-white bg-opacity-90 shadow-lg p-4 lg:p-6 max-w-3xl w-full rounded-lg"
            style={{ margin: "0 auto" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
              {awards.map((award) => (
                <div key={award.alt} className="flex flex-col items-center">
                  <img
                    src={award.src}
                    alt={award.alt}
                    className="rounded-lg mb-2"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                  <p
                    className="text-sm lg:text-base xl:text-lg"
                    style={{ fontFamily: "'Nunito', serif", color: "#000000" }}
                  >
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
