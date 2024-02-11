import { useState } from 'react';
import AnimatedCheckIcon from '../animations/CheckIcon';
import { Box, Button,Typography, Stack } from '@mui/material';

import NameInput from "../InputField/UserName"
import EmailInput from "../InputField/Email";
import PhoneNumberInput from "../InputField/PhoneNumber";
import CustomerNameInput from '../InputField/CustomerName';

const NewUserForm = ({data}) => {
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
                        <Typography variant="h2" component="h2">Add new User</Typography>
                        <NameInput onChange={handleChange('name')} value={formData?.name ? formData.name : data?.name}/>
                        <EmailInput onChange={handleChange('email')} value={formData?.email ? formData.email : data?.email}/>
                        <PhoneNumberInput onChange={handleChange('phone')} value={formData?.phone ? formData.phone : data?.phone}/>
                        <CustomerNameInput onChange={handleChange('customer')} value={formData?.customer ? formData.customer : data?.customer}/>

                        <Box sx={{display:"flex", justifyContent:data ? "space-between" : "flex-end"}}>
                            {data ? <Button variant="contained" color="error">Delete</Button> : ""}
                            <Button type="submit" variant="contained" color="success">Submit</Button>
                        </Box>
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