import { useState } from 'react';
import { useTheme,Box,Button } from '@mui/material';
import { tokens } from "../../theme";
import DatasetOutlinedIcon from '@mui/icons-material/DatasetOutlined';
import TableModal from '../Modal/TableModal';

const ModalButton = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal((showModal) => !showModal)
    }

    return(
        <Box>
            <Button onClick={openModal}>
                <DatasetOutlinedIcon sx={{ color: colors.grey[500] }} />
                <TableModal open={showModal} onClose={() => openModal()} data={props}/>
            </Button>
        </Box>
    )
}
 export default ModalButton;