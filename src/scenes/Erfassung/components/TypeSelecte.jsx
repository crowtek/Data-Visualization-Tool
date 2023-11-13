import { Select,MenuItem ,InputLabel,FormControl } from '@mui/material';

const TypeSelect = ({type,handleChange}) => {
    return(
        <FormControl fullWidth>
            <InputLabel id="typeSelecteLabel">Type</InputLabel>
            <Select
                labelId="typeSelecteLabel"
                id="typeSelecte"
                defaultValue={"Ladeeinheit Planen"}
                value={type}
                label="Type"
                onChange={handleChange}
            >
                <MenuItem value={"Neuer Benutzer"}>Neuer Benutzer</MenuItem>
                <MenuItem value={"Neue Ladeeinheit"}>Neue Ladeeinheit</MenuItem>
                <MenuItem value={"Ladeeinheit Planen"}>Ladeeinheit Planen</MenuItem>
            </Select>
        </FormControl>
    )
}

export default TypeSelect;