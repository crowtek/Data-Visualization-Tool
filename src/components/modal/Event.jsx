import { Box, Modal  } from '@mui/material';
import { ModalStyle } from '../../styles/components/ModalStyle';
import EventForm from '../Forms/Event';

const EventModal = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={ModalStyle}>
                <EventForm />
            </Box>
        </Modal>
    )
}

export default EventModal;