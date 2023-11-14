import { TextField } from '@mui/material';

const RelationInput = ({relation,handleChange}) => {
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
            value={relation}
            onChange={handleChange}
        />
    )
}
export default RelationInput;