
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

export const TableStyle = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return {
    height:"80vh",
    "& .MuiDataGrid-root": {
      letterSpacing: 0.7,
      borderRadius:"5px",
      border:"2px solid gray"
    },
    "& .name-column--cell": {
      color: colors.blueAccent[400],
    },
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: colors.primary[400],
      fontSize: 16,
    },
    "& .MuiDataGrid-toolbarContainer ":{
      backgroundColor: colors.primary[400],
    },
    "& .MuiDataGrid-virtualScroller": {
      backgroundColor: colors.primary[400],
    },
    "& .MuiDataGrid-footerContainer": {
      borderTop: "none",
      backgroundColor: colors.primary[400],
    },
  };
};
