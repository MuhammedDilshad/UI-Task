import React from "react";
import AllItem from "../AllItem/AllItem.jsx";
import { DashBoardDatas } from "../../assets/Helper.js";
import Staff from "../Staff/Staff.jsx";
import Sms from "../Sms/Sms.jsx";
import Grades from "../Grades/Grades.jsx";
import Conserns from "../Conserns/Conserns.jsx";
import Inventory from "../Inventory/Inventory.jsx";
import Status from "../Status/Status.jsx";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const hangleNavigate = () => {
    navigate("/graph");
  };
  return (
    <div className=" bg-white h-auto  ">
      <div className=" rounded-lg border max-md:p-1 max-sm:p-0  p-5">
        <div className=" rounded-lg border pt-3 max-md:pl-1 max-sm:pl-0 pl-3">
          <div className=" text-black grid grid-cols-9 max-lg:grid-cols-5 max-sm:grid-cols-3 gap-1   ">
            {DashBoardDatas.map((data, indux) => (
              <small className="bg-slate-500 p-1 hover:bg-blue-800" id={indux}>
                {data}
              </small>
            ))}
          </div>
          <div className=" ">
            <div className=" flex max-xl:flex-col  justify-evenly ">
              <div>
                <AllItem />
              </div>
              <div className="flex max-sm:flex-col  max-sm:gap-3 gap-9 justify-evenly">
                <div>
                  <Staff />
                </div>
                <div>
                  <Sms />
                </div>
              </div>
            </div>
            <div className=" flex justify-evenly gap-20 max-xl:gap-5 max-lg:gap-0 max-lg:flex-col max-lg:justify-evenly ">
              <div className="flex max-sm:flex-col justify-evenly gap-20  max-xl:gap-2">
                <Grades />
                <Conserns />
              </div>
              <div className="flex max-sm:flex-col justify-evenly gap-20   max-xl:gap-2">
                <Inventory />
                <Status />
              </div>
            </div>
            <div className=" flex justify-evenly gap-20 max-xl:gap-5 max-lg:gap-0 max-lg:flex-col max-lg:justify-evenly ">
              <div className="flex max-sm:flex-col justify-evenly gap-20  max-xl:gap-2">
                <Grades />
                <Conserns />
              </div>
              <div className="flex max-sm:flex-col justify-evenly gap-20   max-xl:gap-2">
                <Inventory />
                <Status />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={hangleNavigate}
          className="rounded-lg max-sm:p-2 p-4 cursor-pointer text-white bg-blue-500"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
