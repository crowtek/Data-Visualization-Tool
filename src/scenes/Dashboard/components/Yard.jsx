import StatBox from './StatBox';
import { Box } from "@mui/material";

const CarCount = ({ vehicleData,zulaufData,historyData }) => {

    return (
        <Box gridColumn="span 3" gridRow="span 2" >
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