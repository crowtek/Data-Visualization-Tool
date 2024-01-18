import { useMemo } from "react";
import StatBox from "../../../components/StatBox";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useTheme,Box } from "@mui/material";
import { tokens } from "../../../theme";
import { boxStyle } from "../../../styles/Dashboard";

const UserOnline = ({userData}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const onlineUser = useMemo(() => {
        return userData?.filter((user)=> user.status === "online");
    },[userData])

    return (
        <Box gridColumn="span 3" gridRow="span 1" sx={boxStyle(colors)}>
            <StatBox
                title="User Online"
                subtitle= {`${onlineUser.length} User`}
                subtitleColor={colors.greenAccent[400]}
                link = "calendar"
                icon={<PersonOutlineOutlinedIcon sx={{ color: colors.greenAccent[400], fontSize: "30px" }} />}
            />
        </Box>
    )
}

export default UserOnline;