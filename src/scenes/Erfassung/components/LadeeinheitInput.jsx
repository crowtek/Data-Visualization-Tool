import { TextField } from '@mui/material';

const LadeeinheitInput = ({ladeeinheit,handleChange}) => {
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
            value={ladeeinheit}
            onChange={handleChange}
        />
    )
}
export default LadeeinheitInput;