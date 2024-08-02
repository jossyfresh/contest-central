import { Box } from "@mui/material";
import React from "react";

const DateView = ({ date }: { date: string }) => {
  const dateObject = new Date(date);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    //hour: "numeric",
    //minute: "numeric",
    //second: "numeric",
    //timeZoneName: "short",
  };

  const formattedDate = new Intl.DateTimeFormat("en-US").format(dateObject);

  return <Box>{formattedDate}</Box>;
};

export default DateView;
