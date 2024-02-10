import { Select,MenuItem ,InputLabel,FormControl } from '@mui/material';

const ImportanceSelect = ({value,onChange}) => {
    return(
        <FormControl fullWidth margin="normal">
            <InputLabel id="importanceLabel">Type</InputLabel>
            <Select
                labelId="importanceLabel"
                id="importance"
                defaultValue={"Normal"}
                value={value}
                onChange={onChange}
                label="Importance"
                name="importance"
            >
                <MenuItem value={"Prio"}>Prio</MenuItem>
                <MenuItem value={"Normal"}>Normal</MenuItem>
                <MenuItem value={"Minor"}>Minor</MenuItem>
            </Select>
        </FormControl>
    )
}

export default ImportanceSelect;