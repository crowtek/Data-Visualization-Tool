import { TextField } from '@mui/material';

 
 const CustomerNameInput = ({kunde, handleChange}) => {
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
            onChange={handleChange}
        />
    )
 }

 export default CustomerNameInput;