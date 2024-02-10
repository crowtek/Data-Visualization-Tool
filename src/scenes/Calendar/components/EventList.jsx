
import { useState, useCallback, useMemo } from "react";
import { Box,List,ListItem,ListItemText,Typography,useTheme,ListItemButton} from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { tokens } from "../../../theme";
import { mockEvents } from "../../../data/mockData"

import EventModal from "../../../components/Modal/Event";
import { EventListStyle } from "../../../styles/Page/Calendar";

const EventList = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [showModal, setShowModal] = useState(false); // State to control Modal visibility
    const [selectedEvent, setSelectedEvent] = useState(null); // State to store the selected event data

    // Filter Events
    const currentDate = new Date().toLocaleDateString('en-CA')
    const todayEvents = useMemo(() => {
        return mockEvents.filter(event => event.date === currentDate)
    },[currentDate])
    const [events, setEvents] = useState(todayEvents);
    
    // Delete Events
    const handleEventDelete = useCallback((event) => {
        event.stopPropagation();
        const clickedEventId = event.currentTarget.parentNode.id;
        setEvents(events.filter(event => event.key !== clickedEventId))
    },[events]);

    const handleEventEdit = useCallback((event) => {
        const clickedEventId = event.currentTarget.id;
        const clickedEventData = events.find(event => event.key === clickedEventId)
 
        setSelectedEvent(clickedEventData);
        setShowModal((showModal) => !showModal);
    },[events])


    const handleCloseModal = useCallback(() => {
        setSelectedEvent(null);
        setShowModal((showModal) => !showModal);
    },[]);


    return (
        <Box sx={EventListStyle(colors)} >
            <Typography variant="h3">Events Today {currentDate}</Typography>
            
            <List className="eventList">
                {events.map((element) => (
                    <ListItem className="eventList-item" key={element.key} id={element.key} onClick={handleEventEdit}
                    sx={{
                        backgroundColor:
                          element.importance === "Prio" ? colors.redAccent[600] :
                          element.importance === "Minor" ? colors.grey[600] : 
                          colors.blueAccent[600] 
                      }}
                    >
                        <ListItemText primary={element.name} secondary={"Made by: " + element.madeBy} sx={{width:"80%"}}/>

                        <ListItemButton onClick={handleEventDelete}>
                            <DeleteOutlineIcon />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <EventModal eventData={selectedEvent} open={showModal} onClose={() => handleCloseModal()} />
        </Box>
    );
};

export default EventList;
