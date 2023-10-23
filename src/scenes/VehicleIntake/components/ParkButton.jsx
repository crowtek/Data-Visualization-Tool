import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";

const ParkVehicleButton = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return(
        <Box
          width="100%"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          backgroundColor={colors.blueAccent[600]}
          borderRadius="4px"
          sx={{
            cursor: 'pointer',
            transition: 'background-color 0.4s ease-in-out',
            '&:hover': {
              backgroundColor: colors.blueAccent[700],
            },
          }}
        >
          <Typography color={colors.grey[100]} sx={{ ml: "5px", pointerEvents: 'none' }}>
            Park
          </Typography>
        </Box>
    )
}

export default ParkVehicleButton;