
import { Box, Modal  } from '@mui/material';
import { ModalStyle } from '../../styles/components/ModalStyle';
import NewZulauf from '../Forms/Intake';

const ZulaufModal = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={ModalStyle}>
                <NewZulauf />
            </Box>
        </Modal>
    )
}

export default ZulaufModal;