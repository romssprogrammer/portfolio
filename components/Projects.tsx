import React from "react";
import { motion } from "framer-motion";
import { Cursor } from "react-simple-typewriter";
import Project from "./project";
import { projectData } from "../models/Projectdata";
type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5, 6];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#34d399] text-2xl text-center">
        Projects
        <Cursor />
      </h3>
      <div className="relative w-full  flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#34d399] scrollbar-thin">
        {projectData.map((project, i) => (
          <Project
            key={i}
            id={i}
            nbProject={projectData.length}
            projectImage={project.projectimage}
            projectName={project.projectName}
          />
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#34d399]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
