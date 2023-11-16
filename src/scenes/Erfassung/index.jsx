import { useState } from "react";
import { Box } from '@mui/material';

import FormTypeSelect from "./components/FormTypeSelect";
import SubmitButton from "./components/SumbmitButton";
import NewUserForm from "./forms/NewUserForm";
import NewLadeeinheit from "./forms/NewLadeeinheit";



const Erfassung = () => {
    const [formData, setFormData] = useState({
        formType: "Ladeeinheit Planen",
        username: "",
        email: "",
        phoneNumber: "",
        ladeeinheit: "",
        kennzeichen: "",
        standort:"",
        relation:"",
        type:"Trailer",
        land:"Germany",
        kunde:"",
        info:"",
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
                <FormTypeSelect formType={formData.formType} handleChange={handleChange}/>
                {  
                    formData.formType === "Neuer Benutzer" ? (<NewUserForm handleChange={handleChange} formData={formData}/>) : 
                    formData.formType === "Ladeeinheit Planen" ? (<NewLadeeinheit handleChange={handleChange} formData={formData}/>) : (<></>)
                }
                <SubmitButton />
            </Box>
        </Box>
    )
}

export default Erfassung;