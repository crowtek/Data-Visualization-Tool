import { Select,MenuItem ,InputLabel,FormControl } from '@mui/material';

const FormTypeSelect = ({formType,handleChange}) => {
    return(
        <FormControl fullWidth>
            <InputLabel id="typeSelecteLabel">Type</InputLabel>
            <Select
                labelId="typeSelecteLabel"
                id="formType"
                defaultValue={"Ladeeinheit Planen"}
                value={formType}
                onChange={handleChange}
                label="formType"
                name="formType"
            >
                <MenuItem value={"Neuer Benutzer"}>Neuer Benutzer</MenuItem>
                <MenuItem value={"Neue Ladeeinheit"}>Neue Ladeeinheit</MenuItem>
                <MenuItem value={"Ladeeinheit Planen"}>Ladeeinheit Planen</MenuItem>
            </Select>
        </FormControl>
    )
}

export default FormTypeSelect;