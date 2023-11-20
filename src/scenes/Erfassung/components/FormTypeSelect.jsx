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
                <MenuItem value={"Ladeeinheit Planen"}>Neue Ladeeinheit (Zulauf)</MenuItem>
                <MenuItem value={"Neue Ladeeinheit"}>Neue Ladeeinheit (Leitstand)</MenuItem>
            </Select>
        </FormControl>
    )
}

export default FormTypeSelect;