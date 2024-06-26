import Image from "next/image";
import React from "react";
import profilePic from "../images/me.jpg";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#283631] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" rounded-full h-32 w-32 mx-auto object-cover object-center"
        src="../images/me.jpg"
        alt=""
        width={150}
        height={150}
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">Creator of GodotLink</h4>
        <p className="font-bold text-2xl mt-1">Romain </p>
        <div className="flex space-x-2 my-2">
          logo1 logo2 logo3
          {/* tech used */}
          {/* tech used */}
          {/* tech used */}
        </div>
        <ul className="list-disc sapce-y-4 ml-5 text-lg">
          <li> test</li>
          <li> test</li>
          <li> test</li>
          <li> test</li>
          <li> test</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
