import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    <div className="relative bg-background">
      <div className="lg:col-span-2 flex justify-center items-center px-20 py-2 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold">
          Projects
        </h2>
      </div>
      <main className="retro-grid p-4 pt-20">
        {projectLinks.map((project, index) => (
          <Link key={index} href={project.href} passHref>
            <div className="cursor-pointer">
              <div className="retro-card rounded-lg p-4 md:p-6 flex flex-col justify-between h-full">
                <div className="relative" style={{ paddingBottom: '56.25%', width: '100%', marginBottom: '1rem' }}>
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                  {project.isAwardWinner && (
                    <div className="absolute top-0 right-0 bg-yellow-500 text-black px-2 py-1 m-2 rounded-full text-sm font-bold">
                      Award Winner
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-md md:text-lg">{project.description}</p>
                  <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold mt-2">
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