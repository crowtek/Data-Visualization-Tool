import StatBox from "../../../components/StatBox";
import { useTheme,Box } from "@mui/material";
import { tokens } from "../../../theme";

const CountDamageCar = ({vehicleData}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    const vehicleEmpty = vehicleData.filter((vehicle => vehicle.status === "empty"));
    const vehicleFull = vehicleData.filter((vehicle => vehicle.status === "full"));
    const vehicleTeilbeladen = vehicleData.filter((vehicle => vehicle.status === "teilbeladen"));

    return (
        <Box gridColumn="span 3"gridRow="span 2"  sx={{display:"flex", alignItems:"center", justifyContent:"center"}} backgroundColor={colors.primary[400]}
        borderRadius="5px" border="2px solid gray">
            <StatBox
                title="Ladeeinheiten Übersicht"
                labels={{first:"Volle LE", second:"Leere LE", third:"Teilbeladen LE"}}
                chartValues={{first:vehicleFull.length, second:vehicleEmpty.length, third:vehicleTeilbeladen.length}}
                animationTime={400}
            />
            
        </Box>
    )
}

export default CountDamageCar;