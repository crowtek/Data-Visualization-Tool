import { useState } from 'react';

import { Box, Button, Typography, Stack } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import AnimatedCheckIcon from '../animations/CheckIcon';
import EventInput from "../InputField/Event";
import ImportanceSelect from '../Selects/Importance';
import BasicTimePicker from '../Selects/Time';
import DeleteEventButton from '../Button/DeleteEvent';

const EventForm = ({eventData}) => {
    dayjs.extend(customParseFormat);
    const parsedDate = dayjs(eventData?.day, "DD.MM.YYYY");
    const [formData, setFormData] = useState({date:parsedDate? parsedDate :dayjs()});
    const [isCheckIconVisible, setIsCheckIconVisible] = useState(false);
    
    const handleSubmit = (event) => {
        event.preventDefault(); 
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
                        <ImportanceSelect onChange={handleChange('importance')} value={formData.importance ? formData.importance : eventData?.importance}/>
                        <EventInput onChange={handleChange('event')} value={formData.event ? formData.event : eventData?.name}/>
                        <BasicTimePicker onChange={handleChange('time')} value={formData.time ? formData.time : eventData?.time} />

                        <Box sx={{display:"flex", justifyContent:eventData ? "space-between" : "flex-end"}}>
                            {eventData ? <DeleteEventButton element={eventData.key}/> : ""}
                            <Button type="submit" variant="outlined" color="success">Submit</Button>
                        </Box>
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