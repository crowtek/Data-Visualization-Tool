
import NameInput from "./components/NameInput"
import EmailInput from "./components/EmailInput";
import PhoneNumberInput from "./components/PhoneNumberInput";

const NewUserForm = ({handleChange,formData}) => {
    return (
        <>
            <NameInput name={formData.username} handleChange={handleChange}/>
            <EmailInput email={formData.email} handleChange={handleChange}/>
            <PhoneNumberInput phoneNumber={formData.phoneNumber} handleChange={handleChange}/>
        </>
    )
}
export default NewUserForm;