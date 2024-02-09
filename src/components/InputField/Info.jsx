import { TextField } from '@mui/material';

 
 const InfoInput = ({value, onChange}) => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="info"
            label="Info"
            type="info"
            id="info"
            autoComplete="info"
            value={value}
            onChange={onChange}
        />
    )
 }

 export default InfoInput;