import { Box,Avatar  } from '@mui/material';

import NameInput from "../../../components/InputField/UserName"
import EmailInput from "../../../components/InputField/Email";
import PhoneNumberInput from "../../../components/InputField/PhoneNumber";

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