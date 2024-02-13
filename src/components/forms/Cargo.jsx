import { useState } from 'react';
import { Box, Button,Typography } from '@mui/material';

import AnimatedTruck from '../animations/Truck';
import CargoInput from "../InputField/Cargo";
import KennzeichenInput from "../InputField/Kennzeichen";
import ParkPlaceInput from "../InputField/ParkPlace";
import RelationInput from "../InputField/Relation";
import TypeSelect from "../Selects/Type";
import CountrySelect from "../Selects/Countries";
import CustomerNameInput from "../InputField/CustomerName";
import InfoInput from "../InputField/Info";

const NewLadeeinheit = ({data}) => {
    const [formData, setFormData] = useState({});
    const [isCheckIconVisible, setIsCheckIconVisible] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(formData.ladeeinheit);

        setIsCheckIconVisible((isCheckIconVisible) => !isCheckIconVisible);
    };

    const handleChange = (name) => (event) => {
        setFormData({
            ...formData,
            [name]: event.target.value,
        });

    };

    return (
        <Box>
            { !isCheckIconVisible ? 
            (
               <Box component="form" onSubmit={handleSubmit} sx={{display: "flex", gap: 2, flexDirection:"column"}} >
                    <Typography variant="h2" component="h2">{data ? "Edit Cargo": "Add new Cargo"}</Typography>
                    <Box className="modalContainer" sx={{display: "flex", gap: 2}}>
                        <Box>            
                            <CargoInput onChange={handleChange('cargo')} value={formData.cargo? formData.cargo : data?.cargo}/>
                            <KennzeichenInput onChange={handleChange('vehicle')} value={formData.vehicle? formData.vehicle : data?.vehicle}/>
                            <ParkPlaceInput onChange={handleChange('parkPlace')} value={formData.parkPlace? formData.parkPlace : data?.parkPlace}/>
                            <RelationInput onChange={handleChange('relation')} value={formData.relation? formData.relation : data?.relation}/>
                        </Box>
                        <Box>                
                            <TypeSelect onChange={handleChange('type')} value={formData.type? formData.type:data?.land.typ}/>
                            <CountrySelect onChange={handleChange('country')} value={formData.country? formData.country:data?.land.name}/>
                            <CustomerNameInput onChange={handleChange('customerName')} value={formData.customerName? formData.customerName : data?.customer.name}/>
                            <InfoInput onChange={handleChange('info')} value={formData.info? formData.info : data?.info}/>
                        </Box>
                    </Box>

                    <Box sx={{display:"flex", justifyContent:data ? "space-between" : "flex-end"}}>
                            {data ? <Button variant="contained" color="error">Delete</Button> : ""}
                            <Button type="submit" variant="contained" color="success">Submit</Button>
                        </Box>
                </Box>
            ) :
            (            
                <div className="CheckIconContainer">
                    <AnimatedTruck isVisible={isCheckIconVisible} />
                </div>
            )
            }       


        </Box>

    );
};

export default NewLadeeinheit;