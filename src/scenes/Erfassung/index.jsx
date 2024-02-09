
import { useState } from 'react';
import { Box } from '@mui/material';
import { ErfassungLayout } from "../../styles/Page/Erfassung";
import OverviewBox from "./components/OptionBox";

import NewLadeeinheit from '../../components/Modal/Ladeeinheit';
import NewUser from '../../components/Modal/NewUser';
import RelationModal from '../../components/Modal/Relation';
import ZulaufModal from '../../components/Modal/Zulauf';
import "../../components/animations/animation.css";

const Erfassung = () => {
    const [modals, setModals] = useState({
        newLeModal: false,
        newUserModal: false,
        newRelationModal: false,
        newZulaufModal: false,
        
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
            <OverviewBox name="Neue Relation" linkName="/newRelation" onClick={() => openModal('newRelationModal')} />
            <OverviewBox name="Ladeeinheit Planen" linkName="/" onClick={() => openModal('newZulaufModal')} />

            <NewLadeeinheit open={modals.newLeModal} onClose={() => closeModal('newLeModal')} />
            <NewUser open={modals.newUserModal} onClose={() => closeModal('newUserModal')} />
            <RelationModal open={modals.newRelationModal} onClose={() => closeModal('newRelationModal')} />
            <ZulaufModal open={modals.newZulaufModal} onClose={() => closeModal('newZulaufModal')} />
        </Box>
    )
}

export default Erfassung;