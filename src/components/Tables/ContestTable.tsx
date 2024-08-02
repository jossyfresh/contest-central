import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Pagination,
} from "@mui/material";
import { ContestStatus } from "./ContestStatus";
import { Contest } from "@/types";
import DateView from "../DateView";

export const ContestTable = ({ contests }: { contests: Contest[] }) => {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Sample data
  //const contests = [
  //  {
  //    id: 1,
  //    contestName: "Contest 1",
  //    createdBy: "User 1",
  //    questions: 5,
  //    allowedHours: 2,
  //    totalParticipants: 50,
  //    attendanceRate: "80%",
  //    date: "2023-01-01",
  //    status: "Active",
  //  },
  //  {
  //    id: 2,
  //    contestName: "Contest 2",
  //    createdBy: "User 2",
  //    questions: 8,
  //    allowedHours: 3,
  //    totalParticipants: 60,
  //    attendanceRate: "75%",
  //    date: "2023-02-15",
  //    status: "Inactive",
  //  },
  //  {
  //    id: 3,
  //    contestName: "Contest 3",
  //    createdBy: "User 3",
  //    questions: 10,
  //    allowedHours: 4,
  //    totalParticipants: 45,
  //    attendanceRate: "90%",
  //    date: "2023-03-10",
  //    status: "Active",
  //  },
  //  // Add more sample contest entries as needed
  //  {
  //    id: 4,
  //    contestName: "Contest 4",
  //    createdBy: "User 4",
  //    questions: 6,
  //    allowedHours: 2,
  //    totalParticipants: 30,
  //    attendanceRate: "85%",
  //    date: "2023-04-05",
  //    status: "Active",
  //  },
  //  {
  //    id: 5,
  //    contestName: "Contest 5",
  //    createdBy: "User 5",
  //    questions: 12,
  //    allowedHours: 5,
  //    totalParticipants: 70,
  //    attendanceRate: "95%",
  //    date: "2023-05-20",
  //    status: "Inactive",
  //  },
  //  {
  //    id: 6,
  //    contestName: "Contest 6",
  //    createdBy: "User 6",
  //    questions: 7,
  //    allowedHours: 3,
  //    totalParticipants: 55,
  //    attendanceRate: "88%",
  //    date: "2023-06-15",
  //    status: "Active",
  //  },
  //  {
  //    id: 7,
  //    contestName: "Contest 7",
  //    createdBy: "User 7",
  //    questions: 9,
  //    allowedHours: 4,
  //    totalParticipants: 40,
  //    attendanceRate: "92%",
  //    date: "2023-07-01",
  //    status: "Inactive",
  //  },
  //  {
  //    id: 8,
  //    contestName: "Contest 8",
  //    createdBy: "User 8",
  //    questions: 11,
  //    allowedHours: 5,
  //    totalParticipants: 65,
  //    attendanceRate: "78%",
  //    date: "2023-08-10",
  //    status: "Active",
  //  },
  //  {
  //    id: 9,
  //    contestName: "Contest 9",
  //    createdBy: "User 9",
  //    questions: 8,
  //    allowedHours: 3,
  //    totalParticipants: 48,
  //    attendanceRate: "87%",
  //    date: "2023-09-05",
  //    status: "Active",
  //  },
  //  {
  //    id: 10,
  //    contestName: "Contest 10",
  //    createdBy: "User 10",
  //    questions: 10,
  //    allowedHours: 4,
  //    totalParticipants: 55,
  //    attendanceRate: "91%",
  //    date: "2023-10-20",
  //    status: "Inactive",
  //  },
  //];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  bgcolor: "#F9FAFB",
                  borderRadius: 1,
                }}
              >
                Contest Name
              </TableCell>
              <TableCell
                sx={{
                  bgcolor: "#F9FAFB",
                  borderRadius: 1,
                }}
              >
                Created By
              </TableCell>
              <TableCell
                sx={{
                  bgcolor: "#F9FAFB",
                  borderRadius: 1,
                }}
              >
                Questions
              </TableCell>
              <TableCell
                sx={{
                  bgcolor: "#F9FAFB",
                  borderRadius: 1,
                }}
              >
                Allowed Hours
              </TableCell>
              <TableCell
                sx={{
                  bgcolor: "#F9FAFB",
                  borderRadius: 1,
                }}
              >
                Total Participants
              </TableCell>
              <TableCell
                sx={{
                  bgcolor: "#F9FAFB",
                  borderRadius: 1,
                }}
              >
                Attendance Rate
              </TableCell>
              <TableCell
                sx={{
                  bgcolor: "#F9FAFB",
                  borderRadius: 1,
                }}
              >
                Date
              </TableCell>
              <TableCell
                sx={{
                  bgcolor: "#F9FAFB",
                  borderRadius: 1,
                }}
              >
                Status
              </TableCell>
              {/* Add more table headers as needed */}
            </TableRow>
          </TableHead>
          <TableBody>
            {contests
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((contest) => (
                <TableRow
                  onClick={() => router.push(`/contests/${contest.id}`)}
                  key={contest.id}
                >
                  <TableCell
                    sx={{
                      bgcolor: "white",
                    }}
                  >
                    {contest.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      bgcolor: "white",
                    }}
                  >
                    {contest.preparedBy}
                  </TableCell>
                  <TableCell
                    sx={{
                      bgcolor: "white",
                    }}
                  >
                    {"contest.questions"}
                  </TableCell>
                  <TableCell
                    sx={{
                      bgcolor: "white",
                    }}
                  >
                    {contest.durationSeconds}
                  </TableCell>
                  <TableCell
                    sx={{
                      bgcolor: "white",
                    }}
                  >
                    {contest.participantsNumber}
                  </TableCell>
                  <TableCell
                    sx={{
                      bgcolor: "white",
                    }}
                  >
                    {"contest.attendanceRate"}
                  </TableCell>
                  <TableCell
                    sx={{
                      bgcolor: "white",
                    }}
                  >
                    <DateView date={contest.createdAt} />
                  </TableCell>
                  <TableCell
                    sx={{
                      bgcolor: "white",
                    }}
                  >
                    <ContestStatus status={contest.status} />
                  </TableCell>
                  {/* Add more table cells as needed */}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={contests.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
