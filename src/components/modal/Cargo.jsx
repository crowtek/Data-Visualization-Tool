
import { Box, Modal  } from '@mui/material';
import { ModalStyle } from '../../styles/components/ModalStyle';
import Cargo from '../Forms/Cargo';

const CargoModal = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={ModalStyle}>
                <Cargo />
            </Box>
        </Modal>
    )
}

export default CargoModal;