
import { useMemo} from "react";
import Table from "../../../components/Table/Table";

const HistoryTable = ({ userData }) => {
  const columns = useMemo(() => {
    return [
      { field: "vehicle", headerName: "Plate Number",flex: 0.5 , id: "id"},
      { field: "parkPlace",headerName: "Parking Place",flex: 0.3,editable: true},
      { field: "cargo",headerName: "Cargo",flex: 0.5,editable: true},
      { field: "relation",headerName: "Relation",flex: 0.5,editable: true},
      { field: "typ",headerName: "Typ",flex: 0.5,editable: true},
      { field: "land",headerName: "Land",flex: 0.5,renderCell: ({ row }) => row.land && row.land.kurz,},
      { field: "customer",headerName: "Customer",flex: 0.5,renderCell: ({ row }) => row.customer && row.customer.name,},
      { field: "info",headerName: "Info",flex: 1,editable: true},
    ];
  },[])

  return (
    <Table tableData={userData} tableColumns={columns}/>
  )
}

export default HistoryTable;