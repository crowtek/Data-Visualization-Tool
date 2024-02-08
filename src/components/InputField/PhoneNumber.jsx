import { TextField } from '@mui/material';

const PhoneNumberInput = ({phoneNumber,onChange}) => {
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
            onChange={onChange}
        />
    )
}

export default PhoneNumberInput;