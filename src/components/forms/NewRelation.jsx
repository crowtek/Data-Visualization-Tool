import { useState } from 'react';
import { Box,Button, Stack, Typography  } from '@mui/material';

import StandortInput from '../InputField/Standort';
import CountrySelect from '../Selects/Countries';
import CustomerNameInput from '../InputField/CustomerName';

const NewRelation = () => {
    const [formData, setFormData] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
    }

    const handleChange = (name) => (event) => {
        setFormData({
            ...formData,
            [name]:event.target.value,
        });
    }

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={3}>
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
    )
}
export default NewRelation;