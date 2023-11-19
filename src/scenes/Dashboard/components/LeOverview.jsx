import { useMemo } from "react";
import StatBox from "../../../components/StatBox";
import { useTheme,Box } from "@mui/material";
import { tokens } from "../../../theme";

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
        <Box 
            gridColumn="span 3"
            gridRow="span 2"   
            backgroundColor={colors.primary[400]}
            borderRadius="5px"
            border="2px solid gray"
            sx={{display:"flex", alignItems:"center", justifyContent:"center"}}
        >
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