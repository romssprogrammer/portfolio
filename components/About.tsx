import React from "react";
import { motion } from "framer-motion";
import profilePic from "../images/me.jpg";
import { Cursor } from "react-simple-typewriter";

type Props = {};

function About({}: Props) {
  return (
    <div className=" flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#34d399] text-2xl">
        About
        {/* <Cursor cursorColor="#bbf7d0" /> */}
      </h3>
      {/* <motion.div></motion.div> */}
      <motion.img
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        src=""
      />
      <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        className="space-y-10 px-0 md:px-10"
      >
        <h4 className=" text-[#bbf7d0] text-4xl font-semibold">
          A little{" "}
          <span className="underline decoration[#34d399]">bit of story</span>
        </h4>
        <p className="text-base text-3xl">
          Start in technology world as an embeded electronic technician discover
          programation with C language.
          <br />
          <br /> Curious and perseverant by nature, learning new things
          doesn&apos;t scare me, I take pleasure in transforming difficulty into
          a source of learning
          <br />
          <br /> what attract me about coding is not only the fact that we solve
          problems but the thinking process, developing skills and the
          discipline of approaching problems we develop
          <br />
          <br /> I also worked as storyboarder and 2d animator My atypical
          experience as a artist and 2D animator in the 2D animation industry
          allowed me to develop a particular sensitivity for storytelling,
          visual and creative aspects
        </p>
      </motion.div>
    </div>
  );
}

export default About;
