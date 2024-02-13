import { useState } from 'react';

import { Box, Button, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

import AnimatedTruck from '../animations/Truck';
import CargoInput from "../InputField/Cargo";
import KennzeichenInput from "../InputField/Kennzeichen";
import ParkPlace from "../InputField/ParkPlace";
import RelationInput from "../InputField/Relation";
import TypeSelect from "../Selects/Type";
import CountrySelect from "../Selects/Countries";
import CustomerNameInput from "../InputField/CustomerName";
import InfoInput from "../InputField/Info";

const IntakeForm = () => {
    const [formData, setFormData] = useState({date:dayjs()});
    const [isCheckIconVisible, setIsCheckIconVisible] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(formData);

        setIsCheckIconVisible((isCheckIconVisible) => !isCheckIconVisible);
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
        <Box>
            { !isCheckIconVisible ? 
            (
                <Box component="form" onSubmit={handleSubmit} sx={{display: "flex", gap: 2, flexDirection:"column"}}>
                    <Typography variant="h2" component="h2">Ladeeinheit Planen</Typography>
                    <Box className="modalContainer">
                        <Box>            
                            <CargoInput onChange={handleChange('ladeeinheit')} />
                            <KennzeichenInput onChange={handleChange('kennzeichen')} />
                            <ParkPlace onChange={handleChange('parkPlace')} />
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
            
            ) :
            (            
                <div className="CheckIconContainer">
                    <AnimatedTruck isVisible={isCheckIconVisible} />
                </div>
            )
            }   
        </Box>

    );
};

export default IntakeForm;