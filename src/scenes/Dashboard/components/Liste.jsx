import { Box, useTheme,Table ,TableBody,TableCell,TableHead,TableRow} from "@mui/material";
import { tokens } from "../../../theme";
import { boxStyle, List,ListGrid } from "../../../styles/Page/Dashboard";

const LatestIncomingCarsList = ({ vehicleData }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const sortedData = vehicleData.slice().sort((a, b) => {
    return new Date(b.incomingTime) - new Date(a.incomingTime);
  });
  
  return (
    <Box className="bigGrid" sx={{ ...boxStyle(colors), ...ListGrid() }}>
      <Table sx={List(colors)}>
        <TableHead>
          <TableRow > 
            <TableCell>Eingang</TableCell>
            <TableCell>Kennzeichen</TableCell>
            <TableCell>Standort</TableCell>
            <TableCell className="hiddeOnMobile">Relation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {sortedData.map((car, i) => {
          if(i <= 8){
            return(
              <TableRow key={i}>
                <TableCell >{car.incomingTime}</TableCell>
                <TableCell >{car.vehicle}</TableCell>
                <TableCell>{car.parkPlace}</TableCell>
                <TableCell className="hiddeOnMobile">{car.relation}</TableCell>
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

