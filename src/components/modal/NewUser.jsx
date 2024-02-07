
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { ModalStyle } from '../../styles/components/ModalStyle';
import NewUserForm from '../Forms/NewUserForm';

const NewUser = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={ModalStyle}>
                <Typography variant="h2" component="h2">Neuen Benutzer anlegen</Typography>
                <NewUserForm />
            </Box>
        </Modal>
    )
}

export default NewUser;