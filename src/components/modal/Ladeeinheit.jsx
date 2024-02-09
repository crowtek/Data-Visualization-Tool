
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
                <NewLadeeinheit />
            </Box>
        </Modal>
    )
}

export default NewLeModal;