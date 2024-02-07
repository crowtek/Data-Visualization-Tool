import { Box,Avatar  } from '@mui/material';

import NameInput from "../components/NameInput"
import EmailInput from "../components/EmailInput";
import PhoneNumberInput from "../components/PhoneNumberInput";

const NewUserForm = () => {
    return (
        <Box sx={{display:"flex"}}>
            <Box>
                <NameInput />
                <EmailInput />
                <PhoneNumberInput/>
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