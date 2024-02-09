
import { Box, Modal  } from '@mui/material';
import { ModalStyle } from '../../styles/components/ModalStyle';
import CargoModal from '../Forms/Cargo';

const TableModal = ({ open, onClose, data }) => {
    return (
        <Modal open={open} onClose={onClose} onClick={(e) => e.stopPropagation()}>
            <Box sx={ModalStyle}>
                <CargoModal data={data} />
            </Box>
        </Modal>
    )
}

export default TableModal;