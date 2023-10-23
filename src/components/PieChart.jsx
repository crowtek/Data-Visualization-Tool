import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const PieChart = ({ progress = 0.75, size = 100 }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const angle = progress * 360;

        // Define the data for the pie chart
        const data = {
        datasets: [
            {
                data: [angle, 360 - angle] ,
                backgroundColor: [colors.blueAccent[600], colors.primary[100]],
                borderColor: colors.primary[400]
            },
        ],
        };

        const pieChart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {
                layout: {
                    padding: 2,
                },
                plugins: {
                    tooltip:{
                        backgroundColor: "white"
                    }
                }
            },
        });

        return () => {
            pieChart.destroy();
        };
    }, [colors,progress]);

    return (
        <div >
            <canvas ref={chartRef} width={size} height={size}/>
        </div>
    );
};

export default PieChart;
