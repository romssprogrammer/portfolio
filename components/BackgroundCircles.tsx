import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
          borderRadius: ["20%", "20%", "50%", "80%,", "20%"],
        }}
        transition={{ duration: 2.5 }}
        className="relative flex justify-center items-center"
      >
        <div className=" absolute border border-blue-400 rounded-full h-[200px] w-[300px] mt-52 animate-ping" />
        {/* <div className=" rounded-full  border border-blue-100 h-[300px] w-[300px] absolute mt-52" /> */}
        {/* <div className=" rounded-full  border border-blue-100  h-[500px] w-[500px] absolute mt-52" /> */}
        {/* <div className=" rounded-full border-dotted border-2 border-[#10b981] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse" /> */}
        <div className=" rounded-full border-dashed border border-[#10b981]  h-[700px] w-[900px] absolute mt-52 animate-pulse" />
      </motion.div>
    </div>
  );
}

export default BackgroundCircles;
