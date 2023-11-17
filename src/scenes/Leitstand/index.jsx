import { useState } from "react";
import { Box } from "@mui/material";
import { mockDataVehicles } from "../../data/mockData";


import TableNavigation from "./components/TableNavigation";
import Leitstand from "./components/Table";
import HistoryTable from "./components/HistoryTable";


const Leistand = () => {
  const [table, setTable] = useState("LEITSTAND")

  return (
    <Box m="20px">
      <TableNavigation setTable={setTable} table={table}/>

      {
        table === "LEITSTAND" ? (<Leitstand userData={mockDataVehicles}/>) :
        table === "HISTORY" ? (<HistoryTable userData={mockDataVehicles}/>) : 
        (<HistoryTable userData={mockDataVehicles}/>)
        }
      
    </Box>
  );
};

export default Leistand;
