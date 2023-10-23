import { Box } from "@mui/material";
import { mockDataVehicles } from "../../data/mockData";

import VehicleInput from "./components/VehicleInput";
import IncomingVehicleList from "./components/VehicleList";
import IntakeTable from "./components/IntakeTable";

const VehicleIntake = () => {

  return (
    <Box m="20px" sx={{display:"flex", gap: 5}}>
      
      <Box sx={{
            height:"80vh",
            flexGrow: 2,
            display:"flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
      >
        <VehicleInput />
        <IntakeTable vehicleData={mockDataVehicles}/>
      </Box>

      <IncomingVehicleList vehicleData={mockDataVehicles}/>
    </Box>
  );
};

export default VehicleIntake;
