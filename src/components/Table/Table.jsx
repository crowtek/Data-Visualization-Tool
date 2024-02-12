
import { useEffect,useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { TableStyle } from "../../styles/components/TableStyle";
import useFilterModel from "./util/useFilterModel";


const Table = ({ tableData, tableColumns, tableName }) => {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);

  const {
    filterModel,
    columnVisibilityModel,
    handleFilterModelChange,
    handleColumnVisibilityModelChange,
  } = useFilterModel(tableName);

  // Add a loading to the Table
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

              filterModel={filterModel}
              onFilterModelChange={handleFilterModelChange}

              columnVisibilityModel={columnVisibilityModel}
              onColumnVisibilityModelChange={handleColumnVisibilityModelChange}

              slots={{
                toolbar: GridToolbar,
              }}
          />
      </Box>
  )
}
export default Table;