import { TextField } from '@mui/material';

 
 const EmailInput = ({email, handleChange}) => {
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
        value={email}
        onChange={handleChange}
    />
    )
 }

 export default EmailInput;