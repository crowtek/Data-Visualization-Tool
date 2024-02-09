
import { Box, Modal  } from '@mui/material';
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