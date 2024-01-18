import { Box, useTheme,Table ,TableBody,TableCell,TableHead,TableRow} from "@mui/material";
import { tokens } from "../../../theme";
import { boxStyle, List } from "../../../styles/Dashboard";

const LatestIncomingCarsList = ({ vehicleData,screenSize }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  let numberOfListElements = screenSize ? 3 : 8;

  const sortedData = vehicleData.slice().sort((a, b) => {
    return new Date(b.incomingTime) - new Date(a.incomingTime);
  });
  
  return (
    <Box gridColumn="span 4" gridRow="span 4" sx={boxStyle(colors)}>
      <Table sx={List(colors)}>
        <TableHead>
          <TableRow > 
            <TableCell>{screenSize ? "" : "Eingang"}</TableCell>
            <TableCell>Kennzeichen</TableCell>
            <TableCell>Standort</TableCell>
            <TableCell>Relation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {sortedData.map((car, i) => {
          if(i <= numberOfListElements){
            return(
              <TableRow key={i}>
                <TableCell className="incomingTimeCell">{screenSize ? "" : car.incomingTime}</TableCell>
                <TableCell >{car.vehicle}</TableCell>
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

