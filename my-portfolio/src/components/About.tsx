import React from "react";

const About: React.FC = () => {
  const skills = [
    {
      category: "Programming",
      items:
        "C/C#/C++, Swift, Python, JavaScript, TypeScript, HTML/CSS, MATLAB",
    },
    {
      category: "Development Tools",
      items:
        "Git, Node, React, Next, Firebase, MongoDB, Jest, Various microcontrollers, Pytorch",
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
        <div className="lg:col-span-2 flex justify-center items-center px-20 py-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">
            So! Who am I?
          </h2>
        </div>
        <div className="flex justify-center items-center px-4 lg:px-20 py-4">
          <img
            src="/assets/aboutme.svg"
            alt="About Me"
            className="max-w-full h-auto"
          />
        </div>
        <div className="flex justify-center items-center px-4 lg:px-20 py-4">
          <div className="retro-card p-4 lg:p-6 max-w-3xl w-full rounded-lg">
            <p className="text-lg lg:text-2xl xl:text-3xl" style={{ lineHeight: "1.6" }}>
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
        <div className="lg:col-span-2 flex justify-center items-center px-20 py-2 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold">
            Skills
          </h2>
        </div>
        <div className="lg:col-span-2 flex justify-center items-center px-4 lg:px-20 py-2">
          <div className="retro-card p-4 lg:p-6 max-w-3xl w-full rounded-lg">
            <div className="retro-grid">
              {skills.map((skill) => (
                <div key={skill.category} className="mb-2">
                  <h3 className="font-bold text-base lg:text-lg xl:text-xl">
                    {skill.category}:
                  </h3>
                  <p className="text-base lg:text-lg xl:text-xl" style={{ lineHeight: "1.4" }}>
                    {skill.items}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-center items-center px-20 py-2 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold">
            Awards
          </h2>
        </div>
        <div className="lg:col-span-2 flex justify-center items-center px-4 lg:px-20 py-2">
          <div className="retro-card bg-white bg-opacity-90 p-4 lg:p-6 max-w-3xl w-full rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
              {awards.map((award) => (
                <div key={award.alt} className="flex flex-col items-center hover-effect">
                  <img
                    src={award.src}
                    alt={award.alt}
                    className="rounded-lg mb-2 max-w-full h-auto"
                  />
                  <p className="text-sm lg:text-base xl:text-lg" style={{ color: 'var(--accent)' }}>
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