import React from "react";

const Goals = () => {
  return (
    <div class="h-screen w-screen flex flex-col justify-center items-center gap-15 bg-goals-bg bg-no-repeat bg-cover">
      <div className="bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.2)] w-screen h-full flex flex-col items-center justify-center gap-15">
        <div class="text-center text-white text-[50px] font-bold">
          Our goals
        </div>
        <div class="w-[1016px] h-[269px] relative">
          <div class="w-[954px] h-[59px] left-[40px] top-0 absolute text-white text-3xl font-bold">
            Enhance the speed and accuracy of oil spill detection.
          </div>
          <div class="w-[976px] h-[59px] left-[40px] top-[82px] absolute text-white text-3xl font-bold">
            Minimize environmental damage and economic losses.
          </div>
          <div class="w-[936px] h-[95px] left-[40px] top-[174px] absolute text-white text-3xl font-bold">
            Promote sustainable practices by raising awareness of marine
            pollution challenges.
          </div>
          <div class="w-[15px] h-[15px] left-0 top-[15px] absolute bg-white rounded-full"></div>
          <div class="w-[15px] h-[15px] left-0 top-[97px] absolute bg-white rounded-full"></div>
          <div class="w-[15px] h-[15px] left-0 top-[189px] absolute bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
