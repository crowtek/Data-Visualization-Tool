
import { useState } from 'react';
import { Box } from '@mui/material';
import { ErfassungLayout } from "../../styles/Page/Erfassung";
import OverviewBox from "./components/OptionBox";

import CargoModal from '../../components/Modal/Cargo';
import UserModal from '../../components/Modal/User';
import RelationModal from '../../components/Modal/Relation';
import IntakeModal from '../../components/Modal/Intake';
import EventModal from '../../components/Modal/Event';
import "../../components/animations/animation.scss";

const Erfassung = () => {
    const [modals, setModals] = useState({
        showCargoModal: false,
        showUserModal: false,
        showRelationModal: false,
        showIntakeModal: false,
        showEventModal:false,
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
            <OverviewBox name="Add Cargo" icon="cargo" onClick={() => openModal('showCargoModal')} />
            <OverviewBox name="Add User" icon="user" onClick={() => openModal('showUserModal')} />
            <OverviewBox name="Add Relation" icon="relation" onClick={() => openModal('showRelationModal')} />
            <OverviewBox name="Plan Cargo" icon="/" onClick={() => openModal('showIntakeModal')} />
            <OverviewBox name="Add Event" icon="event" onClick={() => openModal('showEventModal')} />

            <CargoModal open={modals.showCargoModal} onClose={() => closeModal('showCargoModal')} />
            <UserModal open={modals.showUserModal} onClose={() => closeModal('showUserModal')} />
            <RelationModal open={modals.showRelationModal} onClose={() => closeModal('showRelationModal')} />
            <IntakeModal open={modals.showIntakeModal} onClose={() => closeModal('showIntakeModal')} />
            <EventModal open={modals.showEventModal} onClose={() => closeModal('showEventModal')} />
        </Box>
    )
}

export default Erfassung;