import { TextField } from '@mui/material';

 
 const InfoInput = ({info, onChange}) => {
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
            onChange={onChange}
        />
    )
 }

 export default InfoInput;