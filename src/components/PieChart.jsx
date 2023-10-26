import React, { useEffect, useRef } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

import { useTheme } from "@mui/material";
import { tokens } from "../theme";
// 1. Daten Set Neben einander setzten 
// 2. Title Anpassen
// 3. icon hinzufügen

const PieChartComponent = ({labels, chartValues}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    let label_1;
    let label_2;
    let label_3;
    if(labels){
        label_1 = labels.first;
        label_2 = labels.second;
        label_3 = labels.third;
    }
    let chartValues_1;
    let chartValues_2;
    let chartValues_3;
    if(chartValues){
        chartValues_1 = chartValues.first;
        chartValues_2 = chartValues.second;
        chartValues_3 = chartValues.third;
    }
    

    return (
        <PieChart
              series={[
                {
                  data: [
                    { id: 0,color: colors.blueAccent[400], value: chartValues_1, label: label_1 },
                    { id: 1,color: colors.greenAccent[500], value: chartValues_2, label: label_2 },
                    { id: 2,color: colors.redAccent[400], value: chartValues_3, label: label_3 },
                  ],
                  innerRadius: 20,
                  outerRadius: 60,
                  paddingAngle: 5,
                  cornerRadius: 5,
                  startAngle: -90,
                  endAngle: 220,
                  cx: 150,
                  cy: 90,
                },
              ]}
              width={400}
              height={160}
            />
    );
};

export default PieChartComponent;
