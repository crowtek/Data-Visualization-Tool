import StatBox from "../../../components/StatBox";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useTheme,Box } from "@mui/material";
import { tokens } from "../../../theme";

const UserOnline = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box gridColumn="span 3" gridRow="span 1" backgroundColor={colors.primary[400]} borderRadius="5px" border="2px solid gray">
            <StatBox
                title="User Online"
                subtitle= {1 + " User"}
                subtitleColor={colors.greenAccent[400]}
                link = "calendar"
                icon={<PersonOutlineOutlinedIcon sx={{ color: colors.greenAccent[400], fontSize: "30px" }} />}
            />
        </Box>
    )
}

export default UserOnline;