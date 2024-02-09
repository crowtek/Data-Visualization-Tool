
import * as React from 'react';
import { Box, Modal  } from '@mui/material';

import { ModalStyle } from '../../styles/components/ModalStyle';
import NewRelation from '../Forms/NewRelation';

const RelationModal = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={ModalStyle}>
                <NewRelation />
            </Box>
        </Modal>
    )
}

export default RelationModal;