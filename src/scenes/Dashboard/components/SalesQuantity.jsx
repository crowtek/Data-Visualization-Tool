import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import BarChart from "../../../components/BarChart";

const SalesQuantity = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box gridColumn="span 8" gridRow="span 3" backgroundColor={colors.primary[400]}>
      <Typography variant="h4" fontWeight="600" sx={{ padding: "20px" }}>
        Monthly Overview
      </Typography>
      <Box display={"flex"} justifyContent={"center"}>
        <BarChart isDashboard={true} />
      </Box>
    </Box>
  )
}
export default SalesQuantity;