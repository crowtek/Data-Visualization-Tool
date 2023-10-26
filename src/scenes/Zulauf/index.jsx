import { Box } from "@mui/material";
import Header from "../../components/Header";
import { mockDataVehicles } from "../../data/mockData";
import IncomingVehicleTable from "./components/Table";

const Zulauf = () => {
  return (
    <Box m="20px">
        <Header title="Zulauf" />
        <IncomingVehicleTable userData={mockDataVehicles}/>
    </Box>
  );
};

export default Zulauf;
