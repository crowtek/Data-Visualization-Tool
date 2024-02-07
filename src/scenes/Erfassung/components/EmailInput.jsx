import { TextField } from '@mui/material';

 
 const EmailInput = ({onChange }) => {
    return (
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="email"
        label="Email Address"
        type="email"
        id="email"
        autoComplete="email"
        onChange={onChange}
    />
    )
 }

 export default EmailInput;