
import {Box, Modal} from '@mui/material';
import { ModalStyle } from '../../styles/components/ModalStyle';
import NewUserForm from '../Forms/User';

const UserModal = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={ModalStyle}>
                <NewUserForm />
            </Box>
        </Modal>
    )
}

export default UserModal;