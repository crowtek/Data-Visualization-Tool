import { Box } from "@mui/material";
import Header from "../../components/Header";
import { mockDataVehicles } from "../../data/mockData";
import IncomingVehicleTable from "./components/Table";

const IncomingVehicle = () => {
  return (
    <Box m="20px">
        <Header title="Incoming Vehicles" />
        <IncomingVehicleTable userData={mockDataVehicles}/>
    </Box>
  );
};

export default IncomingVehicle;
