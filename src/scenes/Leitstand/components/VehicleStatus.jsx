import { Box, useTheme } from "@mui/material";
import { tokens } from "../../../theme";

import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';

const VehicleStatus = ({ status }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box>
            {status === "ready" && <CheckCircleOutlineOutlinedIcon sx={{color:colors.greenAccent[600]}}/>}
            {status === "fail" && <HighlightOffOutlinedIcon sx={{color:colors.redAccent[500]}}/>}
            {status === "pending" && <LoopOutlinedIcon sx={{color:colors.primary[200]}}/>}
        </Box>
    )
}
export default VehicleStatus;