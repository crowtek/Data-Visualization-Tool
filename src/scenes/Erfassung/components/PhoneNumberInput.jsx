import { TextField } from '@mui/material';

const PhoneNumberInput = ({phoneNumber,handleChange}) => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="phoneNumber"
            label="Phone Number"
            name="phoneNumber"
            autoComplete="phoneNumber"
            autoFocus
            value={phoneNumber}
            onChange={handleChange}
        />
    )
}

export default PhoneNumberInput;