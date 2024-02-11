import { TextField } from '@mui/material';

const NameInput = ({value,onChange}) => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={value}
            onChange={onChange}
        />
    )
}
export default NameInput;