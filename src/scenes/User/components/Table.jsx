import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useMemo } from "react";
import { TableStyle as TableStyleImport} from "../../../styles/TableStyle";
import DeleteButton from "../../../components/DeleteButton";
import AccessLevelButton from './AccessLevelButton';

const UserOverviewTable = ({ userData }) => {
    const TableStyle = useMemo(() => {
        return TableStyleImport;
      },[])

    const columns = useMemo(() => {
        return [
            {field: "name",id: "id",headerName: "Name",flex: 1.5,editable: true},
            {field: "age",headerName: "Age",editable: true},
            {field: "phone",headerName: "Phone Number",flex: 1,editable: true},
            {field: "email",headerName: "Email",flex: 2,editable: true},
            {field: "accessLevel",headerName: "Access Level",flex: 1,
                renderCell: ({ row }) => <AccessLevelButton {...row}/>
            },
            {field: "options",headerName: "", renderCell: ({ row }) => <DeleteButton {...row} />,},
        ];
    },[userData]);
      
    return (
        <Box height="80vh" sx={TableStyle}>
            <DataGrid disableRowSelectionOnClick rows={userData} columns={columns} />
        </Box>
    )
}
export default UserOverviewTable;