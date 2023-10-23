import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';


const LatestIncomingCarsList = ({ vehicleData,screenSize }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box gridColumn="span 4" gridRow="span 4" backgroundColor={colors.primary[400]} overflow="auto" className="custom-scrollbar">
      <Box display="flex" justifyContent="space-between" alignItems="center" colors={colors.grey[100]} p="15px">
        <Typography color={colors.grey[100]} variant="h4" fontWeight="bold">
          Cars that were recently intaken
        </Typography>
        <Link to="/vehicleOverview" style={{ color: colors.primary[300] }}>
          <OpenInNewIcon sx={{ cursor: "pointer" }} />
        </Link>

      </Box>

      {vehicleData.map((car, i) => (
        <Box key={i} display="flex" justifyContent="space-between" alignItems="center" p="15px">
          <Typography color={colors.blueAccent[400]} variant="h4" fontWeight="600">
            {car.name}
          </Typography>

          { screenSize ||
            <Typography color={colors.grey[100]} >
              {car.incomingTime}
            </Typography>
          }
          <Box
            backgroundColor={colors.blueAccent[600]}
            p="5px 10px"
            sx={{
              whiteSpace: "nowrap",
              borderRadius: "4px",
            }}
          >
            Parkplace: {car.parkPlace}
          </Box>
        </Box>
      ))
      }
    </Box >
  )
}
export default LatestIncomingCarsList;