
import { Box, Modal  } from '@mui/material';
import { ModalStyle } from '../../styles/components/ModalStyle';
import NewZulauf from '../Forms/NewZulauf';

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