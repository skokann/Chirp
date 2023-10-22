import React from "react";

function Plan() {
  return (
    <div className="w-full h-screen p-8 ">
      <div className="pt-16  ">
        <h1 className="font-bold text-3xl">
          One simple price <br /> plan.
        </h1>
        <h2 className="text-gray-600 p-4">
          Start growing your Twitter account by analyzing your followers
          patterns.
        </h2>
        <div>
          <h1>Monthly</h1>
          <h2>$9/mo</h2>
          <img src="" alt="" />
          <div className="flex flex-col">
            <div>
              <img src="/Checkmark.svg" alt="" />
              <p>Unlimited scheduled tweets and threads.</p>
            </div>
            <div>
              <img src="/Checkmark.svg" alt="" />
              <p>Schedule up to 3 weeks in advanced.</p>
            </div>
            <div>
              <img src="/Checkmark.svg" alt="" />
              <p>Real-time audience alanytics tracking up to 5k followers.</p>
            </div>
          </div>
          <img src="" alt="" />
          <button className="w-full h-12 rounded-md bg-blue-500 mt-5">
            <p className="text-white font-semibold">
              {" "}
              Start Trial with Twitter
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Plan;
