
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { ModalStyle } from '../../styles/components/ModalStyle';
import NewRelation from '../Forms/NewRelation';

const RelationModal = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={ModalStyle}>
                <Typography variant="h2" component="h2">Neue Relation erstellen</Typography>
                <NewRelation />
            </Box>
        </Modal>
    )
}

export default RelationModal;