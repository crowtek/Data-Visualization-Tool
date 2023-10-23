import { useMemo, useState } from 'react';
import { Box, Typography, Button, TextField, Modal } from "@mui/material";
import { ModalStyle as ModalStyleImport } from '../../../styles/ModalStyle';
import { saveNewUser } from '../utils/saveNewUser';

const NewUserModal = ({ showModal, setShowModal }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        age: "",
        email: "",
    })

    const handleClose = () => setShowModal(false);
    const handleSaveNewUser = () => saveNewUser(formData)

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const ModalStyle = useMemo(() => {
        return { ...ModalStyleImport }
    }, [])

    return (
        <>
            <Modal open={showModal} onClose={handleClose}>
                <Box sx={ModalStyle}>
                    <Typography variant="h3" component="h3">New User</Typography>
                    <form onSubmit={handleSaveNewUser}>
                        <TextField id='user-name' label="Name" value={formData.name} onChange={handleInput} />
                        <TextField id='user-phone' label="Phone" value={formData.phone} onChange={handleInput} />
                        <TextField id='user-email' label="Email" value={formData.email} onChange={handleInput} />
                        <TextField id='user-age' label="Age" value={formData.age} onChange={handleInput} />
                        <Button type='submit' variant="contained" sx={{ letterSpacing: 1 }} onClick={handleSaveNewUser}>Save</Button>
                    </form>
                </Box>
            </Modal>
        </>
    )
}

export default NewUserModal;