import { useMemo } from "react";
import StatBox from './StatBox';
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";

const CountDamageCar = ({vehicleData}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const filteredVehicles = useMemo(()=> {
        const vehicleEmpty = vehicleData.filter((vehicle => vehicle.status === "empty")).length;
        const vehicleFull = vehicleData.filter((vehicle => vehicle.status === "full")).length;
        const vehicleTeilbeladen = vehicleData.filter((vehicle => vehicle.status === "teilbeladen")).length;
        return {vehicleEmpty,vehicleFull,vehicleTeilbeladen}
    },[vehicleData])

    return (
        <div className="chartGrid">
            <StatBox
                title="Cargo Overview"
                values={
                    [
                        {
                            label: "Full Cargo",
                            value: filteredVehicles.vehicleFull,
                            color: colors.blueAccent[400]
                        },
                        {
                            label: "Empty Cargo",
                            value: filteredVehicles.vehicleEmpty,
                            color: colors.greenAccent[400]
                        },
                        {
                            label: "Part Cargo",
                            value: filteredVehicles.vehicleTeilbeladen,
                            color: colors.redAccent[400]
                        }
                    ]
                }
                animationTime={400}
            />
        </div>
    )
}

export default CountDamageCar;