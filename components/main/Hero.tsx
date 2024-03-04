import React from "react";
import HeroContents from "../sub/HeroContents";

const Hero = () => {
  return (
    <div className=" relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 -z-[1] w-full h-full object-cover animate-pulse"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContents />
    </div>
  );
};

export default Hero;
