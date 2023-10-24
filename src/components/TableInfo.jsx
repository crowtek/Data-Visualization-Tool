import { Box } from "@mui/material";

const VehicleInfo = ({ info }) => {
    return (
        <>
          {info &&
            info.map((item, key) => {
              return <Box sx={{
                      border:"solid 1px #807f7fa8",
                      color:"#dcdcdc91", 
                      margin:1, 
                      padding:"5px 15px 5px 15px",
                      borderRadius:5
                    }} 
                      key={key}>
                        {item}
                      </Box>
            })
          }
        </>
      )
}

export default VehicleInfo;