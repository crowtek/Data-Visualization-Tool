import { TextField } from '@mui/material';

const RelationInput = ({value,onChange}) => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="relation"
            label="Relation"
            name="relation"
            autoComplete="relation"
            autoFocus
            value={value}
            onChange={onChange}
        />
    )
}
export default RelationInput;