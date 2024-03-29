
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const CountrySelect = ({ value, onChange }) => {
  const countries = [
    'Germany',
    'United States',
    'Canada',
    'United Kingdom',
    'France',
    'Australia',
    'Japan',
    'Brazil',
    'India',
    'China',
    'South Africa',
    'Mexico',
    'Spain',
    'Italy',
    'Austria',
    'Netherlands',
    'Denmark',
    'Norway',
    'Switzerland',
    'Sweden',
    'Belgium',
    'Poland',
  ];
  

  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="countryLabel">Country</InputLabel>
      <Select
        labelId="countryLabel"
        defaultValue={"Germany"}
        id="country"
        value={value}
        onChange={onChange}
        label="Country"
        name="country"
      >
        {countries.map((countryName, index) => (
          <MenuItem key={index} value={countryName}>
            {countryName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CountrySelect;