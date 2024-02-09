import { TextField } from '@mui/material';

const ParkPlaceInput = ({value,onChange}) => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="parkPlace"
            label="Park Place"
            name="Park Place"
            autoComplete="Park Place"
            autoFocus
            value={value}
            onChange={onChange}
        />
    )
}
export default ParkPlaceInput;