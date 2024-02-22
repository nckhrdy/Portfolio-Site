import React from "react";
import Head from "next/head";
import Image from "next/image";


const Project1: React.FC = () => {
  // Define the color as a constant if you will use it in multiple places
  const textColor = "#575454";

  return (
    <>
      <Head>
        <title>EchoView.ai - Project 1</title>
        <meta name="description" content="Project 1 description" />
      </Head>
      <div
        className="min-h-screen bg-gray-100 flex flex-col justify-center items-center"
        style={{ fontFamily: "'Bodoni Moda', serif" }}
      >
        <div className="max-w-4xl mx-auto p-5">
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
            {/* Replace src with your project image */}
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
            <p className="text-gray-600 pl-4 block">
              For my Senior Capstone Project, I chose to put forward a personal
              project rather than work for an existing company. This was where
              EchoView.ai was born. EchoView.ai is a pair of augmented reality
              glasses that are designed to help the deaf and hard of hearing
              community. The glasses use dual MEM microphones to capture speech
              that is then transcribed in real time into the user's field of
              view.
              <br />
              <br />
              <span>
                The glasses are powered by a BCM2711 Quad core Cortex-A72 (ARM
                v8) 64-bit SoC @ 1.8GHz with 8GB of SDRAM which runs Whisper.cpp
                (OpenAI's Whisper model ported to C++) locally for the speech to
                text conversion.
              </span>
              <br />
              <br />
              <span>
                This project is still in the early stages of development, but as
                of the time I am writing this, the glasses are able to
                transcribe speech with 95% accuracy and with a 1s delay. The
                output is displayed by using an optical combiner to project the
                text onto the user's field of view.
              </span>
              <br />
              <br />
              <span>
                Follow the project's progress on
                <a
                  href="https://github.com/nckhrdy/EchoView.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  my GitHub
                </a>
                .
              </span>
            </p>

            {/* Add more content about Project 1 here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project1;
