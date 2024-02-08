import { TextField } from '@mui/material';

const CustomerNameInput = ({kunde, onChange}) => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="kunde"
            label="Costumer"
            type="kunde"
            id="kunde"
            autoComplete="kunde"
            value={kunde}
            onChange={onChange}
        />
    )
}

 export default CustomerNameInput;