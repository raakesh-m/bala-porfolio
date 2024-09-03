import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../public/assets/logolight.svg";
import logodark from "../public/assets/logodark.svg";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import toast from "react-hot-toast";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const [icon, setIcon] = useState(false);
  const handleClick = () => {
    setIcon(!icon);
    if (theme === "dark") {
      toast("Bravo-Six, Go Loud!", {
        style: {
          borderRadius: "10px",
          background: "#f0f0f0",
          color: "#000",
          border: "2px solid #000000",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
        },
        duration: 1500,
      });
    } else {
      toast("Bravo-Six Going Dark", {
        style: {
          borderRadius: "10px",
          background: "#212121",
          color: "#fff",
          border: "2px solid #ffffff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
        },
        duration: 1500,
      });
    }
  };

  const { theme, setTheme } = useTheme();

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-[70px] shadow-xl bg-gray-300 dark:bg-gray-900 z-[100] ease-in-out duration-300"
          : "fixed w-full h-[70px] z-[100] bg-gray-200 dark:bg-gray-900"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <a className=" w-32 flex items-center justify-center cursor-pointer">
            {theme === "dark" ? (
              <Image src={logodark} alt="logo" className="cursor-pointer" />
            ) : (
              <Image src={logo} alt="logo" className="cursor-pointer" />
            )}
          </a>
        </Link>
        <div>
          <ul className="hidden md:flex items-center">
            <li className="ml-10 text-sm font-semibold uppercase ">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm font-semibold uppercase ">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-sm font-semibold uppercase ">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm font-semibold uppercase ">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="ml-10 text-sm font-semibold uppercase ">
              <Link href="/resume">Resume</Link>
            </li>
            <li className="ml-10 text-sm font-semibold uppercase  pr-2">
              <Link href="/#contact">Contact</Link>
            </li>
            <button
              type="button"
              className=" bg-transparent  mr-3 ml-4 shadow-none  text-black dark:text-white "
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                handleClick();
              }}
            >
              <div>
                {!icon ? (
                  <SunIcon className="w-6 hover:text-cyan-500" />
                ) : (
                  <MoonIcon className="w-6 hover:text-cyan-500" />
                )}
              </div>
            </button>
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center justify-center ">
            <div
              className=" bg-transparent  mr-1 md:hidden shadow-gray-400 text-black dark:text-white  "
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                handleClick();
              }}
            >
              <div>
                {!icon ? (
                  <SunIcon className="w-6 hover:text-cyan-500" />
                ) : (
                  <MoonIcon className="w-6 hover:text-cyan-500" />
                )}
              </div>
            </div>
            <div onClick={handleNav} className="md:hidden">
              <AiOutlineMenu size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-gray-900 p-10 ease-in duration-500"
              : "fixed left-[-300%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <a className="flex items-center justify-center cursor-pointer w-28">
                  {theme === "dark" ? (
                    <Image
                      src={logodark}
                      alt="logo"
                      className="cursor-pointer"
                    />
                  ) : (
                    <Image src={logo} alt="logo" className="cursor-pointer" />
                  )}
                </a>
              </Link>
              <div className="flex items-center space-x-2">
                <div
                  className=" bg-transparent  shadow-md shadow-gray-400 rounded-full text-black dark:text-white "
                  onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                    handleClick();
                  }}
                >
                  <div className="rounded-full p-3">
                    {!icon ? (
                      <SunIcon className="w-4 hover:text-cyan-500" />
                    ) : (
                      <MoonIcon className="w-4 hover:text-cyan-500" />
                    )}
                  </div>
                </div>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary !
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/resume">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Resume
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-7">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/raakesh999/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/raakesh-m"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:raakeshmuralitharan@gmail.com"
                >
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </a>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
