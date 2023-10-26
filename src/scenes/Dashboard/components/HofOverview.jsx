import StatBox from "../../../components/StatBox";
import { useTheme, Box } from "@mui/material";
import { tokens } from "../../../theme";

const CarCount = ({ vehicleData }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box gridColumn="span 3" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} backgroundColor={colors.primary[400]} 
        borderRadius="5px" border="2px solid gray">
            <StatBox
                title="Hof Übersicht"
                labels={{first:"LE auf Hof", second:"LE in Zulauf", third:"Hof verlassen"}}
                chartValues={{first:120, second:10, third:60}}
                animationTime={200}
            />
        </Box>
    )
}

export default CarCount;