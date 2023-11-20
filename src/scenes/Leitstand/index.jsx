import { useState } from "react";
import { Box,useMediaQuery,useTheme } from "@mui/material";
import { mockDataVehicles,mockDataVehiclesZulauf } from "../../data/mockData";

import TableNavigation from "./components/TableNavigation";
import Leitstand from "./components/Table";
import HistoryTable from "./components/HistoryTable";
import ZulaufTable from "./components/ZulaufTable";

const Leistand = () => {
  const [table, setTable] = useState("LEITSTAND");
  const theme = useTheme();
  const isScreenLg = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box p="20px" height={"90vh"} >
      <TableNavigation setTable={setTable} table={table} screenSize={isScreenLg}/>
      {
        table === "LEITSTAND" ? (<Leitstand userData={mockDataVehicles} />) :
          table === "HISTORY" ? (<HistoryTable userData={mockDataVehicles} />) :
            (<ZulaufTable userData={mockDataVehiclesZulauf} />)
      }

    </Box>
  );
};

export default Leistand;
