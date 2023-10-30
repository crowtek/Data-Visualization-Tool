
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { mockDataVehicles } from "../../data/mockData";

import CarTotal from "./components/HofOverview";
import CarDamaged from "./components/LeOverview";
import CarToday from "./components/LeSchaden";
import EventToday from "./components/EventToday";
import WeeklyOverview from "./components/WeeklyOverview";
import List from "./components/Liste";
import UserOnline from "./components/UserOnline";

const Dashboard = () => {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("xl"));
  const isScreenLg = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box m="20px">

      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="repeat(6, 1fr)" gap="10px"
        >
        <CarTotal vehicleData={mockDataVehicles} />
        <CarDamaged vehicleData={mockDataVehicles} />
        <CarToday />
        <EventToday />
        <UserOnline />
        <EventToday />
        <WeeklyOverview isScreenLg={isScreenLg}/>
        <List vehicleData={mockDataVehicles} screenSize={isScreenLg}/>
      </Box>

    </Box>
  );
};

export default Dashboard;
