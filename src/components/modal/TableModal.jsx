
import { Box, Modal  } from '@mui/material';
import { ModalStyle } from '../../styles/components/ModalStyle';
import CargoModal from '../Forms/Cargo';
import Intake from '../Forms/Intake';
import User from '../Forms/User';

const TableModal = ({ open, onClose, data }) => {
    return (
        <Modal open={open} onClose={onClose} onClick={(e) => e.stopPropagation()}>
            <Box sx={ModalStyle}>
                {data.table === "Leitstand" ?
                    <CargoModal data={data} />
                : data.table === "Intake" ?
                    <Intake data={data} />
                : data.table === "User" ?
                    <User data={data} /> :
                ""
                }
                
                
            </Box>
        </Modal>
    )
}

export default TableModal;