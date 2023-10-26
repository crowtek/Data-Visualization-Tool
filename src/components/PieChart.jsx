import React, { useEffect, useRef, useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const PieChartComponent = ({ labels, chartValues,animationTime }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    let label_1;
    let label_2;
    let label_3;
    if (labels) {
        label_1 = labels.first;
        label_2 = labels.second;
        label_3 = labels.third;
    }
    let chartValues_1;
    let chartValues_2;
    let chartValues_3;
    if (chartValues) {
        chartValues_1 = chartValues.first;
        chartValues_2 = chartValues.second;
        chartValues_3 = chartValues.third;
    }

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Trigger the animation after a delay (e.g., 500ms)
        setTimeout(() => {
            setAnimate(true);
        }, animationTime ? animationTime : 500);
    }, []);

    return (
        <div className={`pie-chart-container ${animate ? 'pie-chart-fade-in' : ''}`}>
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, color: colors.blueAccent[400], value: chartValues_1, label: label_1 },
                            { id: 1, color: colors.greenAccent[500], value: chartValues_2, label: label_2 },
                            { id: 2, color: colors.redAccent[400], value: chartValues_3, label: label_3 },
                        ],
                        innerRadius: 30,
                        outerRadius: 65,
                        paddingAngle: 5,
                        cornerRadius: 5,
                        startAngle: -90,
                        endAngle: 220,
                        cx: 100,
                        cy: 80,
                    },
                ]}
                width={400}
                height={160}
            />
        </div>
    );
};

export default PieChartComponent;
