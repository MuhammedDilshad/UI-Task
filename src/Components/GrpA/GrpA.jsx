import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

function GrpA() {
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
    <div className="w-auto">
      <div className="">
        <PieChart width={320} height={400}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#FF0000"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}

export default GrpA;
