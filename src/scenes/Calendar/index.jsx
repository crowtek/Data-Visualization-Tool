
import { Box } from "@mui/material";
import { mockEvents } from "../../data/mockData"

import EventList from "./components/EventList";
import CalendarComponent from "./components/CalendarComponent";

const Calendar = () => {
  return (
    <Box m="20px">

      <Box display="flex" justifyContent="space-between" mt={"10px"}>
        <EventList />
        <CalendarComponent eventData={mockEvents} />
      </Box>
    </Box>
  );
};

export default Calendar;
