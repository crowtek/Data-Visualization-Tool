import { useState } from "react";
import { Box,Button } from "@mui/material";
import { mockDataVehicles } from "../../data/mockData";
import VehicleOverviewTable from "./components/Table";


const Leistand = () => {
  const [table, setTable] = useState("LEITSTAND")

  const handleTableChange = (event) => {
    const buttonValue = event.target.innerText;
    console.log(buttonValue)
    setTable(buttonValue)
  }

  return (
    <Box m="20px">
      <Box sx={{display:"flex", justifyContent:"flex-end", gap:5, marginBlock:2}}>
        <Box sx={{display:"flex", justifyContent:"space-between", gap:2}}>
          <Button 
            variant={table === "LEITSTAND" ? "contained" : "outlined"}
            onClick={handleTableChange}
          >
              Leitstand
          </Button>

          <Button
            variant={table === "HISTORY" ? "contained" : "outlined"}
            onClick={handleTableChange}
          >
            History
          </Button>

          <Button 
            variant={table === "ZULAUF" ? "contained" : "outlined"}
            onClick={handleTableChange}
          >
            Zulauf
          </Button>
        </Box>
      </Box>
      <VehicleOverviewTable userData={mockDataVehicles}/>
    </Box>
  );
};

export default Leistand;
