import { Box, Typography, useTheme,useMediaQuery } from "@mui/material";
import { tokens } from "../theme";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { NavigationContext } from "../App";
import PieChart from "./PieChart";



const StatBox = ({ title, labels,chartValues, icon, link,animationTime,subtitle,subtitleColor }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("xl"));
  const isScreenLg = useMediaQuery(theme.breakpoints.down("lg"));

  const { setPage } = useContext(NavigationContext);
  const setNavigation = () => {
    setPage(link);
  };

  return (
    <Box width="100%" p="15px">
          <Typography fontSize={isScreenLg ? "18px": "22px"} fontWeight="bold"  display={"flex"} justifyContent={"space-between"} alignContent={"center"}>
            {title}
            {link &&
              <Link to={link} onClick={setNavigation}>
                <OpenInNewIcon sx={{ fontSize: 30, color: colors.primary[300] }} />
              </Link>
          }
          </Typography>
          {subtitle &&
            <Typography 
              variant="h2" 
              fontWeight="bold" 
              color={subtitleColor}
              display={"flex"} 
              justifyContent={"center"} 
              alignItems={"center"} 
              p={5} 
              gap={2}
            >
              {icon}
              {subtitle}
            </Typography>
          }

        {labels &&
          <Box>
            <PieChart labels={labels} chartValues={chartValues} animationTime={animationTime} isScreenSmall={isScreenLg}/>
          </Box>
        }
    </Box>
  );
};

export default StatBox;
