import React from 'react';
import Link from 'next/link';

const Projects: React.FC = () => {
  const projectLinks = [
    { href: '/project1', title: 'Project 1', description: 'Description of Project 1' },
    { href: '/project2', title: 'Project 2', description: 'Description of Project 2' },
    // ... Add more projects as needed ...
  ];

  return (
    <div style={{ position: "relative", background: "#ffffff" }}>
      <main className="grid grid-cols-3 grid-rows-2 h-screen gap-4 p-4">
        {projectLinks.map((project, index) => (
          <Link key={index} href={project.href}>
            <a className="block bg-gray-200 hover:bg-gray-300 rounded-lg shadow p-4 text-center transition-colors duration-300">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p>{project.description}</p>
            </a>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Projects;
