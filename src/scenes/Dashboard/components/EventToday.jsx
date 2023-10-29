import StatBox from "../../../components/StatBox";
import EventIcon from '@mui/icons-material/Event';
import { useTheme,Box } from "@mui/material";
import { tokens } from "../../../theme";
import { mockEvents } from "../../../data/mockData"
import { useMemo } from "react";

const CountEventsToday = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const currentDate = new Date().toLocaleDateString('en-CA')
    const todayEvents = useMemo(() => {
        return mockEvents.filter(event => event.date === currentDate)
    },[currentDate])

    return (
        <Box gridColumn="span 3" gridRow="span 1" backgroundColor={colors.primary[400]} borderRadius="5px" border="2px solid gray">
            <StatBox
                title="Termine Heute"
                subtitle= {todayEvents.length + " Events"}
                subtitleColor={colors.greenAccent[400]}
                link = "calendar"
                icon={<EventIcon sx={{ color: colors.greenAccent[400], fontSize: "30px" }} />}
            />
        </Box>
    )
}

export default CountEventsToday;