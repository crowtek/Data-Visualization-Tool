import { useCallback, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box} from "@mui/material";

import EventModal from "../../../components/Modal/Event"

const CalendarComponent = ({eventData}) => {
    const [showModal, setShowModal] = useState(false);
    const [clickedEventData, setClickedEventData] = useState(false);

    const handleModal = (selected) =>{
      console.log(selected?.event?._def.extendedProps);
      setClickedEventData(selected?.event?._def.extendedProps);
      setShowModal((showModal) => !showModal);
    }

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
            select={handleModal}
            eventClick={handleModal}
            // eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={eventData}
          />
          <EventModal eventData={clickedEventData} open={showModal} onClose={() => handleModal()} />
        </Box>
    )
}
export default CalendarComponent;