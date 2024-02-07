import { TextField } from '@mui/material';

const NameInput = ({name,handleChange}) => {
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
            value={name}
            onChange={handleChange}
        />
    )
}
export default NameInput;