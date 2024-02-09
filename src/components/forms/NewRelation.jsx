import { useState } from 'react';
import { Box,Button, Stack, Typography  } from '@mui/material';

import AnimatedCheckIcon from '../animations/CheckIcon';
import StandortInput from '../InputField/Standort';
import CountrySelect from '../Selects/Countries';
import CustomerNameInput from '../InputField/CustomerName';

const NewRelation = () => {
    const [formData, setFormData] = useState({});
    const [isCheckIconVisible, setIsCheckIconVisible] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)

        setIsCheckIconVisible((isCheckIconVisible) => !isCheckIconVisible)
    }

    const handleChange = (name) => (event) => {
        setFormData({
            ...formData,
            [name]:event.target.value,
        });
    }

    return (
        <Box>
            { !isCheckIconVisible ? 
            (
                <Box component="form" onSubmit={handleSubmit}> 
                    <Stack spacing={3}>
                        <Typography variant="h2" component="h2">Neue Relation erstellen</Typography>
                        <CustomerNameInput onChange={handleChange('costumerName')}/>
                        <Typography variant="h4">Relation Start</Typography>
                        <StandortInput onChange={handleChange('standortStart')}/>
                        <CountrySelect onChange={handleChange('countryStart')}/>

                        <Typography variant="h4">Relation Ende</Typography>
                        <StandortInput onChange={handleChange('standortEnd')}/>
                        <CountrySelect onChange={handleChange('countryEnd')}/>

                        <Button type="submit" variant="contained">Submit</Button>
                    </Stack>
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
    )
}
export default NewRelation;