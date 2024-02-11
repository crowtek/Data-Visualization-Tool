
import { useMemo } from "react";

import Table from "../../../components/Table/Table";
import ModalButton from "../../../components/Table/ModalButton";
import AccessLevelButton from '../../../components/Table/AccessLevelButton';

const UserOverviewTable = ({ userData }) => {
    const columns = useMemo(() => {
        return [
            { field: "name", id: "id", headerName: "Name", flex: 1.5, editable: true },
            { field: "age", headerName: "Age", editable: true },
            { field: "phone", headerName: "Phone Number", flex: 1, editable: true },
            { field: "email", headerName: "Email", flex: 2, editable: true },
            {
                field: "accessLevel", headerName: "Access Level", flex: 1,
                renderCell: ({ row }) => <AccessLevelButton {...row} />
            },
            { field: "modal",headerName: "",flex: 0.2, renderCell: ({ row }) => <ModalButton {...row} table={"User"}/>,},
        ];
    }, []);

    return (
        <Table tableData={userData} tableColumns={columns}/>
    )
}
export default UserOverviewTable;