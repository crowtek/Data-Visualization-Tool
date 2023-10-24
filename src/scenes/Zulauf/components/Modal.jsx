import { useMemo,useState } from 'react';
import { Box,Typography,Button,TextField,Modal,useTheme } from "@mui/material";
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { tokens } from "../../../theme";
import {ModalStyle as ModalStyleImport}from "../../../styles/ModalStyle";

const VehicalTrModal = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const ModalStyle = useMemo(() => {
      return {...ModalStyleImport}
    },[])

    return (
        <div>
          <Button onClick={handleOpen}><ClearAllIcon sx={{color: colors.grey[500]}}/></Button>
          
          <Modal open={open} onClose={handleClose}>
            <Box sx={ModalStyle}>
                <Typography id="modal-modal-title" variant="h3" component="h3">Vehical {props.name}</Typography>
                <TextField label="License plate" defaultValue={props.name} />
                <TextField label="Info" defaultValue={props.Info} />
                <TextField label="Status" defaultValue={props.status} />
                <TextField label="Registrar ID" defaultValue={props.registrarId} />

                <Box sx={{display: "flex", justifyContent:"space-between"}}>
                    <Button variant="contained" sx={{letterSpacing:1}}>Save</Button>
                    <Button variant="outlined" color="error" sx={{letterSpacing:1}}>Delete</Button>
                </Box>
            </Box>
          </Modal>
        </div>
    );
}

export default VehicalTrModal;
