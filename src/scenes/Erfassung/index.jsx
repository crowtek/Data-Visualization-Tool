
import { useState } from 'react';
import { Box } from '@mui/material';
import { ErfassungLayout } from "../../styles/Page/Erfassung";
import OverviewBox from "./components/OptionBox";

import NewLadeeinheit from '../../components/Modal/NewLadeeinheit';
import NewUser from '../../components/Modal/NewUser';

const Erfassung = () => {
    const [modals, setModals] = useState({
        newLeModal: false,
        newUserModal: false,
    });

    const openModal = (modalKey) => {
        setModals((prevModals) => ({
            ...prevModals,
            [modalKey]: true,
        })); 
    }

    const closeModal = (modalKey) => {
        setModals((prevModals) => ({
            ...prevModals,
            [modalKey]: false,
        }));
    };

    return (
        <Box sx={ErfassungLayout}>
            <OverviewBox name="Neue Ladeeinheit" linkName="/newLe" onClick={() => openModal('newLeModal')} />
            <OverviewBox name="Neuer Benutzer" linkName="/newUser" onClick={() => openModal('newUserModal')} />
            <OverviewBox name="Neue Relation" linkName="/newRelation" onClick={() => {/* Handle new relation modal */}} />
            <OverviewBox name="Ladeeinheit Planen" linkName="/" onClick={() => {/* Handle planning modal */}} />

            <NewLadeeinheit open={modals.newLeModal} onClose={() => closeModal('newLeModal')} />
            <NewUser open={modals.newUserModal} onClose={() => closeModal('newUserModal')} />
        </Box>
    )
}

export default Erfassung;