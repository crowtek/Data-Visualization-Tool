import StatBox from "../../../components/StatBox";
import { useTheme, Box } from "@mui/material";
import { tokens } from "../../../theme";
import { boxStyle } from "../../../styles/DashboardBoxStyle";

const CarCount = ({ vehicleData,zulaufData,historyData }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box gridColumn="span 3" gridRow="span 2" sx={boxStyle(colors)} >
            <StatBox
                title="Hof Übersicht"
                labels={{first:"LE auf Hof", second:"LE in Zulauf", third:"Hof verlassen"}}
                chartValues={{first:vehicleData.length, second:zulaufData.length, third:historyData.length}}
                animationTime={200}
            />
        </Box>
    )
}

export default CarCount;