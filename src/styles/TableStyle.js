
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

export const TableStyle = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return {
    "& .MuiDataGrid-root": {
      border: "none",
      letterSpacing: 0.7
    },
    "& .name-column--cell": {
      color: colors.blueAccent[400],
    },
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: colors.primary[400],
      fontSize: 16,
    },
    "& .MuiDataGrid-virtualScroller": {
      backgroundColor: colors.primary[400],
    },
    "& .MuiDataGrid-footerContainer": {
      borderTop: "none",
      backgroundColor: colors.primary[400],
    },
    "& .MuiCheckbox-root": {
      color: `${colors.greenAccent[200]} !important`,
    },
    '& .css-3jf6oj-MuiButtonBase-root-MuiButton-root': {
      color: `${colors.primary[300]} !important`,
    },
    'MuiDataGrid-panelWrapper.Mui-checked': {
      color: `${colors.primary[300]} !important`,
    },
  };
};
