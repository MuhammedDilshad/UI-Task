import React from "react";

function Grades() {
  return (
    <div className=" bg-white rounded  border-2 border-gray-400 max-sm:w-full  w-fit mt-2">
      <div className=" p-3">
        <small className=" text-blue-500">Grades&Boards</small>
      </div>
      <hr className="text-black" />
      <div className=" flex flex-col gap-1 p-1">
        <small className="text-black bg-gray-300 p-1">
          Freshman year in high school{" "}
        </small>
        <small className="text-black bg-gray-300 p-1">
          Sophomore year in high school
        </small>
        <small className="text-black bg-gray-300 p-1">
          Junior year in high school
        </small>
        <small className="text-black bg-gray-300 p-1">
          Senior year in high school
        </small>
      </div>
    </div>
  );
}

export default Grades;
