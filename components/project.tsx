import React from "react";
import { motion } from "framer-motion";
import { Cursor } from "react-simple-typewriter";

type Props = {
  id: number;
  nbProject: number;
  projectImage: string;
  projectName: string;
};
export default function Project({
  id,
  nbProject,
  projectImage,
  projectName,
}: Props) {
  return (
    <div className=" w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={projectImage}
        alt={projectName}
      />

      <div className="bg-slate-600 border-r">
        <h4 className="text-4xl font-semibold text-center ">
          <span className="">
            {projectName} - project : {1 + id}/{nbProject}
          </span>
        </h4>
        <p className=" text-lg text-center md:text-left">
          Base on a <span className="underline">3 tiers architecture</span> with
          a client implement in{" "}
          <span className="underline">GDscript godot engine language</span> , a
          webservice implemented in <span className="underline">java</span> and{" "}
          <span className=" underline">MySql Db</span>
        </p>
        <div className="bg-[#34d399]" />
      </div>
      {/* <div className="text-8xl  rounded-full ring-offset-2 ring-4 justify-center items-center  cursor-pointer">
        <span>&#8594;</span>
      </div> */}
    </div>
  );
}
