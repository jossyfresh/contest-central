"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props{
    label:string,
    handleChange:(text:string) => void,
}

export default function BasicSelect({label,handleChange}:Props) {

    const [value, setvalue] = React.useState('');

    const handlechange = (event: SelectChangeEvent) => {
        handleChange(event.target.value as string);
    };

  return (
    <Box sx={{ 
        minWidth: 150,
        bgcolor:"white",
     }}>
      <FormControl fullWidth size ="small">
      <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
        <Select
         sx={{
          bgcolor: "white",
         
        }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange = {handlechange}
        >
          <MenuItem  sx={{
            bgcolor: "white",
            '&:hover': {
              bgcolor: "#D1D5DB", 
            },
          }}value={"10"}>Ten</MenuItem>
          <MenuItem  sx={{
            bgcolor: "white",
            '&:hover': {
              bgcolor: "#D1D5DB", 
            },
          }}value={"20"}>Twenty</MenuItem>
          <MenuItem  sx={{
            bgcolor: "white",
            '&:hover': {
              bgcolor: "#D1D5DB", 
            },
          }}value={"30"}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}