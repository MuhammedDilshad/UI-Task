import React from "react";
import {
  TbCircleLetterM,
  TbCircleLetterC,
  TbCircleLetterB,
} from "react-icons/tb";
import { GiPostOffice } from "react-icons/gi";
import {
  FaRegBell,
  FaSearch,
  FaUserCircle,
  FaGraduationCap,
  FaBook,
  FaBus,
} from "react-icons/fa";
import { RiMicrosoftLine } from "react-icons/ri";
import { CiMoneyBill } from "react-icons/ci";
import { AiFillSound } from "react-icons/ai";
import { IoSpeedometer } from "react-icons/io5";

function DemoHeader() {
  return (
    <div className=" bg-white">
      <div className=" flex justify-between max-md:px-0 py-2 px-2">
        <div className=" flex max-sm:flex-col max-md:gap-1 gap-3">
          <div>
            <div className="text-black  max-sm:text-xs text-sm">
              <small className=" ">MCB DEMO SCHOOL</small>
            </div>
            <div className="flex  max-md:pl-0 pl-4">
              <TbCircleLetterM className=" text-red-700  " />
              <TbCircleLetterC className="  text-yellow-600 " />
              <TbCircleLetterB className=" text-blue-700  " />
            </div>
          </div>
          <div className=" text-red-600 max-md:text-sm">
            <strong>MCB Demo School</strong>
          </div>
        </div>
        <div className=" flex gap-1 ">
          <div>
            <select
              className="rounded-lg  cursor-pointer border max-sm:p-0 p-1  text-white-500 bg-blue-500"
              name=""
              id=""
            >
              <option value="">Get Help</option>
              <option value="">Office</option>
            </select>
          </div>
          <div className=" flex max-md:gap-0 gap-2 pt-1">
            <small className=" text-gray-700 max-sm:text-xs">
              AY:2023-2024
            </small>
            <GiPostOffice className=" text-yellow-500" />
            <FaRegBell className=" text-black" />
            <FaSearch className=" text-black" />
            <RiMicrosoftLine className=" text-black" />
            <FaUserCircle className=" text-black bg-slate-200" />
          </div>
        </div>
      </div>
      <div className=" max-sm:hidden flex max-md:justify-center max-sm:gap-1 gap-2 max-md:pl-0 pl-16">
        <div className=" max-md:text-xs max-md:items-center text-gray-500 max-md:flex-col justify-center flex gap-1">
          <FaGraduationCap />
          <small>SIS</small>
        </div>
        <div className=" max-md:text-xs max-md:items-center text-gray-500 flex max-md:flex-col  gap-1">
          <FaUserCircle />
          <small>HR</small>
        </div>
        <div className=" max-md:text-xs max-md:items-center text-gray-500 flex max-md:flex-col  gap-1">
          <CiMoneyBill />
          <small>Finance</small>
        </div>
        <div className=" max-md:text-xs max-md:items-center text-gray-500 flex max-md:flex-col  gap-1">
          <FaBook />
          <small>Grade book</small>
        </div>
        <div className=" max-md:text-xs max-md:items-center text-gray-500 flex max-md:flex-col  gap-1">
          <FaUserCircle />
          <small>Admissions</small>
        </div>
        <div className=" max-md:text-xs text-gray-500 flex max-md:flex-col max-md:items-center  gap-1">
          <FaBus />
          <small>Transport</small>
        </div>

        <div className=" max-md:text-xs max-md:items-center text-gray-500 flex max-md:flex-col max-md:justify-center  gap-1">
          <AiFillSound />
          <small>Communication</small>
        </div>
        <div className=" max-md:text-xs max-md:items-center text-gray-500 flex max-md:flex-col  gap-1">
          <IoSpeedometer />
          <small>Conserns</small>
        </div>
      </div>
      <div className="hidden max-sm:inline">
        <select
          className="rounded-lg  cursor-pointer border max-sm:p-0 p-1  text-blue-500 bg-white border-blue-700"
          name=""
          id=""
        >
          <option value="">SIS</option>
          <option value="">HR</option>
          <option value="">Finance</option>
          <option value="">Grade book</option>
          <option value="">Admissions</option>
          <option value="">Transport</option>
          <option value="">Communication</option>
          <option value="">Conserns</option>
        </select>
      </div>
    </div>
  );
}

export default DemoHeader;
