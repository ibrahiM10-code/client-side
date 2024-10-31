import React, {useState, useEffect} from "react";
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset } from '../dataset/weather';
import { expensesData } from "../dataset/expenses";
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { colors } from "@mui/material";

const chartSetting = {
    yAxis: [
      {
        label: 'totals',
      },
    ],
    series: [{ dataKey: 'totalSpent', label: 'Spent', color: '#003366' }],
    height: 600,
    width:900,
    sx: {
      [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
        transform: 'translateX(-10px)',
      },
    },
  };

export default function HorizontalBars() {
  return (
    <BarChart
    dataset={expensesData}
    xAxis={[
      { scaleType: 'band', dataKey: 'category' },
    ]}
    {...chartSetting}
  />
  );
}