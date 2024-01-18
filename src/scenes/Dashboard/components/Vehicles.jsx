import { useMemo } from "react";
import StatBox from "../../../components/StatBox";
import { useTheme,Box } from "@mui/material";
import { tokens } from "../../../theme";
import { boxStyle } from "../../../styles/Dashboard";

const CountDamageCar = ({vehicleData}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    const filteredVehicles = useMemo(()=> {
        const vehicleEmpty = vehicleData.filter((vehicle => vehicle.status === "empty"));
        const vehicleFull = vehicleData.filter((vehicle => vehicle.status === "full"));
        const vehicleTeilbeladen = vehicleData.filter((vehicle => vehicle.status === "teilbeladen"));
        return {vehicleEmpty,vehicleFull,vehicleTeilbeladen}
    },[vehicleData])

    return (
        <Box gridColumn="span 3" gridRow="span 2" sx={boxStyle(colors)}>
            <StatBox
                title="Ladeeinheiten Übersicht"
                labels={{first:"Volle LE", second:"Leere LE", third:"Teilbeladen LE"}}
                chartValues={{
                    first: filteredVehicles.vehicleFull.length, 
                    second: filteredVehicles.vehicleEmpty.length, 
                    third: filteredVehicles.vehicleTeilbeladen.length
                }}
                animationTime={400}
            />
        </Box>
    )
}

export default CountDamageCar;