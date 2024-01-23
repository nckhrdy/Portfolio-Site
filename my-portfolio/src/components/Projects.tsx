import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import if using Next.js Image component

const Projects: React.FC = () => {
  const projectLinks = [
    {
      href: '/project1',
      title: 'EchoView.ai',
      description: 'Augmented Reality for the Audio Impaired',
      imageUrl: '/assets/Echo.png', 
    },
    {
      href: '/project2',
      title: 'Semi-Autonomous Buggy',
      description: 'Semi-Autonomous Buggy to Navigate a Course',
      imageUrl: '/assets/Buggy.png', 
    },
    {
        href: '/project3',
        title: 'NFC Scooter Fob',
        description: 'Secure NFC Fob for Electric Scooters',
        imageUrl: '/assets/Fob.png', 
      },
      {
        href: '/project4',
        title: 'WiFi FPV Buggy',
        description: 'WiFi controlled FPV Buggy with Live Video Feed',
        imageUrl: '/assets/FPV.png', 
      },
      {
        href: '/project5',
        title: 'Sono Buoy Design Project',
        description: 'Mechanical Design of a Sono Buoy',
        imageUrl: '/assets/Sono.png', 
      },
      {
        href: '/project6',
        title: 'This website!',
        description: 'My personal portfolio website',
        imageUrl: '/assets/Website.png', 
      },
  ];

  return (
    <div style={{ position: "relative", background: "#ffffff" }}>
      <main className="grid grid-cols-3 grid-rows-2 gap-4 p-4 pt-20">
        {projectLinks.map((project, index) => (
          <Link key={index} href={project.href} passHref>
            <div className="cursor-pointer">
              <div className="bg-white hover:bg-gray-100 rounded-lg shadow-lg p-4 md:p-6 transition-colors duration-300">
                {project.imageUrl && (
                  <div className="w-full h-40 relative mb-3"> {/* Adjust size as needed */}
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover" // Adjust as needed
                      className="rounded-t-lg" // Rounded top corners
                    />
                  </div>
                )}
                <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                <p className="mt-2 text-md md:text-lg">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Projects;
