import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import profilePic from "public/images/me.jpg";
import Link from "next/link";
type Props = {};

export default function Hero({}: Props) {
  const { text, count } = useTypewriter({
    words: [
      "<Hi my name is Romain /> ",
      "Developer",
      "2D Artist",
      "2D Animator",
      "deep understanding lover",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" relative h-screen flex flex-col space-y-8 items-center justify-center  text-center overflow-hidden ">
      <BackgroundCircles />
      <Image
        className=" rounded-full h-32 w-32 mx-auto object-cover "
        src={profilePic}
        alt="myself"
        width={150}
        height={150}
      />
      <div className="z-40">
        <h2 className=" uppercase text-[#34d399] pb-2 tracking-[15px] text-2xl">
          Software Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10 ">
          <span className=" text-[#bbf7d0]">{text}</span>
          <Cursor />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
