import { Box, Typography, useTheme,useMediaQuery } from "@mui/material";
import { tokens } from "../theme";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';
import {useEffect,useState } from "react";
import PieChart from "./PieChart";



const StatBox = ({ title, labels,chartValues, icon, link,animationTime,subtitle,subtitleColor }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isScreenLg = useMediaQuery(theme.breakpoints.down("lg"));
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
      // Trigger the animation after a delay (e.g., 500ms)
      setTimeout(() => {
          setAnimate(true);
      }, animationTime ? animationTime : 500);
  }, []);


  return (
    <Box width="100%" p="15px" overflow={"hidden"}>
          {/* Box Header */}
          <Typography 
            fontSize={isScreenLg ? "18px": "22px"} 
            fontWeight="bold"  
            display={"flex"} 
            justifyContent={"space-between"} 
            alignContent={"center"}
          >
            {title}
            {link &&
              <Link to={link}>
                <OpenInNewIcon sx={{ fontSize: 30, color: colors.primary[300] }} />
              </Link>
            }
          </Typography>

          {/* Box Body when Text*/}
          {subtitle &&
            <Typography
              className={`subtitle-animation${animate ? ' subtitle-animation-fade-in' : ''}`}
              fontSize={isScreenLg ? "18px": "22px"} 
              fontWeight="bold" 
              color={subtitleColor}
              display={"flex"} 
              justifyContent={"flex-start"} 
              alignItems={"center"} 
              gap={2}
            >
              {icon}
              {subtitle}
            </Typography>
          }

          {/* Box Body when Pie chart*/}
          {labels &&
            <Box>
              <PieChart 
                labels={labels} 
                chartValues={chartValues} 
                animationTime={animationTime} 
                isScreenSmall={isScreenLg}
              />
            </Box>
          }

    </Box>
  );
};

export default StatBox;
