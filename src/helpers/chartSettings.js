import { axisClasses } from "@mui/x-charts/ChartsAxis";

export const chartSetting = {
  yAxis: [
    {
      label: "totals",
    },
  ],
  series: [{ dataKey: "totalSpent", label: "Spent", color: "#003366" }],
  height: 600,
  width: 1000,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: "translateX(-10px)",
    },
  },
};
