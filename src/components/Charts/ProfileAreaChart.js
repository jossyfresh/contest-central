import PropTypes from "prop-types";
import { useState, useEffect } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";

// third-party
import ReactApexChart from "react-apexcharts";
import { Box } from "@mui/material";

// chart options
const areaChartOptions = {
  chart: {
    height: 50,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  grid: {
    strokeDashArray: 0,
  },
};

// ==============================|| INCOME AREA CHART ||============================== //

const ProfileAreaChart = ({ slot }) => {
  const theme = useTheme();

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState(areaChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [theme.palette.primary.main, theme.palette.primary[700]],
      xaxis: {
        categories:
          slot === "month"
            ? [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ]
            : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        labels: {
          style: {
            colors: [
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
            ],
          },
        },
        axisBorder: {
          show: true,
          color: line,
        },
        tickAmount: slot === "month" ? 11 : 7,
      },
      yaxis: {
        labels: {
          style: {
            colors: [secondary],
          },
        },
      },
      grid: {
        borderColor: line,
      },
      tooltip: {
        theme: "light",
      },
    }));
  }, [primary, secondary, line, theme, slot]);

  const [series, setSeries] = useState([
    {
      name: "Page Views",
      data: [100, 134, 180, 180, 186, 178, 115, 48, 100, 136],
    },
    //{
    //  name: "Sessions",
    //  data: [0, 43, 14, 56, 24, 105, 68],
    //},
  ]);

  useEffect(() => {
    setSeries([
      {
        name: "Page Views",
        data:
          slot === "month"
            ? [100, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35]
            : [100, 40, 28, 51, 42, 109, 100],
      },
      //{
      //  name: "Sessions",
      //  data:
      //    slot === "month"
      //      ? [110, 60, 150, 35, 60, 36, 26, 45, 65, 52, 53, 41]
      //      : [11, 32, 45, 32, 34, 52, 41],
      //},
    ]);
  }, [slot]);

  return (
    <Box
      sx={{
        background: "background",
        borderRadius: 2,
        padding: 1,
        border: 1,
        borderColor: "borderColor",
      }}
    >
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        //height={200}
      />
    </Box>
  );
};

export default ProfileAreaChart;
