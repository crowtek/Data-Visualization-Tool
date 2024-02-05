
import { useMemo,useEffect,useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { TableStyle as TableStyleImport} from "../../../styles/TableStyle";


const HistoryTable = ({ userData }) => {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);
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

  const TableStyle = useMemo(() => {
    return TableStyleImport;
  },[])

  useEffect(() => {
    const timer = setTimeout(() => {
      setRows(userData);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [userData]);
  

  return (
      <Box sx={TableStyle} >
          <DataGrid
              rows={rows}
              columns={columns}
              autoPageSize
              loading={loading}
              slots={{
                toolbar: GridToolbar,
              }}
          />
      </Box>
  )
}
export default HistoryTable;