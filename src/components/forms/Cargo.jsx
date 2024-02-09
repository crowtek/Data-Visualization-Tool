import { useState } from 'react';

import AnimatedCheckIcon from '../animations/CheckIcon';
import { Box, Button,Typography } from '@mui/material';

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
                            <CargoInput onChange={handleChange('cargo')} value={data?.cargo}/>
                            <KennzeichenInput onChange={handleChange('kennzeichen')} value={data?.vehicle}/>
                            <ParkPlaceInput onChange={handleChange('parkPlace')} value={data?.parkPlace}/>
                            <RelationInput onChange={handleChange('relation')} value={data?.relation}/>
                        </Box>
                        <Box>                
                            <TypeSelect onChange={handleChange('type')} value={data?.typ}/>
                            <CountrySelect onChange={handleChange('country')} value={data?.land.name}/>
                            <CustomerNameInput onChange={handleChange('customerName')} value={data?.customer.name}/>
                            <InfoInput onChange={handleChange('info')} value={data?.info}/>
                        </Box>
                    </Box>

                    <Button type="submit" variant="contained">Submit</Button>
                </Box>
            ) :
            (            
                <div className="CheckIconContainer">
                    <AnimatedCheckIcon isVisible={isCheckIconVisible} />
                    <Typography variant="h2" component="h2">Gespeichert</Typography>
                </div>
            )
            }       


        </Box>

    );
};

export default NewLadeeinheit;