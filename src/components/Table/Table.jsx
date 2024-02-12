
import { useEffect,useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { TableStyle } from "../../styles/components/TableStyle";


const Table = ({ tableData, tableColumns, tableName }) => {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({});   
  const [filterModel, setFilterModel] = useState({
    items: [],
  })

  // Save Filter
  const filterName = tableName + "Filter";
  const filterColumnVis = tableName + "ColumnVis";
  const handleFilterModelChange = (newFilterModel) => {
    setFilterModel(newFilterModel);
    localStorage.setItem(filterName, JSON.stringify(newFilterModel));
  };
  
  const handleColumnVisibilityModelChange = (newModel) => {
    setColumnVisibilityModel(newModel);
    localStorage.setItem(filterColumnVis, JSON.stringify(newModel));
  };

  useEffect(() => {
    const savedFilterModal = localStorage.getItem(filterName);
    if(savedFilterModal){
      setFilterModel(JSON.parse(savedFilterModal));
    }
  
    const savedColumnVisibility = localStorage.getItem(filterColumnVis);
    if (savedColumnVisibility) {
      setColumnVisibilityModel(JSON.parse(savedColumnVisibility));
    }
  }, []);

  // add a loading to the Table
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