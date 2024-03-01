import React from "react";
import { FaFileLines } from "react-icons/fa6";
import { TableContent } from "../../assets/Helper.js";
import { useNavigate } from "react-router-dom";

function FrontOfficeTable() {
  const navigate = useNavigate();
  const datas = [
    "Enquiry Application",
    "Admission",
    "Source Wise",
    "Enquiries at a Glance",
  ];
  const hangleNavigate = () => {
    navigate("/login");
  };
  return (
    <div className=" bg-gray-200 text-black ">
      <div className="  flex max-sm:pl-2 max-sm:pt-2 pl-6 pt-5 max-sm:gap-3 gap-10">
        {datas.map((data, indux) => (
          <small
            className=" hover:bg-white hover:text-blue-800 cursor-pointer"
            id={indux}
          >
            {data}
          </small>
        ))}
      </div>
      <div className="bg-white rounded-md border max-sm:m-1   m-5">
        <div className=" flex justify-between  max-sm:p-1  p-4     text-gray-500">
          <div className="flex items-center gap-1 ">
            <div className=" bg-teal-500 max-sm:p-1 p-2">
              <FaFileLines />
            </div>
            <small>
              Note :- Enquiries counts based on Enquiry date in the selected
              month
            </small>
          </div>

          <div>
            <select
              className="rounded-lg w-40  max-sm:w-auto cursor-pointer border p-2 max-sm:p-1 border-gray-600 text-gray-500 bg-white"
              name=""
              id=""
            >
              <option value="">2023-2024</option>
              <option value="">2022-2023</option>
              <option value="">2021-2022</option>
              <option value="">2020-2021</option>
            </select>
          </div>
        </div>
        <div className="border border-gray-300 max-lg:p-0 p-4">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="  max-lg:px-1 max-lg:py-1 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase max-md:lowercase ">
                  Month
                </th>

                <th className="max-md:px-0 max-lg:px-1  px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase max-md:lowercase">
                  <span className="max-sm:block hidden transform rotate-90">
                    Open
                  </span>
                  <span className="max-sm:hidden">Open</span>
                </th>
                <th className="max-md:px-0 max-lg:px-1 max-lg:py-1 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase max-md:lowercase">
                  <span className=" max-sm:hidden">School Tour </span>
                  <span className="hidden max-sm:inline">
                    Scho-
                    <br />
                    ol Tour
                  </span>
                </th>
                <th className=" max-lg:px-1 max-lg:py-1 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase max-md:lowercase">
                  Need Time
                </th>
                <th className="max-md:px-0 max-lg:px-1 max-lg:py-1 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase max-md:lowercase">
                  <span className=" max-sm:hidden">Admission </span>
                  <span className="hidden max-sm:inline">
                    Admi-
                    <br />
                    ssion
                  </span>
                </th>
                <th className=" max-lg:px-1 max-lg:py-1 px-6 py-3 text-left text-xs font-medium  text-red-800 uppercase max-md:lowercase">
                  <span className=" max-sm:hidden">Total Enquiries</span>
                  <span className="hidden max-sm:inline">
                    Total Enqui-
                    <br />
                    ries
                  </span>
                </th>
                <th className="max-md:px-0 max-lg:px-1 max-lg:py-1 px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase max-md:lowercase">
                  <span className=" max-sm:hidden">
                    Applications in the Month
                  </span>
                  <span className="hidden max-sm:inline">
                    Applic-
                    <br />
                    ations in the Month
                  </span>
                </th>
                <th className=" max-lg:px-1 max-lg:py-1 px-6 py-3 text-left text-xs font-medium text-green-800 uppercase max-md:lowercase">
                  <span className=" max-sm:hidden">
                    Admissions in the Month
                  </span>
                  <span className=" hidden max-sm:inline">
                    Admis-
                    <br />
                    sions in the Month
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-center">
              {TableContent.map((item, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="max-md:text-xs max-md:px-0 max-md:py-1 px-6 py-4 ">
                    <span className=" max-md:hidden">{item.month}</span>
                    <span className=" hidden  max-md:inline max-sm:lowercase ">
                      {item.month.split("-")[0]}
                    </span>
                    <br className="hidden max-md:inline" />
                    <span className="hidden max-md:inline">
                      {item.month.split("-")[1]}
                    </span>
                  </td>
                  <td className="max-md:text-xs max-md:px-0 max-md:py-1 px-6 py-4 ">
                    {item.open}
                  </td>
                  <td className="max-md:text-xs max-md:px-0 max-md:py-1 px-6 py-4 ">
                    {item.schooltour}
                  </td>
                  <td className="max-md:text-xs max-md:px-1 max-md:py-1 px-6 py-4 ">
                    {item.needtime}
                  </td>
                  <td className="max-md:text-xs max-md:px-0 max-md:py-1 px-6 py-4 ">
                    {item.admission}
                  </td>
                  <td className="max-md:text-xs max-md:px-1 max-md:py-1 px-6 py-4 ">
                    {item.totalenquiries}
                  </td>
                  <td className="max-md:text-xs max-md:px-0 max-md:py-1 px-6 py-4 ">
                    {item.applicationInTheMonth}
                  </td>
                  <td className="max-md:text-xs max-md:px-1 max-md:py-1 px-6 py-4 ">
                    {item.admissionsInTheMonth}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

export default FrontOfficeTable;
