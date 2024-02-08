
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { ModalStyle } from '../../styles/components/ModalStyle';
import NewZulauf from '../Forms/NewZulauf';

const ZulaufModal = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={ModalStyle}>
                <Typography variant="h2" component="h2">Ladeeinheit Planen</Typography>
                <NewZulauf />
            </Box>
        </Modal>
    )
}

export default ZulaufModal;