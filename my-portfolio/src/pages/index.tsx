import Head from "next/head";
import React from "react";
import SocialLinks from "../components/SocialLinks";
import Arrows from "../components/Arrows";
import TextStatements from "../components/IntroText";
import About from "../components/About";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Nckhrdy Portfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
      </Head>

      <div className="relative min-h-screen" style={{ background: "#ffffff" }}>
        <main className="grid grid-cols-6 grid-rows-6 h-screen">
          <Arrows />
          <TextStatements />
          <SocialLinks />
        </main>
        {/* Additional Content Sections */}
        <About /> {/* Add the new section here */}
      </div>
    </>
  );
};

export default Home;