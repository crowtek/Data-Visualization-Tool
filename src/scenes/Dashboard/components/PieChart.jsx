import React, { useEffect, useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useTheme,useMediaQuery } from "@mui/material";

const PieChartComponent = ({ values, animationTime }) => {
    const theme = useTheme();
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
                        data: values.map((charElement, key) =>{
                            return { 
                                label: charElement.label ,
                                value: charElement.value, 
                                id: key, 
                                color: charElement.color, 
                            }
                        }),
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
