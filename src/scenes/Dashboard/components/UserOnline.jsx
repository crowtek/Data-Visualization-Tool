import { useMemo } from "react";
import StatBox from './StatBox';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useTheme,Box,useMediaQuery } from "@mui/material";
import { tokens } from "../../../theme";
import { boxStyle } from "../../../styles/Page/Dashboard";

const UserOnline = ({userData}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const elementType = mobileScreen ? "" : "User Online";


    const onlineUser = useMemo(() => {
        return userData?.filter((user)=> user.status === "online");
    },[userData])

    return (
        <Box className="smallGrid" gridColumn="span 3" gridRow="span 1" sx={boxStyle(colors)}>
            <StatBox
                title="User Online"
                subtitle= {`${onlineUser.length} ${elementType}`}
                subtitleColor={colors.greenAccent[400]}
                link = "calendar"
                icon={<PersonOutlineOutlinedIcon sx={{ color: colors.greenAccent[400], fontSize: "30px" }} />}
            />
        </Box>
    )
}

export default UserOnline;