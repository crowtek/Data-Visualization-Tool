import { useState } from "react";
import { Button, Box } from '@mui/material';

import TypeSelect from "./components/TypeSelecte";
import NameInput from "./components/NameInput";
import EmailInput from "./components/EmailInput";

const Erfassung = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
    })

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <Box sx={{display:"flex", justifyContent:"center"}}> 
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width:"30vw" }}>
                <TypeSelect name={formData.username} handleChange={handleChange}/>
                <NameInput name={formData.username} handleChange={handleChange}/>
                <EmailInput email={formData.email} handleChange={handleChange}/>

                <Button type="submit" fullWidth variant="contained"sx={{ mt: 3, mb: 2 }}>
                    Submit
                </Button>
            </Box>
        </Box>
    )
}

export default Erfassung;