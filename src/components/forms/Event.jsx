import { useState } from 'react';

import { Box, Button, Typography, Stack } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

import AnimatedCheckIcon from '../animations/CheckIcon';
import EventInput from "../InputField/Event";
import ImportanceSelect from '../Selects/Importance';

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
                <Box component="form" onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                        <Typography variant="h2" component="h2">Add Event</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DateCalendar value={formData.date} onChange={handleDateChange}/> 
                        </LocalizationProvider>                
                        <ImportanceSelect onChange={handleChange('importance')}/>
                        <EventInput onChange={handleChange('event')} />
                        <Button type="submit" variant="contained">Submit</Button>
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

    );
};

export default EventForm;