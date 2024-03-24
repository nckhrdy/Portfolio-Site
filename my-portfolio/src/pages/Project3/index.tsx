import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "../../components/Header";

const Project3: React.FC = () => {
  const textColor = "#575454";
  const router = useRouter();

  return (
    <>
      <Head>
        <title>NFC Scooter Fob - Project 3</title>
        <meta name="description" content="Project 3 description" />
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
            className="mb-4 text-gray-600 hover:text-red-600 transition duration-300 ease-in-out"
            style={{ fontFamily: "'Nunito', serif" }}
          >
            &larr; Back
          </button>
          <h1
            className="text-4xl font-bold text-center mb-6"
            style={{ color: textColor }}
          >
            NFC Scooter Fob
          </h1>
          <p className="text-lg mb-4 text-center" style={{ color: textColor }}>
            Secure NFC Fob for e-Scooter Access
          </p>
          <div className="w-full h-64 relative mb-8">
            <Image
              src="/assets/Fob.png"
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
              Date: 2023-04-20
              <br />
              <br />
              The NFC Scooter Fob project was aimed at developing a secure
              method to access e-scooters. The project involved the integration
              of NFC technology to facilitate secure access to e-scooters by
              passing unique identifiers to the scooter&apos;s control system. The
              project&apos;s primary objective was to design a system that could
              provide secure access to e-scooters while ensuring user
              convenience and system reliability.
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
                Enhanced security with NFC-enabled key fob design for
                proximity-based e-scooter unlocking.
              </li>
              <li>
                Dynamic device roles through ESP32, supporting both transmitter
                and receiver functionalities.
              </li>
              <li>
                User feedback via RGB LED indicators, signifying operational
                states.
              </li>
              <li>
                Comprehensive transaction logging for security audits, capturing
                FID, SID, and timestamps.
              </li>
              <li>
                Detailed operational oversight with a state machine architecture
                and visual diagrams.
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
                IR communication framework established for data payload
                transmission between fob and scooter.
              </li>
              <li>
                Seamless data integration within local networks using UDP
                messaging protocols.
              </li>
              <li>
                Server-side database development for storing transaction data,
                complemented by a web-based query interface.
              </li>
              <li>
                Advanced security implementations, including encrypted
                communication and unique key generation per transaction.
              </li>
              <li>
                Unified system integration combining Raspberry Pi camera and
                server for QR code-based authentication.
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
              <br /><br />
              <a
                href="https://drive.google.com/file/d/1wr9SW5AOvmGvePvcKLIu-ERTd6OCRgOA/view"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline" }}
              >
                Project Architecture Video
              </a>
              <br /><br />
              <a
                href="https://drive.google.com/file/d/167HEl0m1cnsbCQHSr_LFSs0hiYsIl1-V/view"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline" }}
              >
                Project Demo Video
              </a>
              <br /><br />
              <a
                href="https://github.com/nckhrdy/NFCScooterFob"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline" }}
              >
                Project GitHub
              </a>
              <br /><br />
              <div className="w-full h-64 relative mb-8">
                <Image
                  src="/assets/Proj3Arch.png"
                  alt="Project Architecture"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <div className="w-full h-64 relative mb-8">
                <Image
                  src="/assets/Proj3Full.png"
                  alt="Project Hardware"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <div className="w-full h-64 relative mb-8">
                <Image
                  src="/assets/Proj3State1.png"
                  alt="Project States"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <div className="w-full h-64 relative mb-8">
                <Image
                  src="/assets/Proj3State2.png"
                  alt="Project States"
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

export default Project3;