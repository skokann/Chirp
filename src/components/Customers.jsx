import React from "react";

function Customers() {
  return (
    <div className="w-full h-auto bg-[#D7F5F5] p-8 ">
      <h1 className="font-bold text-3xl text-left">What our customers say</h1>
      <div className="flex flex-col gap-8 my-10  ">
        <div className="bg-white text-left rounded-">
          <div className="flex">
            <img
              className="py-3 px-3"
              src="/userAvatar01.svg"
              alt="userAvatar01"
            />
            <h1 className="pt-5 py-3 font-bold">Sara May</h1>
            <img
              className="ml-36"
              src="/Twitter (Blue).svg"
              alt="userAvatar01"
            />
          </div>
          <p className="py-3 px-3 text-lg text-gray-500">
            I just tried out @Chirp and its amazing, love all the analytics i
            can see.
          </p>
          <div className="flex py-4 px-3 ">
            <img src="/Like.svg" alt="" />
            <p className="ml-40 text-gray-500">March 2, 2021</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 my-10  ">
        <div className="bg-white text-left rounded-">
          <div className="flex">
            <img
              className="py-3 px-3"
              src="/userAvatar01.svg"
              alt="userAvatar01"
            />
            <h1 className="pt-5 py-3 font-bold">Sara May</h1>
            <img
              className="ml-36"
              src="/Twitter (Blue).svg"
              alt="userAvatar01"
            />
          </div>
          <p className="py-3 px-3 text-lg text-gray-500">
            I just tried out @Chirp and its amazing, love all the analytics i
            can see.
          </p>
          <div className="flex py-4 px-3 ">
            <img src="/Like.svg" alt="" />
            <p className="ml-40 text-gray-500">March 2, 2021</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 my-10  ">
        <div className="bg-white text-left rounded-">
          <div className="flex">
            <img
              className="py-3 px-3"
              src="/userAvatar01.svg"
              alt="userAvatar01"
            />
            <h1 className="pt-5 py-3 font-bold">Sara May</h1>
            <img
              className="ml-36"
              src="/Twitter (Blue).svg"
              alt="userAvatar01"
            />
          </div>
          <p className="py-3 px-3 text-lg text-gray-500">
            I just tried out @Chirp and its amazing, love all the analytics i
            can see.
          </p>
          <div className="flex py-4 px-3 ">
            <img src="/Like.svg" alt="" />
            <p className="ml-40 text-gray-500">March 2, 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
