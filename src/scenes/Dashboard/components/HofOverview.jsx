import StatBox from "../../../components/StatBox";
import { useTheme, Box } from "@mui/material";
import { tokens } from "../../../theme";

const CarCount = ({ vehicleData,zulaufData }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box 
            gridColumn="span 3" 
            gridRow="span 2" 
            backgroundColor={colors.primary[400]}  
            borderRadius="5px" 
            border="2px solid gray"
            sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
            }} 
        >
            <StatBox
                title="Hof Übersicht"
                labels={{first:"LE auf Hof", second:"LE in Zulauf", third:"Hof verlassen"}}
                chartValues={{first:vehicleData.length, second:zulaufData.length, third:60}}
                animationTime={200}
            />
        </Box>
    )
}

export default CarCount;