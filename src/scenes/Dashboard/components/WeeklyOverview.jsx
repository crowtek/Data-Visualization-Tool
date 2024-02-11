import { Box, useTheme,useMediaQuery } from "@mui/material";
import { tokens } from "../../../theme";
import { BarChart } from '@mui/x-charts/BarChart';


const WeeklyOverview = ({weekysData}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const tabletSize = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box className="WeeklyOverview" >
      <Box>
        <BarChart
          dataset={weekysData}
          width= {tabletSize ? 800 : 900}
          height={ tabletSize ? 500 : 500}
          xAxis={[{ scaleType: 'band', dataKey: 'day' }]}
          series={[
            { 
              dataKey: 'intake', 
              label: ' Cargos Intaken ', 
              color: colors.blueAccent[400] 
            },
            { 
              dataKey: 'left', 
              label: ' Cargos drove away', 
              color: colors.greenAccent[500] 
            },
            { 
              dataKey: 'onSite', 
              label: ' Cargo on site', 
              color: colors.redAccent[400] 
            },
          ]}
        />
      </Box>
    </Box>
  )
}
export default WeeklyOverview;