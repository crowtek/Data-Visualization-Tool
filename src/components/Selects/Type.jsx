import { Select,MenuItem ,InputLabel,FormControl } from '@mui/material';

const TypeSelect = ({value,onChange}) => {
    return(
        <FormControl fullWidth margin="normal">
            <InputLabel id="typeLabel">Type</InputLabel>
            <Select
                labelId="typeLabel"
                id="type"
                defaultValue={"Trailer"}
                value={value}
                onChange={onChange}
                label="type"
                name="type"
            >
                <MenuItem value={"Trailer"}>Trailer</MenuItem>
                <MenuItem value={"WAB"}>WAB</MenuItem>
                <MenuItem value={"Truck"}>Truck</MenuItem>
            </Select>
        </FormControl>
    )
}

export default TypeSelect;