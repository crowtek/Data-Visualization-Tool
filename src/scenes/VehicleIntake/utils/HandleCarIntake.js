import { useAddVehicle } from "../../../hooks/useAddVehicle";

export const HandleCarIntake = (vehicleNumberRef,vehiclePlaceRef) => {
    const { addVehicle }  = useAddVehicle();

    const VehicleNumer = vehicleNumberRef.current.value;
    const VehicleParkingPlace = vehiclePlaceRef.current.value

    // Save new vehicle in DB
    addVehicle({name:VehicleNumer,parkPlace: VehicleParkingPlace});

    // Reset inputs
    vehicleNumberRef.current.value ="";
    vehiclePlaceRef.current.value = "";
}