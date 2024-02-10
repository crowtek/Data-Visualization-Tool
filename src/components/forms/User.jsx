import { useState } from 'react';
import AnimatedCheckIcon from '../animations/CheckIcon';
import { Box, Button,Typography, Stack } from '@mui/material';

import NameInput from "../InputField/UserName"
import EmailInput from "../InputField/Email";
import PhoneNumberInput from "../InputField/PhoneNumber";
import CustomerNameInput from '../InputField/CustomerName';

const NewUserForm = () => {
    const [formData, setFormData] = useState({});
    const [isCheckIconVisible, setIsCheckIconVisible] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)

        setIsCheckIconVisible((isCheckIconVisible) => !isCheckIconVisible);
    }

    const handleChange = (name) => (event) => {
        setFormData({
            ...formData,
            [name]:event.target.value,
        });
    }

    return (
        <Box>
            { !isCheckIconVisible ? 
            (
                <Box component="form" onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                        <Typography variant="h2" component="h2">Neuen Benutzer anlegen</Typography>
                        <NameInput onChange={handleChange('name')}/>
                        <EmailInput onChange={handleChange('email')}/>
                        <PhoneNumberInput onChange={handleChange('phone')}/>
                        <CustomerNameInput onChange={handleChange('customer')}/>
                        <Button type="submit" variant="contained">Submit</Button>
                    </Stack>
                </Box>

            ) :
            (            
                <div className="CheckIconContainer">
                    <AnimatedCheckIcon isVisible={isCheckIconVisible} />
                    <Typography variant="h2" component="h2">Gespeichert</Typography>
                </div>
            )
            }  
        </Box>

    )
}
export default NewUserForm;