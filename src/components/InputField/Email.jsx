import { TextField } from '@mui/material';

 
 const EmailInput = ({value, onChange}) => {
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
        value={value}
        onChange={onChange}
    />
    )
 }

 export default EmailInput;