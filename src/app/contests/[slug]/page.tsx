"use client";
import ConversionPie from "@/components/Charts/ConversionPie";
import BasicSelect from "@/components/FIlter/Filter";
import ChipsArray from "@/components/FIlter/FilterList";
import CustomizedTables from "@/components/Tables/ContestDetail";
import BarCharts from "@/components/Tables/ContestDetailBarChart";
import EnhancedTable from "@/components/Tables/LeaderBoardTable";
import { Box } from "@mui/material";
import React, { useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleSelectChange = (value: string) => {
    if (!selectedValues.some((item) => item === value)) {
      setSelectedValues((prevValues) => [...prevValues, value]);
    }
    console.log(selectedValues);
  };
  const handleDelete = (value: string) => {
    setSelectedValues((prevValues) =>
      prevValues.filter((item) => item !== value)
    );
  };
  return (
    <Box>
      <Box
        sx={{
          width: 0.7,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <BasicSelect label="Country" handleChange={handleSelectChange} />
        <BasicSelect label="Gen" handleChange={handleSelectChange} />
        <BasicSelect label="University" handleChange={handleSelectChange} />
        <BasicSelect label="Group" handleChange={handleSelectChange} />
      </Box>
      <ChipsArray Chipdata={selectedValues} handeDelete={handleDelete} />
      <Box
        sx={{
          display: "flex",
          gap: 5,
        }}
      >
        <CustomizedTables id={params.slug} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <BarCharts />
          <ConversionPie />
        </Box>
      </Box>
    </Box>
  );
}
