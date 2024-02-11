import StatBox from './StatBox';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';

const PlaceOverview = () => {

    return (
        <div className="smallGrid">
            <StatBox
                title="Open Gates"
                subtitle={{
                    name:"Gates",
                    count:"17/100",
                }}
                link = "calendar"
                icon={<BeenhereOutlinedIcon/>}
                boxClass="blue"
            />
        </div>
    )
}

export default PlaceOverview;