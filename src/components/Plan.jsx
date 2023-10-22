import React from "react";

function Plan() {
  return (
    <div className="w-full  p-8 ">
      <div className="pt-16  ">
        <h1 className="font-bold text-3xl">
          One simple price <br /> plan.
        </h1>
        <h2 className="text-gray-600 p-4">
          Start growing your Twitter account by analyzing your followers
          patterns.
        </h2>
        <div className="border-2 border-[#f5dcb4] h-screen rounded-2xl mt-5  bg-[#FAE8CA]">
          <div className="p-8 text-left">
            <h1 className="text-2xl">Monthly</h1>
            <h2>
              <span className="font-bold text-4xl">$9</span>
              <span className="text-xl">/mo</span>
            </h2>
          </div>
          <div className="gap-2 text-left  flex flex-col items-center">
            <div className="flex  p-4">
              <img src="Checkmark.svg" alt="" />
              <h2>
                Unlimited scheduled tweets <br /> and threads.
              </h2>
            </div>
            <div className="flex p-4 ">
              <img className="" src="Checkmark.svg" alt="" />
              <h2>
                Schedule up to 3 weeks in <br /> advance.
              </h2>
            </div>
            <div className="flex p-4">
              <img src="Checkmark.svg" alt="" />
              <h2>
                Real-time audience analytics <br /> tracking up to 5k followers.
              </h2>
            </div>
            <img src="Line 3.svg" className="w-full px-10 " />
            <button className="w-auto  mx-5 h-12 rounded-md bg-blue-500 mt-5">
              <p className="text-white font-semibold">
                Start Trial with Twitter.
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;
