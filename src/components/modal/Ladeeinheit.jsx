
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { ModalStyle } from '../../styles/components/ModalStyle';
import NewLadeeinheit from '../Forms/NewLadeeinheit';

const NewLeModal = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={ModalStyle}>
                <Typography variant="h2" component="h2">Neue Ladeeinheit erstellen</Typography>
                <NewLadeeinheit />
            </Box>
        </Modal>
    )
}

export default NewLeModal;