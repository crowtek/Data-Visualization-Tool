import { TextField } from '@mui/material';

const KennzeichenInput = ({value,onChange}) => {
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
            value={value}
            onChange={onChange}
        />
    )
}
export default KennzeichenInput;