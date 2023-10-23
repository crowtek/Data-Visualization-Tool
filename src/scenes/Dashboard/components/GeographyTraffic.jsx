import { Box, Typography,useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import GeographyChart from "../../../components/GeographyChart";
 
const GeographyTraffic = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

    return (
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} padding="30px">
          <Typography variant="h5"fontWeight="600"sx={{ marginBottom: "15px" }}>
            Geography Based Traffic
          </Typography>

          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
    )
}
export default GeographyTraffic;