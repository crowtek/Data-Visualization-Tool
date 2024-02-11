import { Box,Table ,TableBody,TableCell,TableHead,TableRow} from "@mui/material";

const LatestIncomingCarsList = ({ vehicleData }) => {
  const sortedData = vehicleData.slice().sort((a, b) => {
    return new Date(b.incomingTime) - new Date(a.incomingTime);
  });
  
  return (
    <Box className="dashboardList-container" >
      <Table className="dashboardList">
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

