import StatBox from './StatBox';
import { Box,useTheme } from "@mui/material";
import { tokens } from "../../../theme";

const CarCount = ({ vehicleData,zulaufData,historyData }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box gridColumn="span 3" gridRow="span 2" >
            <StatBox
                title="Yard Overview"
                values={
                    [
                        {
                            label:"Cargo",
                            value:vehicleData.length,
                            color:colors.blueAccent[400]
                        },
                        {
                            label:"Incoming Cargo",
                            value:zulaufData.length,
                            color:colors.greenAccent[400]
                        },
                        {
                            label:"Left Cargo",
                            value:historyData.length,
                            color:colors.redAccent[400]
                        }
                    ]
                }
                animationTime={200}
            />
        </Box>
    )
}

export default CarCount;