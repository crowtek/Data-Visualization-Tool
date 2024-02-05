import { Box, useTheme,useMediaQuery } from "@mui/material";
import { tokens } from "../../../theme";
import { BarChart } from '@mui/x-charts/BarChart';
import { boxStyle, WeeklyOverviewGrid } from "../../../styles/Dashboard";

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


const SalesQuantity = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const tabletSize = useMediaQuery(theme.breakpoints.down("lg"));

  const chartSetting = {
    width: tabletSize ? 800 : 900,
    height: tabletSize ? 500 : 500,
  };

  return (
    <Box sx={{ ...boxStyle(colors), ...WeeklyOverviewGrid()}} >
      <Box>
        <BarChart
          dataset={dataset}
          xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
          series={[
            { 
              dataKey: 'london', 
              label: 'Neue Ladeeinheiten', 
              valueFormatter, 
              color: colors.blueAccent[400] 
            },
            { 
              dataKey: 'paris', 
              label: 'Rausgefahrende Ladeeinheiten', 
              valueFormatter, 
              color: colors.greenAccent[500] 
            },
            { 
              dataKey: 'newYork', 
              label: 'Gäste', 
              valueFormatter, 
              color: colors.redAccent[400] 
            },
          ]}
          {...chartSetting}
        />
      </Box>
    </Box>
  )
}
export default SalesQuantity;