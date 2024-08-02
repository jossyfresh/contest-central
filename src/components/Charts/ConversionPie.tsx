import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { Box, Typography } from "@mui/material";

const data = [
  { value: 80, label: "Solved" },
  { value: 20, label: "Unsolved" },
];

const size = {
  width: 285,
  height: 150,
};

export default function ConversionPie() {
  return (
    <Box>
      <Typography
        sx={{
          padding: 1,
        }}
      >
        Avg conversion rate
      </Typography>
      <PieChart
        colors={["#264ECA", "#A3B3E5"]}
        series={[
          {
            arcLabel: (item) => `${item.value}%`,
            arcLabelMinAngle: 80,
            data,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "white",
            fontWeight: "bold",
          },
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
          alignItems: "center",
          textAlign: "center",
          justifyItems: "center",
          py: 1,
        }}
        {...size}
      />
    </Box>
  );
}
