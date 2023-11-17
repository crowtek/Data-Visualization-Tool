import { useState } from "react";
import { Box } from "@mui/material";
import { mockDataVehicles } from "../../data/mockData";
import VehicleOverviewTable from "./components/Table";
import TableNavigation from "./components/TableNavigation";


const Leistand = () => {
  const [table, setTable] = useState("LEITSTAND")

  return (
    <Box m="20px">
      <TableNavigation setTable={setTable} table={table}/>
      <VehicleOverviewTable userData={mockDataVehicles}/>
    </Box>
  );
};

export default Leistand;
