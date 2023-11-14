import { useState } from "react";
import { Box } from '@mui/material';

import FormTypeSelect from "./components/FormTypeSelect";
import SubmitButton from "./components/SumbmitButton";
import NewUserForm from "./NewUserForm";

import LadeeinheitInput from "./components/LadeeinheitInput";
import KennzeichenInput from "./components/KennzeichenInput";
import StandortInput from "./components/StandortInput";
import RelationInput from "./components/RelationFilter";
import TypeSelect from "./components/TypeSelect";
import CountrySelect from "./components/CountrySelect";
import CustomerNameInput from "./components/CustomerNameInput";
import InfoInput from "./components/InfoInput";

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
                    formData.formType === "Ladeeinheit Planen" ? 
                    (<>
                        <LadeeinheitInput handleChange={handleChange} ladeeinheit={formData.ladeeinheit} />
                        <KennzeichenInput handleChange={handleChange} kennzeichen={formData.kennzeichen} />
                        <StandortInput handleChange={handleChange} standort={formData.standort} />
                        <RelationInput handleChange={handleChange} relation={formData.relation} />
                        <TypeSelect handleChange={handleChange} type={formData.type} />
                        <CountrySelect handleChange={handleChange} land={formData.land} />
                        <CustomerNameInput handleChange={handleChange} kunde={formData.kunde} />
                        <InfoInput handleChange={handleChange} info={formData.info}  />
                    </>) :
                    (<></>)
                }

                <SubmitButton />
            </Box>
        </Box>
    )
}

export default Erfassung;