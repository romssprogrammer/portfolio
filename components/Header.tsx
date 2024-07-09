import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* social icon */}

        <SocialIcon
          url="https://github.com/romssprogrammer"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://vimeo.com/manage/videos/346806059"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://vimeo.com/manage/videos/332557611"
          fgColor="gray"
          bgColor="transparent"
        />

        {/* <Link href="https://www.instagram.com/romainrbas/">
          <span className="text-[20px]">Art experience</span>
        </Link> */}

        {/* <Link href='#contact'> */}
      </motion.div>
      {/* avoid element happening at the same time */}
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <SocialIcon
          url=""
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400 ">
          Get in touch
        </p>
      </motion.div>
      {/* </Link> */}
    </header>
  );
}
