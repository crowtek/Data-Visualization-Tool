import { useState } from 'react';

import { Box, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

import LadeeinheitInput from "../InputField/Ladeeinheit";
import KennzeichenInput from "../InputField/Kennzeichen";
import StandortInput from "../InputField/Standort";
import RelationInput from "../InputField/Relation";
import TypeSelect from "../Selects/Type";
import CountrySelect from "../Selects/Countries";
import CustomerNameInput from "../InputField/CustomerName";
import InfoInput from "../InputField/Info";

const NewZulauf = () => {
    const [formData, setFormData] = useState({date:dayjs(),});

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(formData);
    };

    const handleDateChange = (newValue) => {
        setFormData({
            ...formData,
            date: newValue,
        });
    };

    const handleChange = (name) => (event) => {
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
                    <CustomerNameInput onChange={handleChange('customerName')} />
                    <InfoInput onChange={handleChange('info')} />
                </Box>
                <Box>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DateCalendar value={formData.date} onChange={handleDateChange}/> 
                    </LocalizationProvider>                
                    <TypeSelect onChange={handleChange('type')} />
                    <CountrySelect onChange={handleChange('country')} />

                </Box>
            </Box>

            <Button type="submit" variant="contained">Submit</Button>
        </Box>
    );
};

export default NewZulauf;