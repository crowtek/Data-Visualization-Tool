
import { useMemo } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { TableStyle as  TableStyleImport} from "../../../styles/TableStyle";
import VehicalModal from "./Modal";
import VehicleInfo from "../../../components/TableInfo";
import VehicleStatus from "../../Leitstand/components/VehicleStatus";

const IncomingVehicleTable = ({ userData }) => {
    const TableStyle = useMemo(() => {
      return TableStyleImport;
    },[])

    const columns = useMemo(() => {
      return [
        { field: "status", headerName: "Status",flex: 0.3,renderCell: ({ row: { status } }) => <VehicleStatus status={status}/>,},
        { field: "vehicle", headerName: "Kennzeichen",flex: 0.5 , id: "id"},
        { field: "parkPlace",headerName: "Standort",flex: 0.3,editable: true},
        { field: "cargo",headerName: "Ladeeinheit",flex: 0.5,editable: true},
        { field: "relation",headerName: "Relation",flex: 0.5,editable: true},
        { field: "typ",headerName: "Typ",flex: 0.5,editable: true},
        { field: "land",headerName: "Land",flex: 0.5,renderCell: ({ row }) => row.land.kurz,},
        { field: "customer",headerName: "Kunde",flex: 0.5,renderCell: ({ row }) => row.customer.name,},
        { field: "info",headerName: "Info",flex: 1,editable: true},
        { field: "options",headerName: "",renderCell: ({ row }) => <VehicalModal {...row}/>,},
      ];
    },[])

    return (
        <Box height="80vh" sx={TableStyle}>
            <DataGrid
                rows={userData}
                columns={columns}
                slots={{
                  toolbar: GridToolbar,
                }}
                onCellEditStop={(event) => {
                  console.log(event.value)
                }}
            />
        </Box>
    )
}
export default IncomingVehicleTable;