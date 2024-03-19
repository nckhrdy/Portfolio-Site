import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "../../components/Header";

const Project5: React.FC = () => {
  const textColor = "#575454";
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Sono Buoy Design - Project 5</title>
        <meta name="description" content="Project 2 description" />
      </Head>
      <Header />
      {/* Increase paddingTop here if your header is taller */}
      <div
        className="pt-24 min-h-screen bg-gray-100 flex flex-col justify-center items-center"
        style={{ fontFamily: "'DocumanSTC', serif" }}
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
            Sono Buoey Prototype
          </h1>
          <p className="text-lg mb-4 text-center" style={{ color: textColor }}>
            Mechanical Design Course Final Project
          </p>
          <div className="w-full h-64 relative mb-8">
            <Image
              src="/assets/Sono.png"
              alt="Project Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2
              className="text-2xl font-semibold text-center mb-4"
              style={{ color: textColor }}
            >
              Project Overview
            </h2>
            <div
              className="text-gray-600"
              style={{ fontFamily: "'Nunito', serif" }}
            >
              Collaborators: Nicholas Hardy, Jake Hyman, Ruian Luo, Brian Chau, Raka Ridianto
              <br />
              <br />
              Date: 2023-10-28 (University of Sydney Mechanical Design Course)
              <br />
              <br />
              For this project we were tasked with designing a prototype for a mechanincal only Sono Buoy. The Sono Buoy is a device used to detect submarines and other underwater objects. The device is dropped into the water and uses sonar to detect objects. In our case, we were designing and testing the mechanical funciton of dropping the device into the water and ensuring it would float and sink at the expected rates. 
              <br />
              <br />
              This project was a great learning experience for me as I was able to work with a team of mechanical engineers and improve my understanding of mechanical design, stress analysis, and material selection.
            </div>
            <h2
              className="text-2xl font-semibold text-center mb-4 mt-4"
              style={{ color: textColor }}
            >
              Key Features
            </h2>
            <ul
              className="text-gray-600 pl-4 list-disc"
              style={{ fontFamily: "'Nunito', serif" }}
            >
              <li>
                Detailed Design Report including stress analysis and material selection explanatino .
              </li>
              <li>
                Checkpoint time and distance logging via a Raspberry Pi-hosted
                database (TingoDB), with QR codes marking each checkpoint.
              </li>
              <li>
                Collision avoidance through range sensors and speed maintenance
                via PID control for optimal race performance.
              </li>
            </ul>
            <h2
              className="text-2xl font-semibold text-center mb-4 mt-4"
              style={{ color: textColor }}
            >
              Supporting Artifacts
            </h2>
            <div
              className="text-gray-600"
              style={{ fontFamily: "'Nunito', serif" }}
            >
              Explore further details of our project through the following
              resources:
              <br />
              <br />
              <a
                href="https://drive.google.com/file/d/1p83heObXq9DYXU78tu1gfZx_JFn7m9QY/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline" }}
              >
                Project Architecture Video
              </a>
              <br />
              <br />
              <a
                href="https://drive.google.com/file/d/10k-IGMbjfVYvtW3FPQGPIcMwyFa6g_xL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline" }}
              >
                Project Demo Video
              </a>
              <br />
              <br />
              <a
                href="https://github.com/nckhrdy/WifiRemoteBuggy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline" }}
              >
                Project GitHub
              </a>
              <br />
              <br />
              <div className="w-full h-64 relative mb-8">
                <Image
                  src="/assets/Proj4Diag.png"
                  alt="Project Summary"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <div className="w-full h-64 relative mb-8">
                <Image
                  src="/assets/Proj4SolDes.png"
                  alt="Solution Design"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <div className="w-full h-64 relative mb-8">
                <Image
                  src="/assets/Proj4FPV.png"
                  alt="Project Web Interface"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project5;
