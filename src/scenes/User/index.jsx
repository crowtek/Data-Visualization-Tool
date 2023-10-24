import { Box } from "@mui/material";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";

import NewUserButton from "./components/NewUserButton";
import UserOverviewTable from "./components/Table";

const Team = () => {
  return (
    <Box m={"20px"}>
      <Box sx={{ display: "flex", justifyContent: "space-between",marginBottom:"15px" }}>
        <Header title="User List" />
        <NewUserButton userData={mockDataTeam} />
      </Box>

      <UserOverviewTable userData={mockDataTeam} />
    </Box>
  );
};

export default Team;
