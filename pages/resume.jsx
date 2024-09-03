import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFileEarmarkArrowDownFill } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import Link from "next/link";
import Navbar from "../components/Navbar";
const resume = () => {
  return (
    <>
      <Head>
        <title>Raakesh | Resume</title>
        <meta
          name="description"
          content="I'm a front-end web developer specializing in building digital experiences."
        />
      </Head>
      <Navbar />

      <div className="w-full h-full dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-black">
        <div className="max-w-[940px]  mx-auto p-2 pt-[120px]">
          <h2 className="text-center">Resume</h2>
          <div className="bg-[#d0d4d6] dark:bg-slate-100 rounded-md my-4 p-4 w-full flex justify-between items-center">
            <h2 className="text-center dark:text-gray-900">Raakesh M</h2>
            <div className="flex">
              <a
                href="https://www.linkedin.com/in/raakesh999"
                target="_blank"
                rel="noreferrer"
                className="dark:text-gray-900"
              >
                <FaLinkedinIn size={24} style={{ marginRight: "1rem" }} />
              </a>
              <a
                href="https://github.com/raakesh-m"
                target="_blank"
                rel="noreferrer"
                className="dark:text-gray-900"
              >
                <FaGithub size={24} style={{ marginRight: "1rem" }} />
              </a>
            </div>
          </div>
          <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
            <div className="hidden sm:block">
              <p>
                Quick Learning <span className="px-1">|</span> Web Development
                <span className="px-1">|</span> Problem Solving
              </p>
            </div>
            <div className="block sm:hidden">
              <p>Quick Learning</p>
              <p className="py-2">Web Development</p>
              <p>Problem Solving</p>
            </div>
          </div>
          <p className="text-center">
            As a web development professional with 1.6 years of experience, I'm
            analytical, innovative, and motivated. I specialize in Next.js and
            Tailwind CSS, with additional skills in Figma design and computer
            hardware. I have a quick learning ability and excel in creating
            user-friendly interfaces for seamless experiences. I'm always
            refining my skills, staying adaptable to new technologies, and
            aiming for excellence in every project. I'm passionate about
            innovation and committed to delivering high-quality solutions.
          </p>

          {/* Skills area */}
          <div className="text-center py-4">
            <h5 className="text-center underline text-[18px] py-2">Skills</h5>
            <p className="py-2">
              <span className="font-bold">Developing</span>
              <span className="px-2">|</span>Next JS 14
              <span className="px-2">|</span>Typescript
              <span className="px-2">|</span>TailwindCSS
              <span className="px-2">|</span>React JS
              <span className="px-2">|</span>CSS
              <span className="px-2">|</span>Figma
              <span className="px-2">|</span>Javascript
              <span className="px-2">|</span>HTML
            </p>
            <p className="py-2">
              <span className="font-bold">Worked with</span>
              <span className="px-2">|</span>Framer Motion
              <span className="px-2">|</span>Linux
              <span className="px-2">|</span>
              Expo
              <span className="px-2">|</span>React Native
              <span className="px-2">|</span>Sanity CMS
              <span className="px-2">|</span>Stripe
              <span className="px-2">|</span>Next Authentication
              <span className="px-2">|</span>Redux Toolkit
              <span className="px-2">|</span>GIT<span className="px-2">|</span>
              Pugjs
              <span className="px-2">|</span>Vercel
            </p>
          </div>

          <div className="text-center items-center justify-center flex">
            <a
              href="raakesh.pdf"
              target="_blank"
              className="relative px-5 py-2 font-medium text-white group"
            >
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
              <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
              <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
              <span className="relative flex items-center">
                View Resume
                <BsFileEarmarkArrowDownFill className="ml-3 " />
              </span>
            </a>
          </div>
          <div className="flex justify-center py-10">
            <Link href="/#contact">
              <a className="shadow-sm shadow-gray-400 rounded-full">
                <div className="rounded-full dark:shadow-none shadow-gray-400 shadow-lg p-2 cursor-pointer hover:scale-110 ease-in duration-300">
                  <IoIosContact
                    className="text-gray-600 dark:text-gray-300"
                    size={27}
                  />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default resume;
