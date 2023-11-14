import { TextField } from '@mui/material';

 
 const InfoInput = ({info, handleChange}) => {
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
            value={info}
            onChange={handleChange}
        />
    )
 }

 export default InfoInput;