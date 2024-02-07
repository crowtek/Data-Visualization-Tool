import { TextField } from '@mui/material';

const LadeeinheitInput = ({ladeeinheit,onChange}) => {
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
            onChange={onChange}
        />
    )
}
export default LadeeinheitInput;