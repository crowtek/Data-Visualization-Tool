import StatBox from "../../../components/StatBox";
import { useTheme,Box } from "@mui/material";
import CarCrashIcon from '@mui/icons-material/CarCrash';
import { tokens } from "../../../theme";

const CountDamageCar = ({vehicleData}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return (
        <Box gridColumn="span 3"gridRow="span 2"  sx={{display:"flex", alignItems:"center", justifyContent:"center"}} backgroundColor={colors.primary[400]}
        borderRadius="5px" border="2px solid gray">
            <StatBox
                title="Ladeeinheiten Übersicht"
                labels={{first:"Volle LE", second:"Leere LE", third:"Teilbeladen LE"}}
                chartValues={{first:20, second:30, third:40}}
                animationTime={400}
            />
            
        </Box>
    )
}

export default CountDamageCar;