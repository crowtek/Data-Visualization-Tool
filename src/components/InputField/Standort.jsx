import { TextField } from '@mui/material';

const StandortInput = ({standort,onChange}) => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="standort"
            label="Standort"
            name="standort"
            autoComplete="standort"
            autoFocus
            value={standort}
            onChange={onChange}
        />
    )
}
export default StandortInput;