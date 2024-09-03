import Image from "next/image";
import React from "react";
import dashboardimg from "../public/assets/projects/coreyodashboard.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/Navbar";

const items = [
  "React JS",
  "Typescript",
  "TailwindCSS",
  "React router",
  "Recharts",
  "Multiple plugins ",
];

const coreyodashboard = () => {
  return (
    <>
      <Head>
        <title>Coreyo Control Dashboard</title>
      </Head>
      <Navbar />
      <div className="w-full dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-black pt-16">
        <div className="w-full h-[50vh] relative ">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={dashboardimg}
            alt="/"
          />
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <h2 className="py-2 flex text-center items-center justify-center">
              Coreyo Control Dashboard
            </h2>
            <h3 className="flex text-center items-center justify-center">
              Typescript | React JS
            </h3>
            <h2>Project Overview</h2>
            <div>
              <p className="py-2">
                I developed multiple pages and integrated essential APIs to
                enhance the dashboard's functionality, facilitating seamless
                control, filtering, and tracking of user and business partner
                orders, bulk orders, refunds, and wallets within Coreyo's
                ecosystem. Employing TypeScript, React, and TailwindCSS, I took
                the initiative to come up with content and design in Figma when
                design resources were scarce. Subsequently, I developed and
                deployed the designed pages.
              </p>
              <p className="py-2">
                This included crafting a comprehensive table to monitor user
                wallet balances, transactions, and timestamps, offering detailed
                insights into financial transactions within the ecosystem. For
                order tracking, we utilized API data and implemented bar and
                line charts to visualize key metrics. Bar charts displayed live
                order counts, while line charts illustrated order trends over
                specific timeframes like weeks. Hover functionality provided
                users with detailed insights, such as daily order counts.
              </p>

              <p className="py-2">
                I conducted manual testing of the dashboard across different
                screen sizes to verify its cross-device functionality and
                responsiveness, ensuring an optimal user experience.
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
