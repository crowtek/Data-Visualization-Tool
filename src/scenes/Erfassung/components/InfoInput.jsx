import { TextField } from '@mui/material';

 
 const InfoInput = ({onChange}) => {
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
            onChange={onChange}
        />
    )
 }

 export default InfoInput;