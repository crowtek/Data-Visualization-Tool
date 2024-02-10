import { useState } from 'react';

import { Box, Button, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

import AnimatedCheckIcon from '../animations/CheckIcon';
import EventInput from "../InputField/Event";

const EventForm = () => {
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
                    <Typography variant="h2" component="h2">Add Event</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DateCalendar value={formData.date} onChange={handleDateChange}/> 
                    </LocalizationProvider>                
                    <EventInput onChange={handleChange('event')} />

                    <Button type="submit" variant="contained">Submit</Button>
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

    );
};

export default EventForm;