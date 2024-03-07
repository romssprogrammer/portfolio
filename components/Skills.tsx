import React from "react";
import { motion } from "framer-motion";
import Skill from "../components/Skill";
import { Cursor } from "react-simple-typewriter";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div className="h-screen flex relative  text-center md:text-left xl: flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#34d399] text-2xl text-center">
        Skills
        <Cursor />
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-[#34d399] text-2xl">
        Always Need deep understanding
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill image="https://icons8.com/icon/PXTY4q2Sq2lG/javascript" />
        <Skill image="imagesjava.png" />
        <Skill image="images/java.png" />
        <Skill image="images/java.png" />
        <Skill image="public\images\mysql.png" />
      </div>
    </motion.div>
  );
}

export default Skills;
