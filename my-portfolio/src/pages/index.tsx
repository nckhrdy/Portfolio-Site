import Head from "next/head";
import React from "react";
import SocialLinks from "../components/SocialLinks";
import Arrows from "../components/Arrows";
import TextStatements from "../components/IntroText";
import About from "../components/About";
import Projects from "../components/Projects";
import Header from "../components/Header";
import Contact from "../components/Contact"// Import the Header component
import { Analytics } from "@vercel/analytics/react"

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Nckhrdy Portfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
      </Head>

      <Header /> {/* Add the Header here */}
      
      <div className="relative min-h-screen" style={{ background: "#ffffff" }}>
        <main className="grid grid-cols-6 grid-rows-6 h-screen">
          <Arrows />
          <TextStatements />
          <SocialLinks />
        </main>
        {/* Additional Content Sections */}
        <div id="about" className="relative min-h-screen">
          <About /> {/* About section with an ID */}
        </div>
        <div id="projects" className="relative min-h-screen">
          <Projects /> {/* About section with an ID */}
        </div>
        <div id="contact" className="relative min-h-screen">
          <Contact /> {/* About section with an ID */}
        </div>
      </div>
    </>
  );
};

export default Home;
