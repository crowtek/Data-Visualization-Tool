
import { useMemo } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { TableStyle as TableStyleImport} from "../../../styles/TableStyle";
import VehicalModal from "./Modal";
import VehicleInfo from "../../../components/TableInfo";
import VehicleStatus from "./VehicleStatus";


const VehicleOverviewTable = ({ userData }) => {
    const TableStyle = useMemo(() => {
      return TableStyleImport;
    },[])

    const columns = useMemo(() => {
      return [
        { field: "status", headerName: "Status",flex: 0.3,renderCell: ({ row: { status } }) => <VehicleStatus status={status}/>,},
        { field: "name", headerName: "Vehicle ID",flex: 0.5 , id: "id"},
        { field: "parkPlace",headerName: "Park Place",flex: 0.3,editable: true},
        { field: "takeAppointment",headerName: "Take Appointment",flex: 0.5,editable: true},
        { field: "info",headerName: "Info",flex: 2,renderCell: ({ row: { info} }) => <VehicleInfo info={info}/>},
        { field: "options",headerName: "",renderCell: ({ row }) => <VehicalModal {...row}/>,},
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
export default VehicleOverviewTable;