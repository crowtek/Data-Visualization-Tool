import { Box } from "@mui/material";
import { mockDataTeam } from "../../data/mockData";
import UserOverviewTable from "./components/UserTable";

const Team = () => {
  return (
    <Box paddingX={"20px"}>
      <UserOverviewTable userData={mockDataTeam} />
    </Box>
  );
};

export default Team;
