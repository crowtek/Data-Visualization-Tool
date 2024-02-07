
import { useEffect,useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { TableStyle } from "../../styles/components/TableStyle";


const Table = ({ tableData, tableColumns }) => {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRows(tableData);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [tableData]);
  

  return (
      <Box sx={TableStyle} >
          <DataGrid
              rows={rows}
              columns={tableColumns}
              autoPageSize
              disableRowSelectionOnClick
              loading={loading}
              slots={{
                toolbar: GridToolbar,
              }}
          />
      </Box>
  )
}
export default Table;