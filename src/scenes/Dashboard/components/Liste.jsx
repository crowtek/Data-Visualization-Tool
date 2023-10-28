import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const LatestIncomingCarsList = ({ vehicleData,screenSize }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box gridColumn="span 4" gridRow="span 3" backgroundColor={colors.primary[400]} overflow="auto" className="custom-scrollbar"
    borderRadius="5px" border="2px solid gray">
      
      <Box>
        <Typography color={colors.grey[100]} variant="h3" fontWeight="bold"  p={2}>
          Neuste aufgenommene Ladeeinheiten
        </Typography>
      </Box>

      {/* MAX. 10 Einbauen */}
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow > 
            <TableCell sx={{fontSize:"20px",fontWeight:"bold"}}>Kennzeichen</TableCell>
            <TableCell sx={{fontSize:"20px",fontWeight:"bold"}}>Eingang</TableCell>
            <TableCell sx={{fontSize:"20px",fontWeight:"bold"}}>Standort</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {vehicleData.map((car, i) => (
          <TableRow key={i}>
            <TableCell >{car.name}</TableCell>
            <TableCell>{car.incomingTime}</TableCell>
            <TableCell>{car.parkPlace}</TableCell>
          </TableRow>
        ))}

        </TableBody>
      </Table>
    </Box >
  )
}
export default LatestIncomingCarsList;

