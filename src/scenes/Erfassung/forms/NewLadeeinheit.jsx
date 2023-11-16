import { Box } from '@mui/material';

import LadeeinheitInput from "../components/LadeeinheitInput";
import KennzeichenInput from "../components/KennzeichenInput";
import StandortInput from "../components/StandortInput";
import RelationInput from "../components/RelationFilter";
import TypeSelect from "../components/TypeSelect";
import CountrySelect from "../components/CountrySelect";
import CustomerNameInput from "../components/CustomerNameInput";
import InfoInput from "../components/InfoInput";

const NewLadeeinheit = ({handleChange,formData}) => {
    return (
        <Box sx={{display:"flex", gap:2}}>
            <Box>            
                <LadeeinheitInput handleChange={handleChange} ladeeinheit={formData.ladeeinheit} />
                <KennzeichenInput handleChange={handleChange} kennzeichen={formData.kennzeichen} />
                <StandortInput handleChange={handleChange} standort={formData.standort} />
                <RelationInput handleChange={handleChange} relation={formData.relation} />
            </Box>
            <Box>                
                <TypeSelect handleChange={handleChange} type={formData.type} />
                <CountrySelect handleChange={handleChange} land={formData.land} />
                <CustomerNameInput handleChange={handleChange} kunde={formData.kunde} />
                <InfoInput handleChange={handleChange} info={formData.info}  />
            </Box>
        </Box>
    )
}

export default NewLadeeinheit;