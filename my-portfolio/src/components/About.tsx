import React from 'react';

const About: React.FC = () => {
  return (
    <div className="relative">
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 min-h-screen">
        {/* Title centered above both columns in all sizes */}
        <div className="lg:col-span-2 flex justify-center items-center px-20 py-4 text-center">
          <p className="text-3xl lg:text-4xl font-bold" style={{ fontFamily: "'DocumanSTC', serif", color: "#000000" }}>
            So! Who am I?
          </p>
        </div>
        {/* Image section, stays next to the text until the smallest window size */}
        <div className="flex justify-center items-center px-4 lg:px-20 py-4">
          <img src="/assets/aboutme.svg" alt="About Me" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        {/* Text content section, stays next to the image until the smallest window size */}
        <div className="flex justify-center items-center px-4 lg:px-20 py-4">
          <div className="bg-white bg-opacity-90 shadow-lg p-4 lg:p-6 max-w-3xl w-full rounded-lg" style={{ margin: "0 auto" }}>
            <p className="text-lg lg:text-2xl xl:text-3xl font-normal" style={{ fontFamily: "'Nunito', serif", color: "#000000", lineHeight: "1.6" }}>
              I&apos;m a senior studying Computer Engineering at Boston University and my biggest passion is innovation. My interests began with robotics from an early age and that has since evolved into a love for software development and entrepreneurship. Recently, most of my projects have been built using embedded systems which has allowed me to quickly turn ideas to prototypes and then to practical solutions. I&apos;m excited to see where my journey takes me as I aim to bridge the gaps between technology and business solutions.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
