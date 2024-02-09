import { TextField } from '@mui/material';

const CustomerNameInput = ({value, onChange}) => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="Customer"
            label="Customer"
            type="Customer"
            id="Customer"
            autoComplete="Customer"
            value={value}
            onChange={onChange}
        />
    )
}

 export default CustomerNameInput;