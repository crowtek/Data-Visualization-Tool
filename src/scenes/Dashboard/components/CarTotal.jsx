import StatBox from "../../../components/StatBox";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { useTheme, Box } from "@mui/material";
import { tokens } from "../../../theme";
import { useMemo } from "react";

const CarCount = ({ vehicleData }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const Cars = vehicleData.filter((car) => {
        return car.status !== "fail";
    })

    const percentage = useMemo(() => {
        return Cars.length ? Math.round((Cars.length / vehicleData.length) * 100) : 0;
    }, [Cars, vehicleData]);

    const progress = useMemo(() => {
        return Cars.length / vehicleData.length
    }, [Cars, vehicleData]);

    return (
        <Box gridColumn="span 3" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} backgroundColor={colors.primary[400]}>
            <StatBox
                subtitle={Cars.length + " Cars"}
                progress={progress}
                increase={percentage + " %"}
                icon={<DirectionsCarIcon sx={{ color: colors.blueAccent[500], fontSize: "30px" }} />}
            />
        </Box>
    )
}

export default CarCount;