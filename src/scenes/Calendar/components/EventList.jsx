
import { useState, useCallback, useMemo } from "react";
import { Box,List,ListItem,ListItemText,Typography,useTheme,ListItemButton,Modal,TextField,Button} from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { tokens } from "../../../theme";
import { mockEvents } from "../../../data/mockData"
import { ModalStyle as ModalStyleImport } from "../../../styles/ModalStyle";

const EventList = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const ModalStyle = useMemo(() => {
        return {...ModalStyleImport}
    },[])

    const currentDate = new Date().toLocaleDateString('en-CA')
    const todayEvents = useMemo(() => {
        return mockEvents.filter(event => event.date === currentDate)
    },[currentDate])

    const [events, setEvents] = useState(todayEvents);
    
    const [isOpenModal, setIsOpenModal] = useState(false); // State to control Modal visibility
    const [selectedEvent, setSelectedEvent] = useState(null); // State to store the selected event data

    const handleEventDelete = useCallback((event) => {
        event.stopPropagation();
        const clickedEventId = event.currentTarget.parentNode.id;
        setEvents(events.filter(event => event.key !== clickedEventId))
    },[events]);

    const handleEventEdit = useCallback((event) => {
        const clickedEventId = event.currentTarget.id;
        const clickedEventData = events.find(event => event.key === clickedEventId)
 
        setSelectedEvent(clickedEventData);
        setIsOpenModal(true);
    },[events])


    const handleCloseModal = useCallback(() => {
        setSelectedEvent(null);
        setIsOpenModal(false);
    },[]);


    return (
        <Box display="flex" justifyContent="space-between" flexGrow={0.8}>
            <Box flexGrow={1} backgroundColor={colors.primary[400]} p="15px" borderRadius="4px">
                <Typography variant="h4">Events</Typography>
                
                <List>
                    {events.map((element) => (
                        <ListItem 
                        key={element.key} 
                        id={element.key} 
                        sx={{ backgroundColor: colors.blueAccent[600], margin: "10px 0", borderRadius: "2px",}}
                        onClick={handleEventEdit}
                        >
                            <ListItemText primary={element.name} secondary={element.date} sx={{width:"80%"}}/>

                            <ListItemButton onClick={handleEventDelete} sx={{borderRadius:2,width:"30px"}}>
                                <DeleteOutlineIcon />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Modal open={isOpenModal} onClose={handleCloseModal}>
                <Box sx={ModalStyle}>
                    {selectedEvent && (
                        <Box sx={{display:"flex",flexDirection:"column",gap:3}}>
                            <Typography id={selectedEvent.key} variant="h4">Event</Typography>
                            <TextField id="event-name" label="Name" defaultValue={selectedEvent.name}/>
                            <TextField id="event-date" label="Date" defaultValue={selectedEvent.date}/>
                            <TextField disabled id="event-madeBy" label="Event made by" defaultValue={selectedEvent.madeBy}/>
                            <Button variant="contained" sx={{letterSpacing:1}}>Save Changes</Button>
                        </Box>
                    )}
                </Box>
            </Modal>
        </Box>
    );
};

export default EventList;
