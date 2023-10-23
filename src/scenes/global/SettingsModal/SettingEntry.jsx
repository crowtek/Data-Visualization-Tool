import { Box, Typography, Switch } from "@mui/material"

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const boxStyle = {
    display: 'flex',
    alignItems:"center",
    justifyContent:"space-between",
    padding: 2,
    gap: "5vw",
    border:"solid 1px gray",
    borderRadius: "5px",
};

const SettingEntry = ({title, text}) => {
    return (
        <Box sx={boxStyle}>
            <Box sx={{display:"flex", flexDirection:"column",}}>
                <Typography variant="h4">{title}</Typography>
                <Typography variant="h5">{text}</Typography>
            </Box>
            <Switch {...label} defaultChecked color="secondary"/>
        </Box>
    )
}
export default SettingEntry;