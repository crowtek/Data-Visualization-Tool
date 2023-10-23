import { useEffect, useState } from "react";
import { db } from "../config/firebase-config";
import { query, collection, onSnapshot } from "firebase/firestore";

export const useGetVehicleData = () => {
  const [vehicles, setVehicles] = useState([]);

  const vehicleCollectionRef = collection(db, "vehicles");

  useEffect(() => {
    let unsubscribe;
    try{
        unsubscribe = onSnapshot(query(vehicleCollectionRef), (snapshot) => {
        const docs = [];
        snapshot.forEach((doc) => {
            const data = doc.data();
            const id = doc.id;
            docs.push({ ...data, id });
        });
        setVehicles(docs); 
        });
    }catch(err){
        console.error(err)
    }

    return () => unsubscribe(); 
  }, []); 

  return { vehicles };
};
