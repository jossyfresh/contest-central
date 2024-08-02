import { Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { NewContestStatus } from "./NewContestStatus";
import DeleteIcon from "@mui/icons-material/Delete";

interface SingleQuestionAddProps {
  index: string;
  name: string;
  url: string;
  handleDeleteProblem: (id: string) => void;
}

const SingleQuestionAdd = ({
  index,
  name,
  url,
  handleDeleteProblem,
}: SingleQuestionAddProps) => {
  const [isDuplicated, setIsDuplicated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://a2sv-contest-central-api.onrender.com/api/Question/CheckDuplicate?questionUrl=${url}`
        );

        if (response.ok) {
          const result = await response.json();
          setIsDuplicated(result.isDuplicated);
        } else {
          // Handle error if needed
          console.error("Failed to fetch duplicate status");
        }
      } catch (error) {
        // Handle error if needed
        console.error("Error fetching duplicate status", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return (
    <Box
      key={index}
      sx={{
        backgroundColor: "backgroundLight",
        color: "textSecondary",
        fontSize: "14px",
        width: "100%",
        px: 2,
        py: 1,
        border: 1,
        borderColor: "borderColor",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          color: "textSecondary",
          fontSize: "14px",
          fontWeight: "500",
        }}
      >
        {index.toUpperCase() + ". " + name}
      </Box>
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        {!isLoading && <NewContestStatus status={isDuplicated} />}
        <Button onClick={() => handleDeleteProblem(index)}>
          <DeleteIcon sx={{ color: "textSecondary" }} />
        </Button>
      </Box>
    </Box>
  );
};

export default SingleQuestionAdd;
