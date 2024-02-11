import { TextField } from '@mui/material';

const PhoneNumberInput = ({value,onChange}) => {
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
            value={value}
            onChange={onChange}
        />
    )
}

export default PhoneNumberInput;