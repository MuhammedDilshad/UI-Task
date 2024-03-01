import React from "react";
import { IoIosPeople } from "react-icons/io";

function Staff() {
  return (
    <div className=" bg-white rounded  border-2 border-gray-400  w-fit max-lg:w-full  mt-2">
      <div className=" flex justify-between   gap-16 p-3">
        <small className=" text-blue-500">Staff</small>
        <div className="flex text-blue-500 gap-1">
          <IoIosPeople />
          <small>0 New Joinees</small>
        </div>
      </div>
      <hr className="text-black" />
      <div className=" flex flex-col gap-1 p-1">
        <small className="text-black bg-gray-300 p-1">Teaching Staff</small>
        <small className="text-black bg-gray-300 p-1">Non-Teaching Staff</small>
        <small className="text-black bg-gray-300 p-1">Total Staff</small>
        <small className="text-black bg-gray-300 p-1">Staff History</small>
      </div>
    </div>
  );
}

export default Staff;
