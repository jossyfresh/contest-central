"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField"; // Import TextField
import { Button } from "@mui/material";
import { useState } from "react";
import SingleQuestionAdd from "@/components/Contest/SingleQuestionAdd";

interface ChipData {
  key: number;
  label: string;
}

const NewContest = () => {
  const [selectedCountry, setSelectedCountry] = React.useState<string>("");
  const [selectedUniversity, setSelectedUniversity] =
    React.useState<string>("");
  const [selectedGroup, setSelectedGroup] = React.useState<string>("");

  const [countryChips, setCountryChips] = React.useState<readonly ChipData[]>(
    []
  );
  const [universityChips, setUniversityChips] = React.useState<
    readonly ChipData[]
  >([]);
  const [groupChips, setGroupChips] = React.useState<readonly ChipData[]>([]);

  const [contestName, setContestName] = useState("");
  const [contestUrl, setContestUrl] = useState("");

  const [problemName, setProblemName] = useState("");
  const [problemUrl, setProblemUrl] = useState("");
  const [problemIndex, setProblemIndex] = useState("");
  const [problems, setProblems] = useState<any>([]);

  const [countries, setCountries] = useState<string[]>([]);
  const [universities, setUniversities] = useState<string[]>([]);
  const [groups, setGroups] = useState<string[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://a2sv-contest-central-api.onrender.com/api/Group/GetAllGroups`
        );

        if (response.ok) {
          const result = await response.json();
          console.log("result", result);
          let foundCountries: string[] = [];
          let foundUniversites: string[] = [];
          let foundGroups: string[] = [];
          for (let i = 0; i < result.length; i++) {
            foundGroups.push(result[i].name);
            if (
              result[i].location.country !== null &&
              !foundCountries.includes(result[i].location.country)
            ) {
              foundCountries.push(result[i].location.country);
            }
            if (
              result[i].location.location !== null &&
              !foundUniversites.includes(result[i].location.location)
            ) {
              foundUniversites.push(result[i].location.location);
            }
            setCountries((state) => [...foundCountries]);
            setUniversities((state) => [...foundUniversites]);
            setGroups((state) => [...foundGroups]);
          }
        } else {
          // Handle error if needed
          console.error("Failed to fetch countries");
        }
      } catch (error) {
        // Handle error if needed
        console.error("Error fetching contuntries", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (field: string) => (event: SelectChangeEvent) => {
    const newValue = event.target.value as string;

    switch (field) {
      case "Country":
        if (!countryChips.find((data) => data.label === newValue)) {
          setCountryChips((prevChips) => [
            ...prevChips,
            { key: countryChips.length, label: newValue },
          ]);
          setSelectedCountry("");
        }
        break;
      case "University":
        if (!universityChips.find((data) => data.label === newValue)) {
          setUniversityChips((prevChips) => [
            ...prevChips,
            { key: universityChips.length, label: newValue },
          ]);
          setSelectedUniversity("");
        }
        break;
      case "Group":
        if (!groupChips.find((data) => data.label === newValue)) {
          setGroupChips((prevChips) => [
            ...prevChips,
            { key: groupChips.length, label: newValue },
          ]);
          setSelectedGroup("");
        }
        break;
      default:
        break;
    }
  };

  // Delete Filter
  const handleDelete = (field: string, chipToDelete: ChipData) => () => {
    switch (field) {
      case "Country":
        setCountryChips((chips) =>
          chips.filter((chip) => chip.key !== chipToDelete.key)
        );
        break;
      case "University":
        setUniversityChips((chips) =>
          chips.filter((chip) => chip.key !== chipToDelete.key)
        );
        break;
      case "Group":
        setGroupChips((chips) =>
          chips.filter((chip) => chip.key !== chipToDelete.key)
        );
        break;
      default:
        break;
    }
  };

  const handleAddProblem = () => {
    if (!problemName.trim() && !problemUrl.trim() && !problemIndex.trim()) {
      alert("Please fill all fields");
      return;
    }

    const newProblem = {
      index: problemIndex,
      name: problemName,
      url: problemUrl,
    };

    setProblemName("");
    setProblemUrl("");
    setProblemIndex("");

    setProblems([...problems, newProblem]);
  };

  const handleDeleteProblem = (id: string) => {
    setProblems(problems.filter((problem: any) => problem.index !== id));
  };

  const handleSubmit = () => {
    if (!problems.length) {
      alert("Please add at least one problem");
      return;
    }

    const newContest = {
      countries: countryChips.map((chip) => chip.label),
      universities: universityChips.map((chip) => chip.label),
      groups: groupChips.map((chip) => chip.label),
      questions: problems,
      contestName,
      contestUrl,
    };

    const submitData = async () => {
      console.log("submitting");
      try {
        const response = await fetch(
          `https://a2sv-contest-central-api.onrender.com/api/Contests/CreateContest`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newContest),
          }
        );

        if (response.ok) {
          const result = await response.json();
          console.log("created contest successfully", result);
        }
      } catch (error) {
        console.error("Error creating contest", error);
      }
    };
    submitData();
  };

  return (
    <Box
      sx={{
        px: "100px",
        py: "50px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box sx={{ fontSize: 17, fontWeight: 500, marginBottom: 2 }}>
        Contest and Contest URL
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Box sx={{ flexBasis: "49%" }}>
          <Box sx={{ fontSize: "14px", color: "textSecondary", mb: 1 }}>
            Country
          </Box>
          <Select
            labelId="country-select-label"
            id="country-select"
            value={selectedCountry}
            fullWidth
            size="small"
            onChange={handleChange("Country")}
          >
            {countries.map((country, index) => (
              <MenuItem key={index} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
          <Box display="flex" justifyContent="center" flexWrap="wrap">
            {countryChips.map((data) => (
              <Chip
                key={data.key}
                label={data.label}
                onDelete={handleDelete("Country", data)}
                sx={{ margin: 0.5 }}
              />
            ))}
          </Box>
        </Box>

        <Box sx={{ flexBasis: "49%" }}>
          <Box sx={{ fontSize: "14px", color: "textSecondary", mb: 1 }}>
            University
          </Box>
          <Select
            labelId="university-select-label"
            id="university-select"
            value={selectedUniversity}
            onChange={handleChange("University")}
            size="small"
            fullWidth
          >
            {universities.map((university, index) => (
              <MenuItem key={index} value={university}>
                {university}
              </MenuItem>
            ))}
          </Select>
          <Box display="flex" justifyContent="center" flexWrap="wrap">
            {universityChips.map((data) => (
              <Chip
                key={data.key}
                label={data.label}
                onDelete={handleDelete("University", data)}
                sx={{ margin: 0.5 }}
              />
            ))}
          </Box>
        </Box>
        <Box sx={{ flexBasis: "49%" }}>
          <Box sx={{ fontSize: "14px", color: "textSecondary", mb: 1 }}>
            Group
          </Box>
          <Select
            labelId="group-select-label"
            id="group-select"
            value={selectedGroup}
            size="small"
            fullWidth
            onChange={handleChange("Group")}
          >
            {groups.map((group, index) => (
              <MenuItem key={index} value={group}>
                {group}
              </MenuItem>
            ))}
          </Select>
          <Box display="flex" justifyContent="center" flexWrap="wrap">
            {groupChips.map((data) => (
              <Chip
                key={data.key}
                label={data.label}
                onDelete={handleDelete("Group", data)}
                sx={{ margin: 0.5 }}
              />
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: 4,
            flexBasis: "100%",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box sx={{ flexBasis: "49%" }}>
            <Box display="flex" flexDirection="column">
              <Box sx={{ fontSize: "14px", color: "textSecondary", mb: 1 }}>
                Contest name
              </Box>
              <TextField
                variant="outlined"
                size="small"
                onChange={(e) => setContestName(e.target.value)}
              />
            </Box>
          </Box>

          <Box sx={{ flexBasis: "49%" }}>
            <Box display="flex" flexDirection="column">
              <Box sx={{ fontSize: "14px", color: "textSecondary", mb: 1 }}>
                Contest URL
              </Box>
              <TextField
                variant="outlined"
                size="small"
                onChange={(e) => setContestUrl(e.target.value)}
              />
            </Box>
          </Box>
        </Box>

        <Box sx={{ flexBasis: "100%", marginTop: 4 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                fontSize: 17,
                fontWeight: 500,
                marginBottom: 2,
              }}
            >
              Problems
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                alignItems: "flex-end",
                gap: 2,
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Box display="flex" flexDirection="column">
                  <Box sx={{ fontSize: "14px", color: "textSecondary", mb: 1 }}>
                    Problem name
                  </Box>
                  <TextField
                    variant="outlined"
                    value={problemName}
                    onChange={(e) => setProblemName(e.target.value)}
                    size="small"
                  />
                </Box>
              </Box>

              <Box sx={{ flex: 1 }}>
                <Box display="flex" flexDirection="column">
                  <Box sx={{ fontSize: "14px", color: "textSecondary", mb: 1 }}>
                    Problem Url
                  </Box>
                  <TextField
                    variant="outlined"
                    value={problemUrl}
                    onChange={(e) => setProblemUrl(e.target.value)}
                    size="small"
                  />
                </Box>
              </Box>
              <Box flexBasis="10%">
                <Box display="flex" flexDirection="column">
                  <Box sx={{ fontSize: "14px", color: "textSecondary", mb: 1 }}>
                    Index
                  </Box>
                  <TextField
                    variant="outlined"
                    value={problemIndex}
                    onChange={(e) =>
                      setProblemIndex(e.target.value.toUpperCase())
                    }
                    size="small"
                  />
                </Box>
              </Box>
              <Button
                onClick={handleAddProblem}
                variant="contained"
                sx={{
                  height: "fit-content",
                  py: 1,
                  textTransform: "capitalize",
                }}
              >
                Add Problem
              </Button>
            </Box>

            <Box marginTop={4}>
              <Box
                sx={{
                  backgroundColor: "backgroundLight",
                  color: "textSecondary",
                  fontWeight: "500",
                  fontSize: "14px",
                  textTransform: "uppercase",
                  width: "100%",
                  px: 2,
                  py: 2,
                  borderRadius: "5px 5px 0px 0px",
                  border: 1,
                  borderColor: "borderColor",
                }}
              >
                Problems
              </Box>
              {problems
                .sort(
                  (
                    a: { index: string; name: string; url: string },
                    b: { index: string; name: string; url: string }
                  ) => a.index.localeCompare(b.index)
                )
                .map(
                  (
                    problem: {
                      name: string;
                      index: string;
                      url: string;
                    },
                    index: React.Key | null | undefined
                  ) => (
                    <SingleQuestionAdd
                      key={index}
                      name={problem.name}
                      index={problem.index}
                      url={problem.url}
                      handleDeleteProblem={handleDeleteProblem}
                    />
                  )
                )}
            </Box>
            <Button
              variant="contained"
              sx={{
                marginTop: 2,
                width: "fit-content",
                alignSelf: "center",
                textTransform: "capitalize",
              }}
              onClick={handleSubmit}
            >
              Finish
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewContest;
