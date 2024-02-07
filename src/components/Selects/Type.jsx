import { Select,MenuItem ,InputLabel,FormControl } from '@mui/material';

const TypeSelect = ({type,handleChange}) => {
    return(
        <FormControl fullWidth margin="normal">
            <InputLabel id="typeLabel">Type</InputLabel>
            <Select
                labelId="typeLabel"
                id="type"
                defaultValue={"Trailer"}
                value={type}
                onChange={handleChange}
                label="type"
                name="type"
                
            >
                <MenuItem value={"Trailer"}>Trailer</MenuItem>
                <MenuItem value={"WAB"}>WAB</MenuItem>
                <MenuItem value={"Festaufbau"}>Festaufbau</MenuItem>
            </Select>
        </FormControl>
    )
}

export default TypeSelect;