import React from "react";
import { FaRegComment } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import { PiWhatsappLogoLight } from "react-icons/pi";

function Sms() {
  return (
    <div className=" bg-white rounded  border-2 border-gray-400 max-lg:w-full w-fit  mt-2">
      <div className=" flex justify-between  gap-10 py-1 px-3">
        <div className=" bg-yellow-400 flex text-center p-1 rounded">
          <FaRegComment className=" pt-1" />
          <small>SMS</small>
        </div>
        <div className=" text-black flex p-1 text-center rounded border">
          <MdKeyboardVoice className=" pt-1" />
          <small>Voice</small>
        </div>
        <div className="  text-black flex p-1 text-center rounded border">
          <PiWhatsappLogoLight className=" text-green-500 pt-1" />
          <small>Whatsapp</small>
        </div>
      </div>
      <hr className="text-black" />
      <div className=" flex flex-col gap-1 p-1">
        <small className="text-black bg-gray-300 p-1">SenterID</small>
        <small className="text-black bg-gray-300 p-1">SMS Credicts</small>
        <div>
          <small className="text-blue-500 bg-gray-300 p-1">SMS Plans</small>
        </div>
        <small className="text-black bg-gray-300 p-1">Staff History</small>
      </div>
      <hr className="text-black" />
      <div className=" flex justify-between gap-1 py-1 px-2">
        <div className=" bg-yellow-400 text-center p-1 rounded">
          <small>Recharge</small>
        </div>
        <div className=" text-red-500  p-1 text-center border-red-500 rounded border">
          <small>Usage</small>
        </div>
        <div className="   text-orange-500  p-1 text-center border-orange-500 rounded border">
          <small>Know DLT</small>
        </div>
        <div className="   text-blue-500  p-1 text-center border-blue-500 rounded border">
          <small>Need DLT</small>
        </div>
      </div>
    </div>
  );
}

export default Sms;
