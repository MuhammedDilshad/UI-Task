import React from "react";

function Status() {
  return (
    <div className=" bg-white rounded  border-2 border-gray-400 max-sm:w-full w-fit  mt-2">
      <div className=" gap-20 p-3">
        <div className="flex text-blue-500 gap-1">
          <div className=" bg-yellow-400 flex text-center p-1 rounded">
            <small>Login Status</small>
          </div>
          <div className=" text-black flex p-1 text-center rounded border">
            <small>Never Logged List</small>
          </div>
        </div>
      </div>
      <hr className="text-black" />
      <div className=" flex flex-col gap-1 p-1">
        <small className="text-black bg-gray-300 p-1">
          Academic Performance
        </small>
        <small className="text-black bg-gray-300 p-1">Financial Burden</small>
        <small className="text-black bg-gray-300 p-1">Career Preparation</small>
        <small className="text-black bg-gray-300 p-1">
          Mental Health and Wellness
        </small>
      </div>
    </div>
  );
}

export default Status;
