import { Select,MenuItem ,InputLabel,FormControl } from '@mui/material';

const TypeSelect = ({name,handleChange}) => {
    return(
        <FormControl fullWidth>
            <InputLabel id="typeSelecteLabel">Age</InputLabel>
            <Select
                labelId="typeSelecteLabel"
                id="typeSelecte"
                value={name}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    )
}

export default TypeSelect;