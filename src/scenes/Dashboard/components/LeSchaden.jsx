import StatBox from "../../../components/StatBox";
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import { useTheme,Box } from "@mui/material";
import { tokens } from "../../../theme";

const IncomingCarsCount = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box gridColumn="span 3" gridRow="span 1" backgroundColor={colors.primary[400]} borderRadius="5px" border="2px solid gray">
            <StatBox
                title="Ladeeinheiten mit Schaden"
                subtitle= {"14 Ladeeinheiten"}
                subtitleColor={colors.redAccent[400]}
                link="vehicleOverview"
                icon={<DepartureBoardIcon sx={{ color: colors.redAccent[300], fontSize: "30px" }} />}
            />
        </Box>
    )
}

export default IncomingCarsCount;