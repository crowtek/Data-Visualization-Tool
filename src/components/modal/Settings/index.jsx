
import { Box, Typography, Modal } from "@mui/material";
import SettingEntry from './SettingEntry';

const SettingsModal = ({ showModal, setShowModal }) => {
    const handleClose = () => setShowModal(false);

    const ModalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        display:"flex",
        flexDirection:"column",
        gap: 2
    };

    return (
        <>
            <Modal open={showModal} onClose={handleClose}>
                <Box sx={ModalStyle}>
                    <Typography variant="h3" component="h3">Settings</Typography>
                    <SettingEntry title={"User List"} text={"Should the user list be displayed for Manager"} setting={"userlist"}/>
                    <SettingEntry title={"Guide"} text={"Show Guide or hide it"} setting={"guide"}/>
                    <SettingEntry title={"Vehicle Intake"} text={"Show Vehicle Intake or hide it"} setting={"vehicleintake"}/>
                    <SettingEntry title={"Dashboard"} text={"Show Dashboard or hide it"} setting={"dashboard"}/>
                </Box>
            </Modal>
        </>
    )
}

export default SettingsModal;