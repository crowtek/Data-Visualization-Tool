import { useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { mockDataVehicles, mockDataVehiclesZulauf } from "../../data/mockData";

import TableNavigation from "./components/TableNavigation";
import Leitstand from "./components/Leistand";
import History from "./components/History";
import Zulauf from "./components/Zulauf";

const Leistand = () => {
  const [table, setTable] = useState("LEITSTAND");
  const theme = useTheme();
  const isScreenLg = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box paddingX="20px" height={"88vh"} >
      <TableNavigation setTable={setTable} table={table} screenSize={isScreenLg} />
      {
        table === "LEITSTAND" ? (<Leitstand userData={mockDataVehicles} />) :
          table === "HISTORY" ? (<History userData={mockDataVehicles} />) :
            (<Zulauf userData={mockDataVehiclesZulauf} />)
      }

    </Box>
  );
};

export default Leistand;
