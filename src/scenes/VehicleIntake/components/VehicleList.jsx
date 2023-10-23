import { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import ParkButton from "./ParkButton";
import { TableStyle as TableStyleImport}from "../../../styles/TableStyle"

const IncomingVehicleList = ({vehicleData}) => {
    const TableStyle = useMemo(() => {
      return TableStyleImport;
    },[])

    const columns = useMemo(() => {
      return[
        {id: "id", field: "name",headerName: "Name",flex: 1,},
        {field: "takeAppointment",headerName: "Schedule Time",flex: 1,},
        {field: "cost",headerName: "Park",flex: 0.5,renderCell: () => (<ParkButton />),},
      ]
    },[]);
  
    return (
      <Box height="80vh" flexGrow="1" sx={TableStyle}>
        <Typography variant="h2" p={1}>Incoming Vehicals</Typography> 
        <DataGrid rows={vehicleData} columns={columns} autoPageSize/>
      </Box>
    )
}

export default IncomingVehicleList;