import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import if using Next.js Image component

const Projects: React.FC = () => {
  const projectLinks = [
    // Award-winning projects first
    {
      href: '/Project1',
      title: 'EchoView.ai',
      description: 'Augmented Reality for the Audio Impaired',
      imageUrl: '/assets/Echo.png',
      isAwardWinner: true,
      category: 'AR/VR',
    },
    {
      href: '/Project6',
      title: 'This website!',
      description: 'My personal portfolio website',
      imageUrl: '/assets/PortfolioHomePage.png',
      isAwardWinner: true,
      category: 'Web Development',
    },
    // Other projects follow
    {
      href: '/Project2',
      title: 'Autonomous Buggy',
      description: 'Autonomous Buggy to Navigate a Course',
      imageUrl: '/assets/Buggy.png',
      category: 'Robotics',
    },
    {
      href: '/Project3',
      title: 'NFC Scooter Fob',
      description: 'Secure NFC Fob for Electric Scooters',
      imageUrl: '/assets/Fob.png',
      category: 'IoT',
    },
    {
      href: '/Project4',
      title: 'WiFi FPV Buggy',
      description: 'WiFi controlled FPV Buggy with Live Video',
      imageUrl: '/assets/FPV.png',
      category: 'Robotics',
    },
    {
      href: '/Project5',
      title: 'Sono Buoy Design Project',
      description: 'Mechanical Design of a Sono Buoy',
      imageUrl: '/assets/Sono.png',
      category: 'Mechanical Engineering',
    },
  ];

  return (
    <div style={{ position: "relative", background: "#ffffff" }}>
      <div className="lg:col-span-2 flex justify-center items-center px-20 py-2 text-center">
        <p className="text-2xl lg:text-3xl" style={{ fontVariationSettings: "'wdth' 125, 'wght' 900", color: "#000000" }}>
          Projects
        </p>
      </div>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 pt-20">
        {projectLinks.map((project, index) => (
          <Link key={index} href={project.href} passHref>
            <div className="cursor-pointer">
              <div className="bg-white hover:bg-red-800 rounded-lg shadow-lg p-4 md:p-6 transition-colors duration-300 flex flex-col justify-between" style={{ height: '100%' }}>
                <div className="relative" style={{ paddingBottom: '56.25%', width: '100%', marginBottom: '1rem' }}>
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                  {project.isAwardWinner && (
                    <div className="absolute top-0 right-0 bg-yellow-400 text-black px-2 py-1 m-2 rounded-full text-sm font-bold">
                      Award Winner
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl" style={{ fontVariationSettings: "'wdth' 110, 'wght' 700" }}>{project.title}</h3>
                  <p className="mt-2 text-md md:text-lg" style={{ fontVariationSettings: "'wdth' 100, 'wght' 400" }}>{project.description}</p>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2" style={{ fontVariationSettings: "'wdth' 100, 'wght' 600" }}>
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Projects;