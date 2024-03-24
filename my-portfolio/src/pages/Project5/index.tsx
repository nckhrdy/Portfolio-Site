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
        <meta name="description" content="Project 5 description" />
      </Head>
      <Header />
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
            Sono Buoy Prototype
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
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2
              className="text-2xl font-semibold text-center mb-4"
              style={{ color: textColor }}
            >
              Project Overview
            </h2>
            <p
              className="text-gray-600 mb-4"
              style={{ fontFamily: "'Nunito', serif" }}
            >
              Collaborators: Nicholas Hardy, Jake Hyman, Ruian Luo, Brian Chau, Raka Ridianto
              <br />
              <br />
              Date: 2022-10-28 (University of Sydney Mechanical Design Course)
              <br />
              <br />
              For this project, we were tasked with designing and testing a mechanical only Sono Buoy prototype. We had to perform a Stress Analysis, Material Selection, Cost Analysis and accurate engineering drawings. The final report was submitted as a PDF (attatched below) and the prototype was tested in that class. 
              <br />
              <br />
              This was a valuable experience for me as I was able to work with a team of mechanical engineers and learn about the design process from a different perspective.
            </p>
            <h2
              className="text-2xl font-semibold text-center mb-4"
              style={{ color: textColor }}
            >
              Project Submission
            </h2>
            {/* Embedding PDF Viewer Here */}
            <div className="overflow-auto" style={{ fontFamily: "'Nunito', serif", height: '500px' }}>
              <object data="/assets/USyd SonoBuoy Group5.pdf" type="application/pdf" width="100%" style={{ minHeight: '500px' }}>
                <p>Your browser does not support PDFs. Please download the PDF to view it: <a href="/assets/USyd SonoBuoy Group5.pdf">Download PDF</a>.</p>
              </object>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project5;
