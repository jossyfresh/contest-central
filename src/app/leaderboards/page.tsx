"use client"
import BasicSelect from "@/components/FIlter/Filter";
import ChipsArray from "@/components/FIlter/FilterList";
import EnhancedTable from "@/components/Tables/LeaderBoardTable";
import { Box } from "@mui/material";
import React, { useState } from "react";


function Leaderboard() {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleSelectChange = (value: string) => {
    if (!selectedValues.some((item) => item === value)) {
      setSelectedValues((prevValues) => [
        ...prevValues,value 
      ]);
    }
    console.log(selectedValues);
  };

  const handleDelete = (value: string) => {
    setSelectedValues((prevValues) =>
      prevValues.filter((item) => item !== value)
    );
  };


  return(
    <Box
    
    >
    <Box
    sx={{
      width :0.7,
      display:"flex",
      justifyContent:"space-between"
    }}>
      <BasicSelect
        label="Country"
        handleChange={handleSelectChange}
      />
      <BasicSelect
        label="Gen"
        handleChange={handleSelectChange}
      />
      <BasicSelect
        label="University"
        handleChange={handleSelectChange}
      />
      <BasicSelect
        label="Group"
        handleChange={handleSelectChange}
      />
  </Box>
  <ChipsArray Chipdata={selectedValues} handeDelete={handleDelete}/>
  <EnhancedTable/>
    </Box>
  )
}

export default Leaderboard;
