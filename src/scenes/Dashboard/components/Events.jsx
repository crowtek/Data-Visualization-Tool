import { useMemo } from "react";
import StatBox from "../../../components/StatBox";
import EventIcon from '@mui/icons-material/Event';
import { useTheme,Box,useMediaQuery } from "@mui/material";
import { tokens } from "../../../theme";
import { boxStyle } from "../../../styles/Dashboard";

const CountEventsToday = ({events}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const elementType = mobileScreen ? "" : "Events";

    const currentDate = new Date().toLocaleDateString('en-CA')
    const todayEvents = useMemo(() => {
        return events.filter(event => event.date === currentDate)
    },[currentDate,events])

    return (
        <Box className="smallGrid" gridColumn="span 3" gridRow="span 1" sx={boxStyle(colors)}>
            <StatBox
                title="Termine Heute"
                subtitle= {todayEvents.length +" "+ elementType}
                subtitleColor={colors.greenAccent[400]}
                link = "calendar"
                icon={<EventIcon sx={{ color: colors.greenAccent[400], fontSize: "30px" }} />}
                animationTime="300"
            />
        </Box>
    )
}

export default CountEventsToday;