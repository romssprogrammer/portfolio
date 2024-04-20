import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-700 text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-900 scrollbar-thumb-[#34d399]">
      <Head>
        <title>Romain Portfolio</title>
        {/* <link rel="stylesheet" href="styles/globals.css" /> */}
      </Head>
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience*/}
      {/* <section id="experience" className="snap-center">
        <WorkExperience />
      </section> */}
      {/* Skills*/}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* Projects*/}
      <section id="projects" className="snap-start ">
        <Projects />
      </section>

      {/* Contact Me*/}
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
styles;
