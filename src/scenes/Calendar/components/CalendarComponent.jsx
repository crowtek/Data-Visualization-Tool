import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box} from "@mui/material";
import { useCallback } from "react";

import { HandleNewEvent } from "../utils/HandleNewEvent";
import { HandleDeleteEvent } from "../utils/HandleDeleteEvent";

const CalendarComponent = ({eventData}) => {
    const handleNewEvent = useCallback(HandleNewEvent, [])
    const handleDeleteEvent = useCallback(HandleDeleteEvent, []);
    return (
        <Box flexGrow={2} ml="15px">
          <FullCalendar
            height="80vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleNewEvent}
            eventClick={handleDeleteEvent}
            // eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={eventData}
          />
        </Box>
    )
}
export default CalendarComponent;