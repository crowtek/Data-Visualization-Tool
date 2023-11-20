import StatBox from "../../../components/StatBox";
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import { useTheme,Box } from "@mui/material";
import { tokens } from "../../../theme";
import { boxStyle } from "../../../styles/DashboardBoxStyle";

const IncomingCarsCount = ({vehicleData}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const damagedVehicles = vehicleData.filter((vehicle) => vehicle.damage)

    return (
        <Box gridColumn="span 3" gridRow="span 1" sx={boxStyle(colors)}>
            <StatBox
                title="Ladeeinheiten mit Schaden"
                subtitle= {damagedVehicles.length + " Ladeeinheiten"}
                subtitleColor={colors.redAccent[400]}
                link="vehicleOverview"
                icon={<DepartureBoardIcon sx={{ color: colors.redAccent[300], fontSize: "30px" }} />}
                animationTime="100"
            />
        </Box>
    )
}

export default IncomingCarsCount;