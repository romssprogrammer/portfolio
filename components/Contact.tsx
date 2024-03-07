import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

import { Cursor, Typewriter } from "react-simple-typewriter";
type Props = {};

function Contact({}: Props) {
  return (
    <div className="h-screen flex relative text-center flex-col items-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto">
      <h3 className="absolute top-36 uppercase tracking-[3px] text-[#34d399] text-2xl">
        Contact <Cursor />
      </h3>
      <div className="flex  flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          How to reach me
          <span className="text-[#34d399]">
            {" "}
            let me know your level of interest
          </span>
          <div>
            <div className="flex items-center space-x-5 justify-center m-8">
              <EnvelopeIcon className="text-[#34d399] h-7 w-7 animate-pulse" />
              <p className="text-2xl">ssb07@proton.me</p>
            </div>
          </div>
        </h4>
      </div>
    </div>
  );
}

export default Contact;
