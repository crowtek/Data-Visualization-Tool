
import { useMemo } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { TableStyle as TableStyleImport} from "../../../styles/TableStyle";


const HistoryTable = ({ userData }) => {
    const TableStyle = useMemo(() => {
      return TableStyleImport;
    },[])


    const columns = useMemo(() => {
      return [
        { field: "vehicle", headerName: "Kennzeichen",flex: 0.5 , id: "id"},
        { field: "parkPlace",headerName: "Standort",flex: 0.3,editable: true},
        { field: "cargo",headerName: "Ladeeinheit",flex: 0.5,editable: true},
        { field: "relation",headerName: "Relation",flex: 0.5,editable: true},
        { field: "typ",headerName: "Typ",flex: 0.5,editable: true},
        { field: "land",headerName: "Land",flex: 0.5,renderCell: ({ row }) => row.land && row.land.kurz,},
        { field: "customer",headerName: "Kunde",flex: 0.5,renderCell: ({ row }) => row.customer && row.customer.name,},
        { field: "info",headerName: "Info",flex: 1,editable: true},
      ];
    },[])

    return (
        <Box height="80vh" sx={TableStyle} >
            <DataGrid
                rows={userData}
                columns={columns}
                autoPageSize
                slots={{
                  toolbar: GridToolbar,
                }}
            />
        </Box>
    )
}
export default HistoryTable;