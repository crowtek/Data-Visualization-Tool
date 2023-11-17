import { Box,Button } from "@mui/material";

const TableNavigation = ({table,setTable}) => {
    
    const handleTableChange = (event) => {
        const buttonValue = event.target.innerText;
        console.log(buttonValue)
        setTable(buttonValue)
    }

    return (
        <Box sx={{display:"flex", justifyContent:"flex-end", gap:5, marginBlock:2}}>
        <Box sx={{display:"flex", justifyContent:"space-between", gap:2}}>
          <Button 
            variant={table === "LEITSTAND" ? "contained" : "outlined"}
            onClick={handleTableChange}
          >
              Leitstand
          </Button>

          <Button
            variant={table === "HISTORY" ? "contained" : "outlined"}
            onClick={handleTableChange}
          >
            History
          </Button>

          <Button 
            variant={table === "ZULAUF" ? "contained" : "outlined"}
            onClick={handleTableChange}
          >
            Zulauf
          </Button>
        </Box>
      </Box>
    )
}

export default TableNavigation;