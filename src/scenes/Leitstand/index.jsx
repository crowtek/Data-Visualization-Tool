import { useState } from "react";
import { Box,Button,Typography } from "@mui/material";
import { mockDataVehicles } from "../../data/mockData";
import VehicleOverviewTable from "./components/Table";


const Leistand = () => {

  return (
    <Box m="20px">
      <Box sx={{display:"flex", justifyContent:"flex-end", gap:5, marginBlock:2}}>
        <Box sx={{display:"flex", justifyContent:"space-between", gap:2}}>
          <Button variant="contained">Leitstand</Button>
          <Button variant="outlined">History</Button>
          <Button variant="outlined">Zulauff</Button>
        </Box>
      </Box>
      <VehicleOverviewTable userData={mockDataVehicles}/>
    </Box>
  );
};

export default Leistand;
