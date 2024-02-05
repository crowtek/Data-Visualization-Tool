
import { Box } from '@mui/material';
import { ErfassungLayout } from "../../styles/Erfassung";
import OverviewBox from "./components/OverviewBox";


const Erfassung = () => {
    return (
        <Box sx={ErfassungLayout}> 
            <OverviewBox name={"Neue Ladeeinheit"} linkName={"/newLe"}/>
            <OverviewBox name={"Neuer Benutzer"} linkName={"/newUser"}/>
            <OverviewBox name={"Neue Relation"} linkName={"/newRelation"}/>
            <OverviewBox name={"Ladeeinheit Planen"} linkName={"/"}/>
        </Box>
    )
}

export default Erfassung;