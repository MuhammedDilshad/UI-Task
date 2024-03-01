import React from "react";

function FrontOfficeHeader() {
  return (
    <div className=" flex justify-between bg-white py-2 px-5   text-gray-500">
      <div className="flex items-center  ">
        <strong>Front Office Analysis</strong>
      </div>

      <div>
        <select
          className="rounded-lg max-sm:w-auto w-96 cursor-pointer border p-2 border-gray-600 text-gray-500 bg-white"
          name=""
          id=""
        >
          <option value="">MCB Demo School</option>
          <option value="">MCB Demo College</option>
          <option value="">MCB Demo Primery</option>
        </select>
      </div>
    </div>
  );
}

export default FrontOfficeHeader;
