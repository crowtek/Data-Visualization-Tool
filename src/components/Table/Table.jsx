
import { useMemo,useEffect,useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { TableStyle as TableStyleImport} from "../../../styles/components/TableStyle";


const HistoryTable = ({ userData, rows, columns }) => {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);
  const columns = useMemo(() => {
    return [
    
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