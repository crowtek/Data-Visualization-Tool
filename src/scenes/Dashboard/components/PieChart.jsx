import React, { useEffect, useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useTheme,useMediaQuery } from "@mui/material";
import { tokens } from "../../../theme";

const PieChartComponent = ({ labels, chartValues,animationTime,isScreenSmall }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const laptopScreen = useMediaQuery(theme.breakpoints.down("lg"));
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimate(true);
        }, animationTime ? animationTime : 500);
    }, [animationTime]);


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
                        innerRadius: laptopScreen ? 25: 30,
                        outerRadius: laptopScreen ? 45: 65,
                        paddingAngle: 5,
                        cornerRadius: 5,
                        startAngle: -90,
                        endAngle: 220,
                        cx: laptopScreen ? 50: 100,
                        cy: laptopScreen ? 55: 80,
                    },
                ]}
                slotProps={{
                    legend: {
                        itemGap: laptopScreen ? 10 : 20,
                        markGap:laptopScreen ? 5 : 10,
                    },
                }}
                width={laptopScreen ? 320 : 400}
                height={laptopScreen ? 120: 160}
            />
        </div>
    );
};

export default PieChartComponent;
