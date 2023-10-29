import { Box, Typography, useTheme,Table ,TableBody,TableCell,TableHead,TableRow} from "@mui/material";
import { tokens } from "../../../theme";

const LatestIncomingCarsList = ({ vehicleData,screenSize }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  let numberOfListElements = screenSize ? 5 : 9;

  const sortedData = vehicleData.slice().sort((a, b) => {
    return new Date(b.incomingTime) - new Date(a.incomingTime);
  });
  
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
            <TableCell sx={{fontSize:screenSize ? "16":"20px",fontWeight:"bold"}}>Kennzeichen</TableCell>
            <TableCell sx={{fontSize:screenSize ? "16":"20px",fontWeight:"bold"}}>{screenSize ? "" : "Eingang"}</TableCell>
            <TableCell sx={{fontSize:screenSize ? "16":"20px",fontWeight:"bold"}}>Standort</TableCell>
            <TableCell sx={{fontSize:screenSize ? "16":"20px",fontWeight:"bold"}}>Relation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {sortedData.map((car, i) => {
          if(i <= numberOfListElements){
            return(
              <TableRow key={i}>
                <TableCell >{car.vehicle}</TableCell>
                <TableCell>{screenSize ? "" : car.incomingTime}</TableCell>
                <TableCell>{car.parkPlace}</TableCell>
                <TableCell>{car.relation}</TableCell>
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

