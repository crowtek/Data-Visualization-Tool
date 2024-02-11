import { useMemo } from "react";
import StatBox from './StatBox';
import EventIcon from '@mui/icons-material/Event';

const CountEventsToday = ({events}) => {
    const currentDate = new Date().toLocaleDateString('en-CA')
    const todayEvents = useMemo(() => {
        return events.filter(event => event.date === currentDate)
    },[currentDate,events])

    return (
        <div className="smallGrid">
            <StatBox
                title="Events Today"
                subtitle={{
                    name:"Events",
                    count:todayEvents.length,
                }}
                link = "calendar"
                icon={<EventIcon/>}
                animationTime="300"
                boxClass="green"
            />
        </div>
    )
}

export default CountEventsToday;