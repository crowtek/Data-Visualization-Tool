import { TextField } from '@mui/material';

const CargoInput = ({value,onChange}) => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="ladeeinheit"
            label="Ladeeinheit"
            name="ladeeinheit"
            autoComplete="ladeeinheit"
            autoFocus
            value={value}
            onChange={onChange}
        />
    )
}
export default CargoInput;