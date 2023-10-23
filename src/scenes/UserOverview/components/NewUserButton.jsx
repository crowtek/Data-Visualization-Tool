import Button from '@mui/material/Button';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import { useState } from 'react';

import NewUserModal from './newUserModal';

const NewUserButton = ({ userData }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [showModal, setShowModal] = useState(false);
    const handleOpen = () => setShowModal(true);

    const buttonStlye = {
        backgroundColor: colors.blueAccent[400],
        color: colors.primary[100],
        letterSpacing: 1,
        height: "50px",

    }

    return (
        <>
            <Button variant="outlined" onClick={handleOpen} 
                sx={{
                    backgroundColor: colors.blueAccent[700],
                    color: colors.grey[100],
                    fontSize: "16px",
                    letterSpacing: "0.7px",
                    fontWeight: "bold",
                    padding: "10px 20px",
                }}
            >
                Add User
                <PersonAddAltIcon width="20px" sx={{ marginLeft: "10px" }} />
            </Button>

            <NewUserModal setShowModal={setShowModal} showModal={showModal} userData={userData} />
        </>
    )
}

export default NewUserButton;