
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { mockDataVehicles } from "../../data/mockData";

import CarTotal from "./components/CarTotal";
import CarDamaged from "./components/CarDamaged";
import CarToday from "./components/CarToday";
import EventToday from "./components/EventToday";
import SalesQuantity from "./components/WeeklyOverview";
import CarList from "./components/Liste";

const Dashboard = () => {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("xl"));
  const isScreenLg = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box m="20px" mt="10px">

      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="repeat(3, 1fr)" gap="10px"
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
