import { useState } from 'react';

import { Box, Button } from '@mui/material';

import LadeeinheitInput from "../components/LadeeinheitInput";
import KennzeichenInput from "../components/KennzeichenInput";
import StandortInput from "../components/StandortInput";
import RelationInput from "../components/RelationFilter";
import TypeSelect from "../components/TypeSelect";
import CountrySelect from "../components/CountrySelect";
import CustomerNameInput from "../components/CustomerNameInput";
import InfoInput from "../components/InfoInput";

const NewLadeeinheit = () => {
    const [formData, setFormData] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault(); 
        // Process form data here or send it to a server
        console.log(formData.ladeeinheit); // For example, log formData to the console
    };

    const handleChange = (name) => (event) => {
        console.log(name);
        setFormData({
            ...formData,
            [name]: event.target.value,
        });

    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{display: "flex", gap: 2, flexDirection:"column"}}>
            <Box sx={{display: "flex", gap: 2}}>
                <Box>            
                    <LadeeinheitInput onChange={handleChange('ladeeinheit')} />
                    <KennzeichenInput onChange={handleChange('kennzeichen')} />
                    <StandortInput onChange={handleChange('standort')} />
                    <RelationInput onChange={handleChange('relation')} />
                </Box>
                <Box>                
                    <TypeSelect onChange={handleChange('type')} />
                    <CountrySelect onChange={handleChange('country')} />
                    <CustomerNameInput onChange={handleChange('customerName')} />
                    <InfoInput onChange={handleChange('info')} />
                </Box>
            </Box>

            <Button type="submit" variant="contained">Submit</Button>
        </Box>
    );
};

export default NewLadeeinheit;