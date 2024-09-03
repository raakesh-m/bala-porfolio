import Image from "next/image";
import React from "react";
import spaceximg from "../public/assets/projects/spacex.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/Navbar";

const items = ["React JS", "TailwindCSS", "Javascript", "HTML5"];
const spacex = () => {
  return (
    <>
      <Head>
        <title>Space X | Demo</title>
      </Head>
      <Navbar />
      <div className="w-full pt-16">
        <div className="w-full h-[50vh] relative ">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={spaceximg}
            alt="/"
          />
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <h2 className="py-2 flex text-center items-center justify-center">
              SpaceX Demo
            </h2>
            <h3 className="flex text-center items-center justify-center">
              React JS - 2021
            </h3>
            <h2>Project Overview</h2>

            <p>
              This educational static web application, developed solely for
              learning purposes, utilizes React JS and TailwindCSS. Hosted on
              Netlify, it's a front-end demo inspired by SpaceX, an American
              aerospace manufacturer and space transportation company. Created
              as a learning project, this web app focuses exclusively on
              front-end development, offering insight into user interface design
              without diving into back-end functionalities.
            </p>
            <div className="mt-6">
              <a
                href="https://github.com/raakesh-m/SpaceXdemo"
                target="_blank"
                rel="noreferrer"
              >
                <button class="rounded-md px-5 py-2.5 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 hover:text-white">
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
                    Code
                  </span>
                </button>
              </a>
              <a
                href="https://spacex-demo-getban.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <button class="rounded-md px-5 py-2.5 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 hover:text-white">
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
                    visit
                  </span>
                </button>
              </a>
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

export default spacex;
