
import { useMemo } from "react";

import Table from "../../../components/Table/Table";
import ModalButton from "../../../components/Table/ModalButton";
import DeleteButton from "../../../components/Table/DeleteButton";
import VehicleStatus from "./VehicleStatus";

const ZulaufTable = ({ userData }) => {
  const columns = useMemo(() => {
    return [
      { field: "status", headerName: "Status",flex: 0.3,renderCell: ({ row: { status } }) => <VehicleStatus status={status}/>,},
      { field: "vehicle", headerName: "Kennzeichen",flex: 0.5 , id: "id"},
      { field: "parkPlace",headerName: "Standort",flex: 0.3,editable: true},
      { field: "cargo",headerName: "Ladeeinheit",flex: 0.5,editable: true},
      { field: "relation",headerName: "Relation",flex: 0.5,editable: true},
      { field: "typ",headerName: "Typ",flex: 0.5,editable: true},
      { field: "land",headerName: "Land",flex: 0.5,renderCell: ({ row }) => row.land && row.land.kurz,},
      { field: "customer",headerName: "Kunde",flex: 0.5,renderCell: ({ row }) => row.customer && row.customer.name,},
      { field: "info",headerName: "Info",flex: 1,editable: true},
      { field: "modal",headerName: "",flex: 0.2, renderCell: ({ row }) => <ModalButton {...row} table={"Intake"}/>,},
      { field: "options",headerName: "", renderCell: ({ row }) => <DeleteButton {...row} />,},
    ];
  },[])

  return (
      <Table tableData={userData} tableColumns={columns}/>
  )
}
export default ZulaufTable;