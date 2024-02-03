import StatBox from "../../../components/StatBox";
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import { useTheme,Box,useMediaQuery } from "@mui/material";
import { tokens } from "../../../theme";
import { boxStyle } from "../../../styles/Dashboard";

const PlaceOverview = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const elementType = mobileScreen ? "" : "Freie Tore";

    return (
        <Box className="smallGrid" gridColumn="span 3" gridRow="span 1" sx={boxStyle(colors)}>
            <StatBox
                title="Freie Tore"
                subtitle= {"17/100" +" "+ elementType}
                subtitleColor={colors.grey[200]}
                link = "calendar"
                icon={<BeenhereOutlinedIcon sx={{ color: colors.blueAccent[400], fontSize: "30px" }} />}
            />
        </Box>
    )
}

export default PlaceOverview;