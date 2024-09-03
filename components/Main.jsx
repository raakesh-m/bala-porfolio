import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen  text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-white">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700 dark:text-white">
            Hi, I'm <span className="text-[#5651e5]"> Narasimmamoorthy</span>
          </h1>
          <h1 className="py-2 text-gray-700 dark:text-white">
          A DevOps Cloud Engineer

          </h1>
          <p className="py-4 text-gray-600 dark:text-white sm:max-w-[70%] m-auto">
          I'm focused on building scalable cloud infrastructure and automating CI/CD pipelines while continuously learning and adapting to emerging technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/raakesh999"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-md dark:shadow-none shadow-gray-400 bg-gray-300 dark:text-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/raakesh-m"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-md dark:shadow-none shadow-gray-400 bg-gray-300 dark:text-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:raakeshmuralitharan@gmail.com"
            >
              <div className="rounded-full shadow-md dark:shadow-none shadow-gray-400 bg-gray-300 dark:text-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
            <Link href="/resume">
              <div className="rounded-full shadow-md dark:shadow-none shadow-gray-400 bg-gray-300 dark:text-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
