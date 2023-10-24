import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

import { useTheme } from "@mui/material";
import { tokens } from "../theme";
// 1. Daten Set Neben einander setzten 
// 2. Title Anpassen
// 3. icon hinzufügen

const PieChart = ({ progress = 0.75, size = 50 }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const angle = progress * 360;

        // Data aus parametern übernehmen ( 3 variablen )
        const data = {
            labels: [
                'Red',
                'Blue',
                'Yellow'
            ],
            datasets: [
                {
                    data: [angle, 360 - angle, 100] ,
                    backgroundColor: [colors.blueAccent[600], colors.primary[100],colors.primary[300]],
                    borderColor: colors.primary[400]
                },
            ],
        };

        const pieChart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            
            options: {
                cutoutPercentage: 70, // Adjust the cutout percentage as neede
                layout: {
                    padding: 2,
                },
                plugins: {
                    legend: {
                        position: "left", // Disable the default legend
                        align: "left",
                    },
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
        <div style={{width:"200px",height:"200px", display:"flex", position:"re"}} >
            <canvas ref={chartRef} width={50} height={50}/>
        </div>
    );
};

export default PieChart;
