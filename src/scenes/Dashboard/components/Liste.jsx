import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';


const LatestIncomingCarsList = ({ vehicleData,screenSize }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box gridColumn="span 4" gridRow="span 3" backgroundColor={colors.primary[400]} overflow="auto" className="custom-scrollbar"
    borderRadius="5px" border="2px solid gray">
      
      <Box p={2}>
        <Typography color={colors.grey[100]} variant="h3" fontWeight="bold">
          Neue Ladeeinheit
        </Typography>
      </Box>

      {/* MAX. 10 Einbauen */}
      {vehicleData.map((car, i) => (
        <Box key={i} display="flex" justifyContent="space-between" alignItems="center" p={1.2}>

          {/* Kennzeichen */}
          <Typography color={colors.blueAccent[400]} variant="h4" fontWeight="600">
            {car.name}
          </Typography>

          {/* Ladeeinheit */}
          <Typography color={colors.grey[100]} >
            {car.incomingTime}
          </Typography>

          {/* Eingangszeit (ausblenden wenn wenig platz) */}
          { screenSize || 
            <Box backgroundColor={colors.blueAccent[600]}p="5px 10px"sx={{whiteSpace: "nowrap",borderRadius: "4px",}}>
              {car.parkPlace}
            </Box>
          }

        </Box>
      ))
      }
    </Box >
  )
}
export default LatestIncomingCarsList;