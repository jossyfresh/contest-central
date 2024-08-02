import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { UserProfile } from "@/types";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function UserTable({ users }: { users: UserProfile[] }) {
  return (
    <TableContainer
      sx={{
        borderRadius: 2,
      }}
      component={Paper}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                bgcolor: "#F9FAFB",
              }}
            >
              Name
            </TableCell>
            <TableCell
              sx={{
                bgcolor: "#F9FAFB",
              }}
              align="left"
            >
              Email
            </TableCell>
            <TableCell
              sx={{
                bgcolor: "#F9FAFB",
              }}
              align="left"
            >
              Role
            </TableCell>
            <TableCell
              sx={{
                bgcolor: "#F9FAFB",
              }}
              align="left"
            >
              Email Verification
            </TableCell>
            <TableCell
              sx={{
                bgcolor: "#F9FAFB",
              }}
              align="left"
            >
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((d: any) => (
            <TableRow
              key={d.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{
                  bgcolor: "white",
                }}
                component="th"
                scope="row"
              >
                {d.firstName + " " + d.lastName}
              </TableCell>
              <TableCell
                sx={{
                  bgcolor: "white",
                }}
                align="left"
              >
                {d.email}
              </TableCell>
              <TableCell
                sx={{
                  bgcolor: "white",
                }}
                align="left"
              >
                {d.userType.name}
              </TableCell>
              <TableCell
                sx={{
                  bgcolor: "white",
                }}
                align="left"
              >
                {d.email}
              </TableCell>
              <TableCell
                sx={{
                  bgcolor: "white",
                }}
                align="left"
              >
                <MoreVertIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
