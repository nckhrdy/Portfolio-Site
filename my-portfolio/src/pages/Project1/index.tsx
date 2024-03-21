import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/router';
import Header from "../../components/Header";

const Project1: React.FC = () => {
  const textColor = "#575454";
  const router = useRouter();

  return (
    <>
      <Head>
        <title>EchoView.ai - Project 1</title>
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
              className="text-2xl font-semibold mb-4"
              style={{ color: textColor }}
            >
              Project Overview
            </h2>
            <p className="text-gray-600 pl-4 block"
              style={{ fontFamily: "'Nunito', sans-serif" }}>
              For my Senior Capstone Project, I chose to put forward a personal
              project rather than work for an existing company. This was where
              EchoView.ai was born. EchoView.ai is a pair of augmented reality
              glasses that are designed to help the deaf and hard of hearing
              community.
              <br /><br />
              The glasses are designed to transcribe speech in real-time and
              display it on the user&apos;s field of view. This is done by sending audio via Bluetooth
              microphones on the glasses to then be transcribed by a speech-to-text API. We have also built an IOS app to work in tandem with the glasses to allow for the user to customize the text size, color, and allow them to access their conversation history.
              <br /><br />
              This project is still in the early stages of development as we have just finished our first prototype. We are currently working on improving the latency of the speech-to-text API and the overall design of the glasses.
              <br /><br />
              More updates to come soon!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project1;
