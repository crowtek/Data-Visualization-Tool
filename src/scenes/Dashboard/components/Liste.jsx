import { Box, Typography, useTheme,Table ,TableBody,TableCell,TableHead,TableRow} from "@mui/material";
import { tokens } from "../../../theme";

const LatestIncomingCarsList = ({ vehicleData,screenSize }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box 
      gridColumn="span 4" 
      gridRow="span 3" 
      backgroundColor={colors.primary[400]} 
      borderRadius="5px"
      border="2px solid gray"
    >
      
      <Typography color={colors.grey[100]} variant="h3" fontWeight="bold"  p={2}>
        Neuste aufgenommene Ladeeinheiten
      </Typography>

      <Table>
        <TableHead>
          <TableRow > 
            <TableCell sx={{fontSize:"20px",fontWeight:"bold"}}>Kennzeichen</TableCell>
            <TableCell sx={{fontSize:"20px",fontWeight:"bold"}}>Eingang</TableCell>
            <TableCell sx={{fontSize:"20px",fontWeight:"bold"}}>Standort</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {vehicleData.map((car, i) => {
          if(i <= 9){
            return(
              <TableRow key={i}>
                <TableCell >{car.name}</TableCell>
                <TableCell>{car.incomingTime}</TableCell>
                <TableCell>{car.parkPlace}</TableCell>
              </TableRow>
            )
          }else{
            return (<TableRow key={i}></TableRow>)
          }
        })}

        </TableBody>
      </Table>
    </Box >
  )
}
export default LatestIncomingCarsList;

