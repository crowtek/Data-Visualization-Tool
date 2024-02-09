
import { Box, Modal  } from '@mui/material';
import { ModalStyle } from '../../styles/components/ModalStyle';
import NewLadeeinheit from '../Forms/NewLadeeinheit';

const TableModal = ({ open, onClose, data }) => {
    return (
        <Modal open={open} onClose={onClose} onClick={(e) => e.stopPropagation()}>
            <Box sx={ModalStyle}>
                <NewLadeeinheit />
            </Box>
        </Modal>
    )
}

export default TableModal;