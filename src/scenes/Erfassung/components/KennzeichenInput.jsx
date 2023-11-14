import { TextField } from '@mui/material';

const KennzeichenInput = ({kennzeichen,handleChange}) => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="kennzeichen"
            label="Kennzeichen"
            name="kennzeichen"
            autoComplete="kennzeichen"
            autoFocus
            value={kennzeichen}
            onChange={handleChange}
        />
    )
}
export default KennzeichenInput;