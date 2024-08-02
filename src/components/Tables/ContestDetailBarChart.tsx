"use client";
import { Box, Typography } from "@mui/material";
import "../../app/globals.css";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const data = [
  {
    name: "1",
    uv: 80,
  },
  {
    name: "2",
    uv: 100,
  },
  {
    name: "3",
    uv: 50,
  },
  {
    name: "4",
    uv: 40,
  },
  {
    name: "5",
    uv: 80,
  },
  {
    name: "6",
    uv: 40,
  },
];

const maxDataValue = Math.max(...data.map((entry) => Math.max(entry.uv)));
const yAxisRange = [0, Math.ceil(maxDataValue / 20) * 20];

const gradientColor = (
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="45%" stopColor="#264ECA" stopOpacity={1} />
      <stop offset="95%" stopColor="#ffffff" stopOpacity={0.8} />
    </linearGradient>
  </defs>
);

export default function BarCharts() {
  return (
    <Box
      sx={{
        mt: 3,
      }}
    >
      <Typography
        sx={{
          px: 1,
          py: 1,
        }}
      >
        Problem Status
      </Typography>
      <BarChart className="barchart" width={250} height={250} data={data}>
        {gradientColor}
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          interval={0} // Display all ticks
        />
        <YAxis domain={yAxisRange} tickLine={false} axisLine={false} />
        <CartesianGrid horizontal={false} vertical={false} />
        <Bar
          className="bars"
          dataKey="uv"
          fill="url(#colorUv)"
          radius={[8, 8, 8, 8]}
          barSize={15}
        />
      </BarChart>
    </Box>
  );
}
