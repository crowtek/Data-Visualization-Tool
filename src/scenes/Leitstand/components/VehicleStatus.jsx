import { Box } from "@mui/material";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import DownloadingOutlinedIcon from '@mui/icons-material/DownloadingOutlined';

const VehicleStatus = ({ status }) => {
    return (
        <Box>
            {status === "empty" && <CircleOutlinedIcon />}
            {status === "full" && <CircleIcon/>}
            {status === "teilbeladen" && <DownloadingOutlinedIcon />}
        </Box>
    )
}
export default VehicleStatus;