import { Box } from "@mui/material";
import { mockDataTeam } from "../../data/mockData";
import UserOverviewTable from "./components/Table";

const Team = () => {
  return (
    <Box paddingX={"20px"}>
      <UserOverviewTable userData={mockDataTeam} />
    </Box>
  );
};

export default Team;
