import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "../../components/Header";

const Project4: React.FC = () => {
  const textColor = "#575454";
  const router = useRouter();

  return (
    <>
      <Head>
        <title>WiFi FPV Buggy - Project 4</title>
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
            onClick={() => router.push('/#projects')}
            className="mb-4 text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out"
            style={{ fontFamily: "'Nunito', serif" }}
          >
            &larr; Back
          </button>
          <h1
            className="text-4xl font-bold text-center mb-6"
            style={{ color: textColor }}
          >
            WiFi FPV Buggy
          </h1>
          <p className="text-lg mb-4 text-center" style={{ color: textColor }}>
            First Person View Buggy for Timed QR Code Scanning Challenge
          </p>
          <div className="w-full h-64 relative mb-8">
            <Image
              src="/assets/FPV.png"
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
              Collaborators: Nicholas Hardy, Marybel Boujaoude, Hassan Hijazi,
              Riya Deokar
              <br />
              <br />
              Date: 2023-05-02
              <br />
              <br />
              In this project, we embarked on creating a remote-controlled car
              designed to navigate through a rally race course marked by several
              checkpoints. The core objective was to log the car&apos;s time and
              distance as it progressed, ensuring it reached the finish line
              efficiently. Central to this endeavor was the development of a web
              interface that allowed for precise control over the car&apos;s
              steering, speed, and braking mechanisms. Key to our approach was
              the integration of range sensors for collision avoidance, a PID
              controller for consistent speed maintenance, and the innovative
              use of QR codes for race initiation and checkpoint identification.
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
                Remote-controlled car navigates a rally course, utilizing a web
                interface for steering, speed, and stop controls (Node.js).
              </li>
              <li>
                Checkpoint time and distance logging via a Raspberry Pi-hosted
                database (TingoDB), with QR codes marking each checkpoint.
              </li>
              <li>
                Collision avoidance through range sensors and speed maintenance
                via PID control for optimal race performance.
              </li>
              <li>
                Real-time race monitoring with an alpha display showing recent
                split times, enhancing user interaction.
              </li>
              <li>
                Course initiation and checkpoint identification executed with QR
                codes, streamlining the race process.
              </li>
            </ul>

            <h2
              className="text-2xl font-semibold text-center mb-4 mt-4"
              style={{ color: textColor }}
            >
              Implementation Details
            </h2>
            <ul
              className="text-gray-600 pl-4 list-disc"
              style={{ fontFamily: "'Nunito', serif" }}
            >
              <li>
                Integrated ESP32 and Raspberry Pi for control and logging, with
                LIDAR and ultrasonic sensors for obstacle detection.
              </li>
              <li>
                Developed a client web interface for transit time history
                queries and real-time car control by W-A-S-D keyboard inputs.
              </li>
              <li>
                Utilized IR communication and UDP message passing within a local
                network for efficient data transfer.
              </li>
              <li>
                Implemented encryption and security measures for system
                integrity, ensuring secure communication channels.
              </li>
              <li>
                Employed a Raspberry Pi camera for QR code scanning and data
                processing, linking physical checkpoints to digital logs.
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

export default Project4;
