import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Front-End Dev | Raakesh</title>
        <meta
          name="description"
          content="I'm a front-end web developer specializing in building user experience and interface. Currently, I'm focused on building responsive web applications."
        />
      </Head>
      <Navbar />
      <div className=" dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-black">
        <Main />

        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
