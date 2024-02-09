import { TextField } from '@mui/material';

const CargoInput = ({value,onChange}) => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="cargo"
            label="Cargo"
            name="Cargo"
            autoComplete="cargo"
            autoFocus
            value={value}
            onChange={onChange}
        />
    )
}
export default CargoInput;