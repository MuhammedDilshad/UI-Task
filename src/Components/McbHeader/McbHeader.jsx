import React from "react";
import {
  TbCircleLetterM,
  TbCircleLetterC,
  TbCircleLetterB,
} from "react-icons/tb";

import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";

function McbHeader() {
  return (
    <div className=" bg-white flex justify-between pt-2 px-3 max-sm:px-0 border-b-indigo-500 border border-b-4">
      <div>
        <div className="flex">
          <TbCircleLetterM className=" text-red-700  text-3xl" />
          <TbCircleLetterC className="  text-yellow-600 text-3xl" />
          <TbCircleLetterB className=" text-blue-700  text-3xl" />
        </div>
        <div className="text-black">
          <small className=" max-sm:text-xs">MY CLASSBOARD</small>
        </div>
      </div>
      <div className=" flex justify-end max-sm:gap-0 gap-2">
        <div className=" bg-red-950 rounded-lg border flex  p-1  ">
          <FaGooglePlay className="  max-sm:text-2xl text-3xl  mt-3" />
          <div className=" text-center">
            <small className=" max-sm:text-xs">GET IT ON</small>
            <h1 className=" max-sm:text-xs">Google Play</h1>
          </div>
        </div>
        <div className=" bg-red-950 rounded-lg border flex  p-1  ">
          <FaApple className=" max-sm:text-2xl text-3xl  mt-3" />
          <div className=" text-center">
            <small className=" max-sm:text-xs">Available on the</small>
            <h1 className=" max-sm:text-xs">App Store</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default McbHeader;
