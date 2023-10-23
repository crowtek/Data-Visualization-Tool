import { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { TableStyle as TableStyleImport}from "../../../styles/TableStyle"

const IntakeTable = ({vehicleData}) => {
    const TableStyle = useMemo(() => {
        return TableStyleImport;
      },[])

    const columns = [
        {field: "name",headerName: "Name",flex: 1,id: "id"},
        {field: "incomingTime",headerName: "incoming Time",flex: 1,  },
        {field: "customerName",headerName: "Customer Name",flex: 1,},
        {field: "customerPhone",headerName: "Customer Phone",flex: 1,},
        {field: "parkPlace",headerName: "Park Place",flex: 0.5,},
    ];

    return (
        <Box style={{ flexGrow: 1 }} sx={TableStyle} height={"30vh"}>
            <Typography variant="h2" p={1}>Intaken Vehicals</Typography>
            <DataGrid rows={vehicleData} columns={columns} autoPageSize />
        </Box>  
    )
}

export default IntakeTable;