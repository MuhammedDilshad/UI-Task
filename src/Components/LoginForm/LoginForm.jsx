import React from "react";
import silhouette from "../../assets/silhouette.jpg";
import { AiOutlineApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import microsoft from "../../assets/microsoft.png";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const hangleNavigate = () => {
    navigate("/school");
  };
  return (
    <div
      className=" bg-cover h-screen bg-center "
      style={{ backgroundImage: `url(${silhouette})` }}
    >
      <div className=" flex justify-end max-md:justify-center max-sm:pt-0 max-md:pt-5 pt-20 ">
        <div className=" text-black bg-white rounded border  text-center ">
          <div className="  text-gray-500">
            <strong>LOGIN</strong>
          </div>
          <div className=" p-3 gap-1 text-left flex flex-col ">
            <label htmlFor="">Username</label>
            <input
              className=" py-1 bg-white rounded border border-blue-600"
              type="text"
              placeholder="Username/Email"
            />
            <label htmlFor="">Password</label>
            <input
              className="  py-1 bg-white rounded border border-blue-600"
              type="text"
              placeholder="EnterPassword"
            />
            <div className="flex gap-1">
              <input type="checkbox" />
              <small>Remember me</small>
            </div>
            <div className=" bg-blue-900  text-white text-center text-sm ">
              <button className=" py-1">
                <strong>LOGIN</strong>
              </button>
            </div>
            <div class="flex items-center">
              <div class="flex-grow border-t border-gray-400"></div>
              <div class="mx-4 text-gray-600">or</div>
              <div class="flex-grow border-t border-gray-400"></div>
            </div>
          </div>
          <div className=" flex justify-evenly">
            <div className=" rounded border border-blue-500 bg-white  p-2">
              <FcGoogle className=" text-3xl" />
            </div>
            <div className=" rounded border border-blue-500 bg-black p-2">
              <AiOutlineApple className=" text-3xl text-white" />
            </div>
            <div className=" rounded border border-blue-500 bg-white  p-2">
              <img src={microsoft} alt="" className=" w-7" />
            </div>
          </div>
          <div className=" flex flex-col text-left gap-1 p-1 text-xs">
            <small className=" text-blue-800">
              <u>Forgot Password ?</u>
            </small>
            <small>
              By Logging in, you agree to MyClassboard's{" "}
              <u className=" text-blue-800">Conditions of Use</u> and <br />
              <u className=" text-blue-800">Privacy Policy.</u>
            </small>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
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

export default LoginForm;
