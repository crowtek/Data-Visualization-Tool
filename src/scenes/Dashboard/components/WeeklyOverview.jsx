import { Box, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { boxStyle } from "../../../styles/Dashboard";

const dataset = [
  {
    london: 20,
    paris: 47,
    newYork: 76,
    month: 'Montag',
  },
  {
    london: 60,
    paris: 52,
    newYork: 48,
    month: 'Dienstag',
  },
  {
    london: 47,
    paris: 113,
    newYork: 150,
    month: 'Mittwoch',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    month: 'Donnerstag',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    month: 'Freitag',
  },
  {
    london: 60,
    paris: 123,
    newYork: 63,
    month: 'Samstag',
  },
  {
    london: 129,
    paris: 60,
    newYork: 25,
    month: 'Sonntag',
  },
];
const valueFormatter = (value) => `${value}mm`;


const SalesQuantity = ({ isScreenLg }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const chartSetting = {
    yAxis: [
      {
        label: 'Anzahl der Ladeeinheiten',
      },
    ],
    width: isScreenLg ? 600 : 1000,
    height: isScreenLg ? 330 : 500,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
      },
    },
  };

  return (
    <Box gridColumn="span 8" gridRow="span 4" sx={isScreenLg ? {display:"none"} : boxStyle(colors)} >
      <Box display={"flex"} justifyContent={"center"}>
        <BarChart
          dataset={dataset}
          xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
          series={[
            { dataKey: 'london', label: 'Neue Ladeeinheiten', valueFormatter, color: colors.blueAccent[400], borderRadius: "5px" },
            { dataKey: 'paris', label: 'Rausgefahrende Ladeeinheiten', valueFormatter, color: colors.greenAccent[500] },
            { dataKey: 'newYork', label: 'Gäste', valueFormatter, color: colors.redAccent[400] },
          ]}
          {...chartSetting}
        />
      </Box>
    </Box>
  )
}
export default SalesQuantity;