import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface Data {
  name: string;
  attendance: string;
  avgConversionRate: number;
  avgTimeSpent: number;
  overallScore: number;
}

// Assuming the createData and rows are defined as in the previous examples
function createData(
  name: string,
  attendance: string,
  avgConversionRate: number,
  avgTimeSpent: number,
  overallScore: number
): Data {
  return {
    name,
    attendance,
    avgConversionRate,
    avgTimeSpent,
    overallScore,
  };
}

const rows = [
  createData("John Doe", "Present", 0.75, 45, 85),
  createData("Jane Smith", "Absent", 0.62, 55, 78),
  createData("Bob Johnson", "Present", 0.8, 40, 90),
  createData("Natanim Mekonen", "Present", 0.8, 40, 90),
  createData("Kemal Siraj", "Present", 0.8, 40, 90),
  createData("Joseph Tamrat", "Present", 0.8, 40, 90),
  createData("Abel Mekonen", "Present", 0.8, 40, 90),
  createData("Maty Selamu", "Present", 0.8, 40, 90),
  createData("Bob Johnson", "Present", 0.8, 40, 90),
  createData("Bob Johnson", "Present", 0.8, 40, 90),
  // Add more rows as needed
];
const SimpleTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Attendance</TableCell>
            <TableCell>Avg. Conversion Rate</TableCell>
            <TableCell>Avg. Time Spent</TableCell>
            <TableCell>Overall Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.attendance}</TableCell>
              <TableCell>{row.avgConversionRate}</TableCell>
              <TableCell>{row.avgTimeSpent}</TableCell>
              <TableCell>{row.overallScore}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
