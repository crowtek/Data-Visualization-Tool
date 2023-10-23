import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config"

export const useAddVehicle = () => {
    const vehicleColectionRef = collection(db, "vehicles");

    const addVehicle = async ({name, parkPlace}) => {
        await addDoc(vehicleColectionRef, {
            name,
            incomingTime: serverTimestamp(),
            takeAppointment:"",
            parkPlace,
            customerName: "",
            customerPhone: "",
            status: "pending",
            info: "",
        })
    }

    return {addVehicle}
}