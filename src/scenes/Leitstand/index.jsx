import { Box } from "@mui/material";
import { mockDataVehicles } from "../../data/mockData";
import Header from "../../components/Header";
import VehicleOverviewTable from "./components/Table";

const Leistand = () => {

  return (
    <Box m="20px">
      <Header title="Leistand" />
      <VehicleOverviewTable userData={mockDataVehicles}/>
    </Box>
  );
};

export default Leistand;
