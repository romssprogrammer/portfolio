import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "../components/ExperienceCard";
import { Cursor } from "react-simple-typewriter";
type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ x: -200 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#34d399] text-2xl">
        Experience
        <Cursor />
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#34d399] scrollbar-thin ">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
