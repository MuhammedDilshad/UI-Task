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

const Grp = () => {
  const data = [
    { name: "Facebook", users: 200 },
    { name: "Instagram", users: 150 },
    { name: "Twiter", users: 100 },
    { name: "Telegram", users: 50 },
    { name: "Instagrami", users: 150 },
    { name: "Twiteri", users: 100 },
    { name: "Telegrami", users: 50 },
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
          <Bar dataKey="users" fill="#FFA500" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default Grp;
