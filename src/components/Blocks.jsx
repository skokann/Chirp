import React from "react";

function Blocks() {
  return (
    <>
      <div className="w-full h-auto p-8">
        <h1 className="my-8 text-left font-bold text-4xl">
          Features that help you Tweet smarter.
        </h1>
        <div className="flex flex-col justify-between gap-8 pb-6  mt-6">
          <div className="flex flex-col border-2 text-left py-3 px-3 gap-2">
            <img className="w-10 pt-4 " src="/graph.png" alt="Graph" />
            <h1 className="font-bold text-lg text-left">Analytics</h1>
            <p className="text-gray-600">
              We constantly monitor your audience as it grows - so you can Tweet
              when your followers are most likely to be online and ready to
              engage with your content.
            </p>
          </div>
          <div className="flex flex-col border-2 text-left py-3 px-3 gap-2">
            <img
              className="w-10 pt-4 "
              src="/thinking.webp"
              alt="thinking emoji"
            />
            <h1 className="font-bold text-lg text-left">Smart Analyzer</h1>
            <p className="text-gray-600">
              Chirp automatically recognizes your followers most active times
              and automatically sends you notifications if you are missing out
              on a opportunity.
            </p>
          </div>
          <div className=" flex flex-col border-2 text-left py-3 px-3 gap-2">
            <img className="w-10  pt-4" src="/Calendar.png" alt="Calendar" />
            <h1 className="font-bold text-lg text-left">
              Scheduled Your Tweets
            </h1>
            <p className="text-gray-600">
              Quality tweets drive tons of engagement. With Chirp, you can write
              tweets in an advance and schedule them when your audience is most
              likely to read.
            </p>
          </div>
          <div className="flex flex-col border-2 text-left py-3 px-3 gap-2">
            <img className=" w-10 pt-4 " src="/moon.png" alt="Moon" />
            <h1 className="font-bold text-lg ">Dark Mode</h1>
            <p className="text-gray-600">
              Firnedly on the eyes, no matter what time you write your Tweets.
              All colors are chosen to make your eyes are at ease at all times.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blocks;
