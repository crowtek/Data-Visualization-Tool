import { useState } from "react";
import { Box } from '@mui/material';

import TypeSelect from "./components/TypeSelecte";
import NameInput from "./components/NameInput";
import EmailInput from "./components/EmailInput";
import PhoneNumberInput from "./components/PhoneNumberInput";
import SubmitButton from "./components/SumbmitButton";

const Erfassung = () => {
    const [formData, setFormData] = useState({
        type: "Ladeeinheit Planen",
        username: "",
        email: "",
        phoneNumber: "",
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
                <TypeSelect name={formData.type} handleChange={handleChange}/>
                {  
                    formData.type === "Neuer Benutzer" ? (
                        <>
                            <NameInput name={formData.username} handleChange={handleChange}/>
                            <EmailInput email={formData.email} handleChange={handleChange}/>
                            <PhoneNumberInput phoneNumber={formData.phoneNumber} handleChange={handleChange}/>
                        </>
                        ) : formData.type === "Ladeeinheit Planen" ? (
                            <></>
                        ) :
                        (<></>)
                }

                <SubmitButton />
            </Box>
        </Box>
    )
}

export default Erfassung;