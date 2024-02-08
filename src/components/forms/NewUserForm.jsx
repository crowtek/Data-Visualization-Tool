import { useState } from 'react';
import { Box,Avatar,Button  } from '@mui/material';

import NameInput from "../InputField/UserName"
import EmailInput from "../InputField/Email";
import PhoneNumberInput from "../InputField/PhoneNumber";

const NewUserForm = () => {
    const [formData, setFormData] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
    }

    const handleChange = (name) => (event) => {
        setFormData({
            ...formData,
            [name]:event.target.value,
        });
    }

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{display: "flex", gap: 2, flexDirection:"column"}}>
            <Box maxWidth="lg" sx={{display:"flex"}}>
                <Box>
                    <NameInput onChange={handleChange('name')}/>
                    <EmailInput onChange={handleChange('email')}/>
                    <PhoneNumberInput onChange={handleChange('phone')}/>
                </Box>
                <Box>
                    <Avatar
                        alt="Image"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 124, height: 124, margin:"70px"}}
                    />
                </Box>
            </Box>
            
            <Button type="submit" variant="contained">Submit</Button>
        </Box>
    )
}
export default NewUserForm;