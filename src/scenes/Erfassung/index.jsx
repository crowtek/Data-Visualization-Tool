import { useState } from "react";
import { Box } from '@mui/material';

import TypeSelect from "./components/TypeSelecte";
import SubmitButton from "./components/SumbmitButton";
import NewUserForm from "./NewUserForm";

import LadeeinheitInput from "./components/LadeeinheitInput";
import KennzeichenInput from "./components/KennzeichenInput";
import StandortInput from "./components/StandortInput";
import RelationInput from "./components/RelationFilter";

const Erfassung = () => {
    const [formData, setFormData] = useState({
        type: "Ladeeinheit Planen",
        username: "",
        email: "",
        phoneNumber: "",
        ladeeinheit: "",
        kennzeichen: "",
        standort:"",
        relation:"",
        typ:"",
        land:"",
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
                <TypeSelect name={formData.type} handleChange={handleChange}/>
                {  
                    formData.type === "Neuer Benutzer" ? (<NewUserForm handleChange={handleChange} formData={formData}/>) : 
                    formData.type === "Ladeeinheit Planen" ? 
                    (<>
                        <LadeeinheitInput handleChange={handleChange} ladeeinheit={formData.ladeeinheit} />
                        <KennzeichenInput handleChange={handleChange} kennzeichen={formData.kennzeichen} />
                        <StandortInput handleChange={handleChange} standort={formData.standort} />
                        <RelationInput handleChange={handleChange} relation={formData.relation} />
                    </>) :
                    (<></>)
                }

                <SubmitButton />
            </Box>
        </Box>
    )
}

export default Erfassung;