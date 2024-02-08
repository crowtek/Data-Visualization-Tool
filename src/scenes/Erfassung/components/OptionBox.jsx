
import { Box,Typography,useTheme } from '@mui/material';
import { tokens } from "../../../theme";
import { OverviewBoxStyle } from '../../../styles/Page/Erfassung';

import LePlanung from '@mui/icons-material/DepartureBoardOutlined';
import NewUser from '@mui/icons-material/PersonAddAltOutlined';
import NewRelation from '@mui/icons-material/AddRoadOutlined';
import NewLe from '@mui/icons-material/AddchartOutlined';


const OverviewBox = ({name, linkName, onClick}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box sx={OverviewBoxStyle(colors)} name={linkName} onClick={onClick}>
            <Typography>{name}</Typography>
            {linkName === "/newLe" ? <NewLe sx={{color:colors.blueAccent[400]}} /> :
             linkName === "/newUser" ? <NewUser sx={{color:colors.greenAccent[400]}}/> :
             linkName === "/newRelation" ? <NewRelation sx={{color:colors.yellowAccent[400]}} /> :
             <LePlanung sx={{color:colors.grey[400]}}/>} 
        </Box>
    )
}

export default OverviewBox;