
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { mockDataVehicles, mockDataVehiclesZulauf, mockDataVehiclesHistory, mockDataTeam, mockEvents } from "../../data/mockData";


import Yard from "./components/Yard";
import Vehicles from "./components/Vehicles";
import Damages from "./components/Damages";
import Events from "./components/Events";
import WeeklyOverview from "./components/WeeklyOverview";
import List from "./components/Liste";
import UserOnline from "./components/UserOnline";
import Gates from "./components/Gates";

const Dashboard = () => {
  const theme = useTheme();
  const isScreenLg = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box paddingX="20px" height={"88vh"}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="repeat(6, 1fr)" gap="10px" height={"100%"}>
        <Yard vehicleData={mockDataVehicles} zulaufData={mockDataVehiclesZulauf} historyData={mockDataVehiclesHistory} />
        <Vehicles vehicleData={mockDataVehicles} />
        <Damages vehicleData={mockDataVehicles} />
        <Events events={mockEvents} />
        <UserOnline userData={mockDataTeam} />
        <Gates />
        <WeeklyOverview isScreenLg={isScreenLg} />
        <List vehicleData={mockDataVehicles} screenSize={isScreenLg} />
      </Box>

    </Box>
  );
};

export default Dashboard;
