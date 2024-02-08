import { useState } from 'react';
import { Box,Button,Stack  } from '@mui/material';

import NameInput from "../InputField/UserName"
import EmailInput from "../InputField/Email";
import PhoneNumberInput from "../InputField/PhoneNumber";
import CustomerNameInput from '../InputField/CustomerName';

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
        <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={3}>
                <NameInput onChange={handleChange('name')}/>
                <EmailInput onChange={handleChange('email')}/>
                <PhoneNumberInput onChange={handleChange('phone')}/>
                <CustomerNameInput onChange={handleChange('customer')}/>
                <Button type="submit" variant="contained">Submit</Button>
            </Stack>
        </Box>
    )
}
export default NewUserForm;