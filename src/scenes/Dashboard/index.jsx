
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { mockDataVehicles,mockDataVehiclesZulauf } from "../../data/mockData";

import HofOverview from "./components/HofOverview";
import CarDamaged from "./components/LeOverview";
import CarToday from "./components/LeSchaden";
import EventToday from "./components/EventToday";
import WeeklyOverview from "./components/WeeklyOverview";
import List from "./components/Liste";
import UserOnline from "./components/UserOnline";
import PlaceOverview from "./components/PlaceOverview";

const Dashboard = () => {
  const theme = useTheme();
  const isScreenLg = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box m="20px" mt="0px">

      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="repeat(6, 1fr)" gap="10px"
      >
        <HofOverview vehicleData={mockDataVehicles} zulaufData={mockDataVehiclesZulauf}/>
        <CarDamaged vehicleData={mockDataVehicles} />
        <CarToday />
        <EventToday />
        <UserOnline />
        <PlaceOverview />
        <WeeklyOverview isScreenLg={isScreenLg} />
        <List vehicleData={mockDataVehicles} screenSize={isScreenLg} />
      </Box>

    </Box>
  );
};

export default Dashboard;
