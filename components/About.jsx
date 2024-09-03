import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>

          <p className="py-2 text-gray-600 dark:text-gray-200">
            I am a BCA graduate with a deep passion for technology and
            computers. My journey in the tech world began in 2018 when I started
            building desktops and repairing hardware. As I delved deeper into
            the world of IT, my interests expanded beyond hardware. During the
            COVID-19 pandemic, I entered the IT industry and began exploring the
            world of DevOps and cloud computing, where I discovered a natural
            affinity for it. I recently completed my DevOps Cloud Engineer
            Certification at GUVI from March 2024 to July 2024.
          </p>
          <p className="py-2 text-gray-600 dark:text-gray-200">
            Fascinated by the intersection of development and operations, I have
            dedicated myself to mastering the skills necessary to succeed as a
            DevOps Cloud Engineer. With experience in building and deploying
            CI/CD pipelines, as well as automating cloud infrastructure, I
            specialize in creating efficient and scalable solutions that support
            seamless software delivery.
          </p>
          <p className="py-2 text-gray-600 dark:text-gray-200">
            I am proficient in modern DevOps tools and cloud platforms, with
            hands-on experience in AWS. I enjoy tackling complex challenges and
            am driven by a desire to streamline processes and enhance
            collaboration within development teams. I am eager to join a
            forward-thinking organization where I can continue growing and
            contribute to innovative cloud-based projects.
          </p>
          <Link href="/#projects">
            <button className="text-gray-600 text-md font-medium rounded-lg group shadow-lg dark:shadow-none shadow-gray-400  bg-white px-6 py-3 my-2 flex items-center hover:bg-gray-200 hover:text-[#5651e5] ">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-lg shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
