import { useState } from "react";
import { Box } from "@mui/material";
import { mockDataVehicles } from "../../data/mockData";
import Header from "../../components/Header";
import { randomInt, randomUserName } from '@mui/x-data-grid-generator';
import VehicleOverviewTable from "./components/Table";

let idCounter = 100;
const createRandomRow = () => {
  idCounter += 1;
  return { 
    id: idCounter, 
    vehicle: randomUserName(), 
    parkPlace: randomInt(10, 80),
    cargo: randomUserName(),
    typ: "Trailer",
    relation: randomUserName(),
    info: randomUserName(),
   };
};

const Leistand = () => {
  const [rows, setRows] = useState(mockDataVehicles);
  
  const handleAddRow = () => {
    setRows((prevRows) => [...prevRows, createRandomRow()]);
  };


  return (
    <Box m="20px">
      <Header title="Leistand"/>
      <VehicleOverviewTable userData={rows}/>
    </Box>
  );
};

export default Leistand;
