import React from "react";

function Inventory() {
  return (
    <div className=" bg-white rounded  border-2 border-gray-400 max-sm:w-full  w-fit mt-2">
      <div className=" p-3">
        <small className=" text-blue-500">Inventory</small>
      </div>
      <hr className="text-black" />
      <div className=" flex flex-col gap-1 p-1">
        <small className="text-black bg-gray-300 p-1">Library Books </small>
        <small className="text-black bg-gray-300 p-1">
          Laboratory Equipment{" "}
        </small>
        <small className="text-black bg-gray-300 p-1">
          Computer and IT Equipment{" "}
        </small>
        <small className="text-black bg-gray-300 p-1">
          Art and Performance Supplies{" "}
        </small>
      </div>
    </div>
  );
}

export default Inventory;
