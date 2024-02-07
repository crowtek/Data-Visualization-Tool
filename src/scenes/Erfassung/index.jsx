
import { useState } from 'react';
import { Box } from '@mui/material';
import { ErfassungLayout } from "../../styles/Erfassung";
import OverviewBox from "./components/OptionBox";

import NewLadeeinheit from '../../components/modal/NewLeModal';



const Erfassung = () => {
    const [newLeModal, showNewLeModal] = useState(false);

    const openModal = (name) => {
        if(name === "newLe" ){
            showNewLeModal(true)
        }
    }

    return (
        <Box sx={ErfassungLayout} > 
            <OverviewBox name={"Neue Ladeeinheit"} linkName={"/newLe"}  onClick={() => openModal("newLe")}/>
            <OverviewBox name={"Neuer Benutzer"} linkName={"/newUser"} onClick={() => openModal("newUser")}/>
            <OverviewBox name={"Neue Relation"} linkName={"/newRelation"} onClick={() => openModal("newRelation")}/>
            <OverviewBox name={"Ladeeinheit Planen"} linkName={"/"} onClick={() => openModal("")}/>

            <NewLadeeinheit open={newLeModal} onClose={() => showNewLeModal(false)} />
        </Box>
    )
}

export default Erfassung;