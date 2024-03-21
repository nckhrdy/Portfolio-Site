import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import if using Next.js Image component

const Projects: React.FC = () => {
  const projectLinks = [
    {
      href: '/Project1',
      title: 'EchoView.ai',
      description: 'Augmented Reality for the Audio Impaired',
      imageUrl: '/assets/Echo.png', 
    },
    {
      href: '/Project2',
      title: 'Autonomous Buggy',
      description: 'Autonomous Buggy to Navigate a Course',
      imageUrl: '/assets/Buggy.png', 
    },
    {
        href: '/Project3',
        title: 'NFC Scooter Fob',
        description: 'Secure NFC Fob for Electric Scooters',
        imageUrl: '/assets/Fob.png', 
      },
      {
        href: '/Project4',
        title: 'WiFi FPV Buggy',
        description: 'WiFi controlled FPV Buggy with Live Video Feed',
        imageUrl: '/assets/FPV.png', 
      },
      {
        href: '/Project5',
        title: 'Sono Buoy Design Project',
        description: 'Mechanical Design of a Sono Buoy',
        imageUrl: '/assets/Sono.png', 
      },
      {
        href: '/Project6',
        title: 'This website!',
        description: 'My personal portfolio website',
        imageUrl: '/assets/PortfolioHomePage.png', 
      },
  ];

  return (
    <div style={{ position: "relative", background: "#ffffff" }}>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 pt-20">
        {projectLinks.map((project, index) => (
          <Link key={index} href={project.href} passHref>
            <div className="cursor-pointer">
              <div className="bg-white hover:bg-gray-100 rounded-lg shadow-lg p-4 md:p-6 transition-colors duration-300 flex flex-col justify-between" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ paddingBottom: '56.25%', position: 'relative', width: '100%', marginBottom: '1rem' }}>
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-md md:text-lg">{project.description}</p>
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