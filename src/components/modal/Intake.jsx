
import { Box, Modal  } from '@mui/material';
import { ModalStyle } from '../../styles/components/ModalStyle';
import IntakeForm from '../Forms/Intake';

const IntakeModal = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={ModalStyle}>
                <IntakeForm />
            </Box>
        </Modal>
    )
}

export default IntakeModal;