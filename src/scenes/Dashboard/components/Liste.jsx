import { Box, useTheme,Table ,TableBody,TableCell,TableHead,TableRow,useMediaQuery} from "@mui/material";
import { tokens } from "../../../theme";
import { boxStyle, List,ListGrid } from "../../../styles/Dashboard";

const LatestIncomingCarsList = ({ vehicleData }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const tabletSize = useMediaQuery(theme.breakpoints.down("lg"));
  const smallTabletSize = useMediaQuery(theme.breakpoints.down("md"));
  const mobileSize = useMediaQuery(theme.breakpoints.down("sm"));
  const gridColumnValue = mobileSize ? "span 3" : smallTabletSize ? "span 12" : tabletSize ? "span 6" : "span 5";

  const sortedData = vehicleData.slice().sort((a, b) => {
    return new Date(b.incomingTime) - new Date(a.incomingTime);
  });
  
  return (
    <Box sx={{ ...boxStyle(colors), ...ListGrid() }}>
      <Table sx={List(colors)}>
        <TableHead>
          <TableRow > 
            <TableCell className="hiddeOnMobile">Eingang</TableCell>
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
                <TableCell className="incomingTimeCell">{car.incomingTime}</TableCell>
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

