import StatBox from "../../../components/StatBox";
import { useTheme,Box } from "@mui/material";
import CarCrashIcon from '@mui/icons-material/CarCrash';
import { tokens } from "../../../theme";

const CountDamageCar = ({vehicleData}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const damagedCars = vehicleData.filter((car) => {
        return car.status === "fail";
    })
    const percentage = (damagedCars.length ? Math.round((damagedCars.length / vehicleData.length) * 100 ) : 0)
    const progress =  damagedCars.length / vehicleData.length;


    return (
        <Box gridColumn="span 3" gridRow="span 2" sx={{display:"flex", alignItems:"center", justifyContent:"center"}} backgroundColor={colors.primary[400]}>
            <StatBox
                title="Cars With Damage"
                subtitle={damagedCars.length + " Cars" }
                progress={progress}
                increase={percentage+"%"}
                icon={<CarCrashIcon sx={{ color: colors.redAccent[400], fontSize: "30px" }} />}
            />
            
        </Box>
    )
}

export default CountDamageCar;