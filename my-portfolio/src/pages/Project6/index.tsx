import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/router';
import Header from "../../components/Header";

const Project6: React.FC = () => {
  const textColor = "#575454";
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Personal Portfolio - Project 6</title>
        <meta name="description" content="Project 1 description" />
      </Head>
      <Header />
      <div
        className="min-h-screen bg-gray-100 flex flex-col justify-center items-center"
        style={{ fontFamily: "'DocumanSTC', serif", paddingTop: "100px" }} 
      >
        <div className="max-w-4xl mx-auto p-5">
          {/* Back button */}
          <button
            onClick={() => router.back()}
            className="mb-4 text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            &larr; Back
          </button>
          <h1
            className="text-4xl font-bold text-center mb-6"
            style={{ color: textColor }}
          >
            My Portfolio
          </h1>
          <p className="text-lg mb-4 text-center" style={{ color: textColor }}>
            My Personal Project Portfolio
          </p>
          <div className="w-full h-64 relative mb-8">
            <Image
              src="/assets/PortfolioHomePage.png"
              alt="Project Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: textColor }}
            >
              Project Overview
            </h2>
            <p className="text-gray-600 pl-4 block"
              style={{ fontFamily: "'Nunito', sans-serif" }}>
              As a personal project, I wanted to demostrate a self taught skillset in web development. I built this website using Next.js, Tailwind CSS, and TypeScript and it is deployed using Vercel. I hope you enjoy the website and find it easy to navigate. If you have any feedback, feel free to reach out to me.
              <br /><br />
              This website is still a work in progress and I will be adding more projects and features in the future.
              <br /><br />
              I appreciate your patience and understanding :)
              <br />
              <br />
            </p>
            <a
                href="https://github.com/nckhrdy/Portfolio-Site/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline" }}
              >
              Project GitHub
              </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project6;
