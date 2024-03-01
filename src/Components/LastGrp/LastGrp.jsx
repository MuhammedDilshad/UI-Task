import React from "react";
import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

function LastGrp() {
  const data = [
    { name: "Grade A", users: 200 },
    { name: "Grade B", users: 150 },
    { name: "Grade C", users: 100 },
    { name: "Grade D", users: 50 },
    { name: "Grade E", users: 150 },
    { name: "Grade F", users: 100 },
    { name: "Grade G", users: 50 },
    { name: "Grade H", users: 150 },
    { name: "Grade I", users: 100 },
    { name: "Grade J", users: 50 },
    { name: "Grade K", users: 150 },
    { name: "Grade L", users: 100 },
  ];

  return (
    <div className=" w-auto max-sm:p-0 p-12">
      <div className="">
        <BarChart
          className="BarCharts"
          width={300}
          height={300}
          data={data}
          margin={{ top: 5, bottom: 5 }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            className=" pl-10  pr-10"
            padding={{ left: 5, right: 5 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#800000" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
}

export default LastGrp;
