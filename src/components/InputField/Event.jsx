import { TextField } from '@mui/material';

const EventInput = ({value, onChange}) => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="event"
            label="Event"
            type="event"
            id="event"
            autoComplete="event"
            value={value}
            onChange={onChange}
        />
    )
}

 export default EventInput;