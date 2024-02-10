
import { Box,Typography,useTheme } from '@mui/material';
import { tokens } from "../../../theme";
import { OverviewBoxStyle } from '../../../styles/Page/Erfassung';

import LePlanung from '@mui/icons-material/DepartureBoardOutlined';
import NewUser from '@mui/icons-material/PersonAddAltOutlined';
import NewRelation from '@mui/icons-material/AddRoadOutlined';
import NewLe from '@mui/icons-material/AddchartOutlined';
import EventIcon from '@mui/icons-material/EditCalendar';


const OverviewBox = ({name, icon, onClick}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box sx={OverviewBoxStyle(colors)} name={icon} onClick={onClick}>
            <Typography>{name}</Typography>
            {icon === "cargo" ? <NewLe sx={{color:colors.blueAccent[400]}} /> :
             icon === "user" ? <NewUser sx={{color:colors.greenAccent[400]}}/> :
             icon === "relation" ? <NewRelation sx={{color:colors.yellowAccent[400]}} /> :
             icon === "event" ? <EventIcon sx={{color:colors.greenAccent[700]}} /> :
             <LePlanung sx={{color:colors.grey[400]}}/>} 
        </Box>
    )
}

export default OverviewBox;