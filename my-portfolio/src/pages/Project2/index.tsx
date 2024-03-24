import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/router';
import Header from "../../components/Header";

const Project2: React.FC = () => {
  const textColor = "#575454";
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Autonomous Buggy - Project 2</title>
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
            className="mb-4 text-gray-600 hover:text-red-600 transition duration-300 ease-in-out"
            style={{ fontFamily: "'Nunito', serif" }}
          >
            &larr; Back
          </button>
          <h1
            className="text-4xl font-bold text-center mb-6"
            style={{ color: textColor }}
          >
            Autonomous Buggy
          </h1>
          <p className="text-lg mb-4 text-center" style={{ color: textColor }}>
            Autonomous Buggy for Course Navigation
          </p>
          <div className="w-full h-64 relative mb-8">
            <Image
              src="/assets/Buggy.png"
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
            <div className="text-gray-600"
            style={{ fontFamily: "'Nunito', serif" }}>
              Collaborators: Nicholas Hardy, Marybel Boujaoude, Hassan Hijazi,
              Riya Deokar
              <br />
              <br />
              Date: 2023-04-04
              <br />
              <br />
              The Autonomous Buggy project aimed to develop a self-driving
              buggy capable of navigating a course autonomously. The project
              involved the integration of sensors, actuators, and control
              systems to facilitate the buggy&apos;s autonomous operation. The
              project&apos;s primary objective was to design a system that could
              navigate a course while avoiding obstacles and maintaining a
              safe distance from them.
            </div>
            <h2
              className="text-2xl font-semibold text-center mb-4 mt-4"
              style={{ color: textColor }}
            >
              Key Features
            </h2>
            <ul className="text-gray-600 pl-4 list-disc"
            style={{ fontFamily: "'Nunito', serif" }}>
              <li>
                Proportional, integral, differential (PID) control system for
                precise speed and steering adjustments.
              </li>
              <li>
                Combination of ultrasonic and Lidar sensors for effective
                collision avoidance and path tracking.
              </li>
              <li>
                Utilization of an optical encoder for accurate speed measurement
                and control.
              </li>
              <li>
                Advanced software architecture accommodating sensor and actuator
                timing for reliable system performance.
              </li>
              <li>
                Wireless control for start and stop commands, enhancing
                operational flexibility.
              </li>
            </ul>
            <h2
              className="text-2xl font-semibold text-center mb-4 mt-4"
              style={{ color: textColor }}
            >
              Implementation Details
            </h2>
            <ul className="text-gray-600 pl-4 list-disc"
            style={{ fontFamily: "'Nunito', serif" }}>
              <li>
                ESP32 microcontroller chosen for its processing power and
                wireless capabilities.
              </li>
              <li>
                H-Bridge motor controller used to calibrate the ESC with a
                Neutral value (1500) as well as the maximum and minimum values
                (2000 and 1000).
              </li>
              <li>
                Speed control was achieved by using a PID controller to adjust
                the PWM signal sent to the ESC.
              </li>
              <li>
                The Lidar sensor was used to detect obstacles and calculate the
                distance to them to determine the steering angle and speed of
                the buggy.
              </li>
              <li>
                ESP wifi capabilities were used as a remote control to start and
                stop the buggy via a node.js server.
              </li>
            </ul>
            <h2
              className="text-2xl font-semibold text-center mb-4 mt-4"
              style={{ color: textColor }}
            >
              Supporting Artifacts
            </h2>
            <div className="text-gray-600"
            style={{ fontFamily: "'Nunito', serif" }}>
              Explore further details of our project through the following resources:
              <br /><br />
              <a
                href="https://drive.google.com/file/d/1qet2Beorp1TNlXkDEIk6q_9u5V8p38tI/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline" }}
              >
                Project Architecture Video
              </a>
              <br /><br />
              <a
                href="https://github.com/nckhrdy/SelfDrivingBuggy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline" }}
              >
                Project GitHub
              </a>
              <br /><br />
              <div className="w-full h-64 relative mb-8">
                <Image
                  src="/assets/Proj2Arch.png"
                  alt="Project Architecture"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <div className="w-full h-64 relative mb-8">
                <Image
                  src="/assets/Proj2States.png"
                  alt="Project States"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <div className="w-full h-64 relative mb-8">
                <Image
                  src="/assets/Proj2Button.png"
                  alt="Project Button"
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

export default Project2;