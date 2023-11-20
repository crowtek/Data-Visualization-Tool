import React, { useEffect, useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const PieChartComponent = ({ labels, chartValues,animationTime,isScreenSmall }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
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
                            { id: 0, color: colors.blueAccent[400], value: chartValues.first || "", label: labels.first || ""},
                            { id: 1, color: colors.greenAccent[500], value: chartValues.second || "", label: labels.second || "" },
                            { id: 2, color: colors.redAccent[400], value: chartValues.third || "", label: labels.third || "" },
                        ],
                        innerRadius: isScreenSmall ? 25: 30,
                        outerRadius: isScreenSmall ? 45: 65,
                        paddingAngle: 5,
                        cornerRadius: 5,
                        startAngle: -90,
                        endAngle: 220,
                        cx: isScreenSmall ? 50: 100,
                        cy: isScreenSmall ? 55: 80,
                    },
                ]}
                slotProps={{
                    legend: {
                        itemGap: isScreenSmall ? 10 : 20,
                        markGap:isScreenSmall ? 5 : 10,
                    },
                }}
                width={isScreenSmall ? 280 : 400}
                height={isScreenSmall ? 120: 160}
            />
        </div>
    );
};

export default PieChartComponent;
