import { Box } from "@mui/material";
import { mockDataVehicles } from "../../data/mockData";
import Header from "../../components/Header";
import VehicleOverviewTable from "./components/Table";
import { useGetVehicleData } from "../../hooks/useGetVehicleData";

const VehicleOverview = () => {
  const { vehicles } = useGetVehicleData();

  return (
    <Box m="20px">
      <Header title="Vehical Data" />
      <VehicleOverviewTable userData={mockDataVehicles}/>
    </Box>
  );
};

export default VehicleOverview;
