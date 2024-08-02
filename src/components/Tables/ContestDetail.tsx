"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetContestByIdQuery } from "@/store/services/contestApi";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: " #E5E7EB",
    color: "black",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "white",
}));

interface Props {
  id: string;
}

export default function CustomizedTables({ id }: Props) {
  console.log(id);
  const { data, isLoading, error } = useGetContestByIdQuery(`${id}`);
  console.log(data);

  return (
    <TableContainer
      sx={{
        mt: 5,
        width: "75%",
      }}
      component={Paper}
    >
      <Table sx={{}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell size="small" sx={{}}>
              Student Name
            </StyledTableCell>
            <StyledTableCell sx={{}} align="right">
              CodeForce Handle
            </StyledTableCell>
            <StyledTableCell sx={{}} align="right">
              Total Submission
            </StyledTableCell>
            <StyledTableCell sx={{}} align="right">
              Wrong Submission
            </StyledTableCell>
            <StyledTableCell sx={{}} align="right">
              Problem Solved
            </StyledTableCell>
            <StyledTableCell sx={{}} align="right">
              Conversion Rate
            </StyledTableCell>
            <StyledTableCell sx={{}} align="right">
              Rank
            </StyledTableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}
