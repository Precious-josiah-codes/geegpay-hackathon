"use client";

import { useState } from "react";
import {
  Bar,
  BarChart,
  Label,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

const BarCharts = () => {
  return (
    <ResponsiveContainer className="w-full" height="80%">
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Label value="any" />
        <Tooltip content={CustomTooltip} />
        <Bar
          dataKey="total"
          fill="rgba(52, 202, 165, 0.10)"
          radius={[50, 50, 0, 0]}
          activeBar={<Rectangle fill="#34CAA5" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

function CustomTooltip({ payload, label, active }) {
  console.log(payload);
  if (active) {
    return (
      <div className="relative w-20 h-10 bg-black rounded-lg text-sm inline-flex sm:flex-row flex-col sm:items-center justify-center p-2 sm:p-0">
        <div className="text-white">${payload[0].payload.total}.00</div>
        <div className="text-white sm:hidden flex text-xs">{label}</div>
      </div>
    );
  }

  return null;
}
export default BarCharts;
