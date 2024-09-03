import Image from "next/image";
import React from "react";
import travelapp from "../public/assets/projects/travelapp.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/Navbar";

const items = [
  "React JS",
  "React native",
  "React router",
  "Android studio",
  "Progressive Web App",
  "Multiple plugins",
];

const coreyodashboard = () => {
  return (
    <>
      <Head>
        <title>Travel App</title>
      </Head>
      <Navbar />
      <div className="w-full dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-black pt-16">
        <div className="w-full h-[50vh] relative ">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10 " />
          <Image
            className="absolute  z-1"
            layout="fill"
            objectFit="cover"
            src={travelapp}
            alt="/"
          />
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <h2 className="py-2 flex text-center items-center justify-center">
              Travel App
            </h2>
            <h3 className="flex text-center items-center justify-center">
              Next JS | React Native | React JS | PWA
            </h3>
            <h2 className="py-6">Project Overview</h2>
            <div>
              <p className="py-2">
                This project involves the development of a travel application
                with features similar to the popular platform TripAdvisor. Due
                to confidentiality constraints, specific project details are
                limited. However, the following description outlines the
                development process and key features implemented in the
                application.
              </p>
              <p className="py-2">
                The application, initially developed using React Native,
                underwent a migration to a Progressive Web Application (PWA)
                built with React JS to align with the client's requirements.
                Prioritizing user experience, the app boasts a user-friendly
                interface and robust trip planning tools. By integrating APIs
                and live APIs, users benefit from real-time updates, elevating
                their overall experience. Furthermore, the app ensures
                cross-device functionality and responsiveness, ensuring a
                seamless experience across various platforms.
              </p>
              <p className="py-2">
                While specific details regarding the application's name and
                unique features cannot be disclosed, Travel App aims to
                revolutionize travel exploration, ensuring convenience and
                accessibility across devices.
              </p>
            </div>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl dark:border dark:border-gray-400 dark:shadow-none shadow-gray-400 h-fit rounded-xl py-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                {items.map((item, index) => (
                  <p
                    key={index}
                    className="text-gray-600 dark:text-gray-200 py-2 flex items-center"
                  >
                    <RiRadioButtonFill className="px-1 pl-2 w-6 h-6 md:w-4 md:h-4 lg:w-6 lg:h-6" />{" "}
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <Link href="/#projects">
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default coreyodashboard;
