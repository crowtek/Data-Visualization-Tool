
import { useEffect,useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { TableStyle } from "../../styles/components/TableStyle";


const Table = ({ tableData, tableColumns, tableName }) => {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);
  const [filterModel, setFilterModel] = useState({
    items: [],
  })

  // Save Filter
  const filterName = tableName + "Filter";
  const handleFilterModelChange = (newFilterModel) => {
    setFilterModel(newFilterModel);
    localStorage.setItem(filterName, JSON.stringify(newFilterModel));
  };

  useEffect(() => {
    const savedFilterModal = localStorage.getItem(filterName);
    if(savedFilterModal){
      setFilterModel(JSON.parse(savedFilterModal));
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
              slots={{
                toolbar: GridToolbar,
              }}
          />
      </Box>
  )
}
export default Table;