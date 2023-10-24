import axios from "axios";

export const saveNewUser = ({ userData }) => {
    const userName = document.getElementById("user-name").value;
    const userPhone = document.getElementById("user-phone").value;
    const userAge = document.getElementById("user-age").value;
    const userEmail = document.getElementById("user-email").value;

    const newUser = {
        id: userData.length + 1,
        name: userName,
        email: userEmail,
        age: userAge,
        phone: userPhone,
        access: "user"
    }
    handleSave(newUser)

}


const handleSave = async (newUser) => {
    try {
        await axios.post("/api/", newUser)
    }
    catch (error) {
        console.error(error)
    }
}