import React from "react";
import { FiTwitter } from "react-icons/fi";
import Navbar from "./Navbar";

function Hero() {
  return (
    <>
      <div className="w-full h-max bg-[#FBF8F3] p-8">
        <Navbar />
        <img className="pt-20" src="/Hero-desktop.png" alt="" />
        <div>
          <h1 className="text-left font-bold text-3xl pt-8 tracking-normal">
            Twitter analytics <br /> taken to a whole new <br /> level.
          </h1>
          <p className="text-left pt-4 text-gray-500">
            Chirp is a suite of Twitter analytics that will <br /> help you
            better understand your audience, <br /> which tweets they like, and
            most <br />
            importantly, when they are the most active <br /> on Twitter.{" "}
          </p>
          <button className="w-full h-12 rounded-md bg-blue-500 mt-5">
            <p className="text-white font-semibold"> Sign in with Twitter</p>
          </button>
          <p className="mt-5 font-medium text-blue-500 text-lg">Learn more </p>
          <div className="flex flex-row mt-6 mb-4">
            <img src="/userAvatar01.svg" alt="userAvatar01" />
            <img src="/userAvatar02.svg" alt="userAvatar01" />
            <img src="/userAvatar03.svg" alt="userAvatar01" />
            <img src="/userAvatar04.svg" alt="userAvatar01" />
            <img src="/userAvatar05.svg" alt="userAvatar01" />
            <img src="/userAvatar06.svg" alt="userAvatar01" />
          </div>
          <p className="text-left font-medium text-gray-600 tracking-wide text-base  ">
            Join <span className="font-semibold text-blue-500">195</span> others
            who have analyzed their followers and scheduled{" "}
            <span className="font-semibold text-blue-500">1342</span> tweets!
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
