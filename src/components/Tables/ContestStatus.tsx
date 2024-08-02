import React from "react";
import { Box } from "@mui/material";
import { TbCircleDotted } from "react-icons/tb";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
export function ContestStatus({ status }: { status: string }) {
  status = status.toLowerCase();
  return (
    <Box
      sx={{
        textTransform: "capitalize",
        display: "flex",
        alignItems: "center",
        gap: 1,
        fontSize: "18px",
      }}
    >
      {status == "upcoming" ? (
        <>
          <ScheduleOutlinedIcon sx={{ color: "#FA4A49" }} />
          <Box fontSize={"14px"}>{status}</Box>
        </>
      ) : (
        <>
          <CheckCircleOutlineOutlinedIcon sx={{ color: "#1FCD64" }} />
          <Box fontSize={"14px"}>{status}</Box>
        </>
      )}
    </Box>
  );
}
