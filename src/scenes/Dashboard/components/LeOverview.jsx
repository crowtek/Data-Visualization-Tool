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
        <Box gridColumn="span 3" sx={{display:"flex", alignItems:"center", justifyContent:"center"}} backgroundColor={colors.primary[400]}
        borderRadius="5px" border="2px solid gray">
            <StatBox
                title="Ladeeinheiten Übersicht"
                labels={{first:"Volle LE", second:"Leere LE", third:"Teilbeladen LE"}}
                chartValues={{first:20, second:30, third:40}}
            />
            
        </Box>
    )
}

export default CountDamageCar;