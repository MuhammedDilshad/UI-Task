import React from "react";
import { AllData } from "../../assets/Helper";
import { LuLoader2 } from "react-icons/lu";
import { newItem } from "../../assets/Helper.js";

function AllItem() {
  return (
    <div className=" rounded-md border max-xl:w-full w-fit mt-2">
      <div className="flex max-sm:flex-col max-sm:gap-1   pt-2 pl-2  justify-between">
        <div className="flex gap-1">
          {AllData.map((data, indux) => (
            <small
              key={indux}
              className="   p-1 bg-slate-500 text-black hover:bg-blue-800"
            >
              {data}
            </small>
          ))}
        </div>
        <div className="flex justify-between max-sm:gap-1 gap-8">
          <small className=" p-1 bg-yellow-300 text-gray-950">
            Activity Log
          </small>
          <small className=" p-1 bg-yellow-300 text-gray-950">
            Data Checker
          </small>
          <LuLoader2 className=" text-black" />
        </div>
      </div>
      <div className="grid gap-1  m-2 grid-cols-6 max-sm:grid-cols-2">
        {newItem.map((datas, indux) => {
          return (
            <div
              className=" bg-slate-400 rounded  flex flex-col justify-center text-center  "
              key={indux}
            >
              <small className=" text-black">{datas.division}</small>
              <small className=" text-black">{datas.classNo}</small>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllItem;
