
import { useTheme, Box, useMediaQuery } from "@mui/material";
import { tokens } from "../theme";
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("xl"));
  const isScreenLg = useMediaQuery(theme.breakpoints.down("lg"));

  let barChartWidth = "1000px";
  let barChartHeight = "500px";

  if (isScreenLg) {
    barChartWidth = "600px";
    barChartHeight = "300px";
  } else if (isScreenSmall) {
    barChartWidth = "700px";
    barChartHeight = "400px";
  }
  

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy the previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', "July", "August", "November"],
      datasets: [
        {
          label: 'How many Cars sold ech Month',
          data: [20, 28, 11, 20, 31, 27, 5, 10, 15],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(54, 162, 236, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(54, 162, 236, 0.5)',
          ],
          borderWidth: 1,
        },
      ],
    };

    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: { scales: { y: { beginAtZero: true, }, }, },
    });

    // Cleanup: Destroy the chart when the component unmounts
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [colors]);

  return (
    <Box backgroundColor={colors.primary[400]} p={5}>
      <canvas 
        ref={chartRef}  
        width={barChartWidth} 
        height={barChartHeight}
      >
      </canvas>
    </Box>
  );
};

export default BarChart;
