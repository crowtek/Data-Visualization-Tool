import { useState } from 'react';

import AnimatedCheckIcon from '../animations/CheckIcon';
import { Box, Button,Typography } from '@mui/material';

import LadeeinheitInput from "../InputField/Ladeeinheit";
import KennzeichenInput from "../InputField/Kennzeichen";
import StandortInput from "../InputField/Standort";
import RelationInput from "../InputField/Relation";
import TypeSelect from "../Selects/Type";
import CountrySelect from "../Selects/Countries";
import CustomerNameInput from "../InputField/CustomerName";
import InfoInput from "../InputField/Info";

const NewLadeeinheit = () => {
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
                    <Typography variant="h2" component="h2">Neue Ladeeinheit erstellen</Typography>
                    <Box className="modalContainer" sx={{display: "flex", gap: 2}}>
                        <Box>            
                            <LadeeinheitInput onChange={handleChange('ladeeinheit')} />
                            <KennzeichenInput onChange={handleChange('kennzeichen')} />
                            <StandortInput onChange={handleChange('standort')} />
                            <RelationInput onChange={handleChange('relation')} />
                        </Box>
                        <Box>                
                            <TypeSelect onChange={handleChange('type')} />
                            <CountrySelect onChange={handleChange('country')} />
                            <CustomerNameInput onChange={handleChange('customerName')} />
                            <InfoInput onChange={handleChange('info')} />
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