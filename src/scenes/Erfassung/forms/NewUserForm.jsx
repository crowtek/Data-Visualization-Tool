import { Box,Typography,Avatar  } from '@mui/material';

import NameInput from "../components/NameInput"
import EmailInput from "../components/EmailInput";
import PhoneNumberInput from "../components/PhoneNumberInput";

const NewUserForm = ({handleChange,formData}) => {
    return (
        <Box sx={{display:"flex"}}>
            <Box>
                <NameInput name={formData.username} handleChange={handleChange}/>
                <EmailInput email={formData.email} handleChange={handleChange}/>
                <PhoneNumberInput phoneNumber={formData.phoneNumber} handleChange={handleChange}/>
            </Box>
            <Box>
                <Avatar
                    alt="Image"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 124, height: 124, margin:"70px"}}
                />
            </Box>
        </Box>
    )
}
export default NewUserForm;