
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { mockDataVehicles } from "../../data/mockData";

import CarTotal from "./components/CarTotal";
import CarDamaged from "./components/CarDamaged";
import CarToday from "./components/CarToday";
import EventToday from "./components/EventToday";
import SalesQuantity from "./components/SalesQuantity";
import CarList from "./components/Liste";

const Dashboard = () => {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("xl"));
  const isScreenLg = useMediaQuery(theme.breakpoints.down("lg"));

  let gridAutoRows = "160px";

  if (isScreenLg) {
    gridAutoRows = "120px";
  } else if (isScreenSmall) {
    gridAutoRows = "130px";
  }
  return (
    <Box m="20px">

      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" 
        gridAutoRows={gridAutoRows} 
        gap={isScreenLg ? "10px":"20px"}
        >
        <CarTotal vehicleData={mockDataVehicles} />
        <CarDamaged vehicleData={mockDataVehicles} />
        <CarToday />
        <EventToday />
        <SalesQuantity />
        <CarList vehicleData={mockDataVehicles} screenSize={isScreenSmall}/>
      </Box>

    </Box>
  );
};

export default Dashboard;
