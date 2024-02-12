import { useState } from "react";
import { Box } from "@mui/material";
import { mockDataVehicles, mockDataVehiclesZulauf } from "../../data/mockData";

import TableNavigation from "./components/TableNavigation";
import Leitstand from "./components/Leistand";
import History from "./components/History";
import Zulauf from "./components/Intake";

const Leistand = () => {
  const [table, setTable] = useState("LEITSTAND");

  return (
    <Box paddingX="20px" height={"88vh"} >
      <TableNavigation setTable={setTable} table={table} />
      {
        table === "LEITSTAND" ? (<Leitstand userData={mockDataVehicles} />) :
          table === "HISTORY" ? (<History userData={mockDataVehicles} />) :
            (<Zulauf userData={mockDataVehiclesZulauf} />)
      }

    </Box>
  );
};

export default Leistand;
