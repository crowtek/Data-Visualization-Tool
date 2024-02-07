
import { Box, Typography, Modal } from "@mui/material";
import SettingEntry from './SettingEntry';
import {ModalStyle} from "../../../styles/components/ModalStyle";

const SettingsModal = ({ showModal, setShowModal }) => {
    const handleClose = () => setShowModal(false);

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