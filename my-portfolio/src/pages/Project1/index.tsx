import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "../../components/Header";

const Project1: React.FC = () => {
  const textColor = "#575454";
  const router = useRouter();

  return (
    <>
      <Head>
        <title>EchoView.ai - Project 1</title>
        <meta name="description" content="Project 1 description" />
        <link rel="icon" href="./assets/favicon.ico" />
      </Head>
      <Header />
      <div
        className="min-h-screen bg-gray-100 flex flex-col justify-center items-center"
        style={{ fontFamily: "'DocumanSTC', serif", paddingTop: "100px" }}
      >
        <div className="max-w-4xl mx-auto p-5">
          {/* Back button */}
          <button
            onClick={() => router.push("/#projects")}
            className="mb-4 text-gray-600 hover:text-red-800 transition duration-300 ease-in-out"
            style={{ fontFamily: "'Nunito', serif" }}
          >
            &larr; Back
          </button>
          <h1
            className="text-4xl font-bold text-center mb-6"
            style={{ color: textColor }}
          >
            EchoView.ai
          </h1>
          <p className="text-lg mb-4 text-center" style={{ color: textColor }}>
            Augmented Reality for the Deaf Community
          </p>
          <div className="w-full h-64 relative mb-8">
            <Image
              src="/assets/Echo.png"
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
            <p
              className="text-gray-600 pl-4 block"
              style={{ fontFamily: "'Nunito', serif" }}
            >
              Collaborators: Nicholas Hardy, Hassan Hijazi, Marybel Boujaoude,
              Riya Deokar, Jazmyn Walker
              <br />
              <br />
              Date: 2023-09-01 - 2024-05-01
              <br />
              <br />
              For my Senior Capstone Project, I chose to put forward a personal
              project rather than work for an existing company. This was where
              EchoView.ai was born.
              <br />
              <br />
              EchoView.ai is dedicated to helping unlock a world of
              communication, collaboration and human connection. We believe that
              everyone should hold the key to understanding spoken interactions,
              so we can foster community, learning, and innovation
            </p>
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
                Real-time speech-to-text transcription displayed directly in the
                user&apos;s field of view.
              </li>
              <li>
                Directional Microphones to focus on the speaker&apos;s voice and
                reduce background noise.
              </li>
              <li>
                Bluetooth connectivity to pair with smartphones and other
                devices.
              </li>
              <li>
                Very low prototype cost ($28.60 unit price) to ensure
                affordability.
              </li>
              <li>
                Over 90% accuracy in speech-to-text transcription until 70dB.
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
                ESP32-C3 microcontroller chosen for its processing power,
                wireless capabilities and efficiency. This was used to establish
                the BLE connection with the iOS application.
              </li>
              <li>
                SSD1306 OLED display used to display the real-time transcription
                into a bird bath optical combining system to acheive required
                20cm focal length.
              </li>
              <li>
                iOS mobile application developed using Swift to connect to the
                AR glasses via BLE and process the transcription requests using
                the on device Siri module.
              </li>
              <li>
                Custom 3D printed housing that holds the ESP32-C3, OLED display,
                mirrors and microphone array. The battery is connected to the
                ESP-32 via a braided USB-C cable that is routed through the
                frame and out the back of the glasses.
              </li>
            </ul>
            <h2
              className="text-2xl font-semibold text-center mb-4 mt-4"
              style={{ color: textColor }}
            >
              Supporting Artifacts
            </h2>
            <div className="w-full h-96 relative mb-8">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/O9t6mjyuZwE?autoplay=1&cc_load_policy=1&mute=1&hl=en&cc_lang_pref=en"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
                style={{ border: "none" }}
              ></iframe>
            </div>
            <div className="w-full h-96 relative mb-8">
              <Image
                src="/assets/EchoView.ai Poster.png"
                alt="Demo Day Poster"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <div className="w-full h-96 relative mb-8">
              <Image
                src="/assets/EchoView.ai collage.png"
                alt="App Collage"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project1;
