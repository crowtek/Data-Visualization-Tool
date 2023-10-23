import { useMemo, useRef } from "react";
import { Box, useTheme,TextField,Button } from "@mui/material";
import { tokens } from "../../../theme";
import { HandleCarIntake as HandleCarIntakeImport } from "../utils/HandleCarIntake";
import { useState } from "react";

const VehicleInput = () => {
  const [intakeCar, setIntakeCar] = useState(0)
  const vehicleNumberRef = useRef(null);
  const vehiclePlaceRef = useRef(null);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const focusedColor = colors.blueAccent[500];

  const buttonStyle = useMemo(() => ({
    backgroundColor: colors.primary[400],
    color: colors.primary[100],
    fontWeight: "bold",
    letterSpacing: 1,
    flexGrow: 1,
    transition: "all 0.4s ease-in-out",
    "&:hover": {
        backgroundColor: colors.primary[300],
        color: colors.blueAccent[800],
    }
  }), [colors]);


  const handleCarIntake = () => {
    HandleCarIntakeImport(vehicleNumberRef, vehiclePlaceRef);
    setIntakeCar(intakeCar + 1)
  };


  return (
    <Box style={{ flexGrow: 1.5 }} p={"50px 0 20px 0"}>
        
        <Box style={{ display:"flex",gap:20,}} sx={{
            "& label.Mui-focused": {
              color: focusedColor
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: focusedColor
            },
            "& .MuiFilledInput-underline:after": {
              borderBottomColor: focusedColor
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: focusedColor
              }
            }}}>
            <TextField inputRef={vehicleNumberRef} id="vehical-number" label="Vehical Number"style={{ flexGrow: 2 }}/>
            <TextField inputRef={vehiclePlaceRef} id="vehical-place" label="Vehical Place" style={{ flexGrow: 2 }}/>
            <Button onClick={handleCarIntake} variant="outlined" style={buttonStyle}> 
                Save
            </Button>
        </Box>
    </Box>
  )
}

export default VehicleInput;