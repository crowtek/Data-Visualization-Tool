
import { Box,useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataVehicles, mockDataVehiclesZulauf, mockDataVehiclesHistory, mockDataTeam, mockEvents } from "../../data/mockData";

import Yard from "./components/Yard";
import Vehicles from "./components/Vehicles";
import Damages from "./components/Damages";
import Events from "./components/Events";
import WeeklyOverview from "./components/WeeklyOverview";
import List from "./components/Liste";
import UserOnline from "./components/UserOnline";
import Gates from "./components/Gates";

import { containerStyle, dashboardGrid } from "../../styles/Layout";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={containerStyle}>
      <Box sx={dashboardGrid(colors)}>
        <Yard vehicleData={mockDataVehicles} zulaufData={mockDataVehiclesZulauf} historyData={mockDataVehiclesHistory} />
        <Vehicles vehicleData={mockDataVehicles} />
        <Damages vehicleData={mockDataVehicles} />
        <Events events={mockEvents} />
        <UserOnline userData={mockDataTeam} />
        <Gates />
        <WeeklyOverview />
        <List vehicleData={mockDataVehicles}/>
      </Box>
    </Box>
  );
};

export default Dashboard;
