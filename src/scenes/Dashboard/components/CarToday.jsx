import StatBox from "../../../components/StatBox";
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import { useTheme,Box } from "@mui/material";
import { tokens } from "../../../theme";

const IncomingCarsCount = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box gridColumn="span 3" sx={{display:"flex", alignItems:"center", justifyContent:"center"}} backgroundColor={colors.primary[400]}>
            <StatBox
                title="Incoming Cars Today"
                subtitle= {"14 Cars"}
                link="vehicleOverview"
                icon={<DepartureBoardIcon sx={{ color: colors.primary[200], fontSize: "30px" }} />}
            />
        </Box>
    )
}

export default IncomingCarsCount;