import StatBox from "../../../components/StatBox";
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import { useTheme,Box } from "@mui/material";
import { tokens } from "../../../theme";
import { boxStyle } from "../../../styles/DashboardBoxStyle";

const PlaceOverview = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box gridColumn="span 3" gridRow="span 1" sx={boxStyle(colors)}>
            <StatBox
                title="Freie Tore"
                subtitle= {"17/100 Tore"}
                subtitleColor={colors.grey[200]}
                link = "calendar"
                icon={<BeenhereOutlinedIcon sx={{ color: colors.blueAccent[400], fontSize: "30px" }} />}
            />
        </Box>
    )
}

export default PlaceOverview;