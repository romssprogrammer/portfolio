import React from "react";
import { motion } from "framer-motion";

type Props = { directionLeft?: boolean; image: string };

function Skill({ directionLeft, image }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={image}
        className="rounded-full border border-[#444d47] object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0    h-24 w-24 md:w-28 md:h-28 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-[#34d399] opacity-100"></p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
